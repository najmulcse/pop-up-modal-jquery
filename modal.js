(function( $ ) {
    'use strict';

    /**
     * All of the code for your admin-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:



     * When the window is loaded:
     *
     * $( window ).load(function() {
	 *
	 * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */

    $(function() {




//Social media facebook and twitter
if($('.wrc_social_button_enable').prop('checked')){
    $('.wrc_social_media').show();
}else{
    $('.wrc_social_media').hide();
}


$('.wrc_social_button_enable').on('click', function(){
    if($('.wrc_social_button_enable').prop('checked')){
        $('.wrc_social_media').show();
    }else{
        $('.wrc_social_media').hide();
    }
});

$('.wrc_social_media').on("click", function(){
    var selectedMedia = $(this).val();
    if(selectedMedia === "Add Twitter"){
        var modal = $('#wrc_social_media_input-modal' );
        modal.addClass('modal-active');

    }
    $(".wrc_social_media_submit").on("click", function(e){
        e.preventDefault();
        var data ={};
        var error = false;
        $.each($("#wrc_social_media_submitted_data").serializeArray(), function (i, field) {
            if(field.value===""){
                error = true;
            }
            data[field.name] = field.value;
        });
        if(error === false){
            $("#wrc_social_media_submitted_data").trigger('reset');
            modal.removeClass('modal-active');
            $.ajax({
                url   : wrc_test_email_ajax_obj.wrc_test_email_ajax_url,
                type  : "POST",
                data  : {
                    _ajax_nonce   :wrc_test_email_ajax_obj.nonce,
                    action        : "wrc_add_twitter_account_info",
                    media         : selectedMedia,
                    formData      : data
                },
                success: function(response){
                    console.log(response);
                    if(response.status === true){
                        $('.social_media_adding_status').html("<b style='color:green;'> Successfully added twitter account. </b>")
                    }else{
                        $('.social_media_adding_status').html("<b style='color:red;'> Failed to twitter account. </b>")

                    }
                },
                error: function(error){
                    //  console.log(error);
                }
            });
            $('#wrc_pop_up_error').hide();
        }else{
            $('#wrc_pop_up_error').show();
        }


        return false;
    });
    modal.on('click', '.wrc_social_media_cancle', function(e) {
        e.preventDefault();
        modal.removeClass('modal-active');
    });

});

    });


})( jQuery );

