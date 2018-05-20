
<!--pop up modal-->
<div class="wrc_social_media_input-modal" id="wrc_social_media_input-modal">
    <div class="wrc_social_media_input-modal-wrap">
        <div class="wrc_social_media_input-modal-header">
            <h3><?php _e( 'Twitter Account Setting:', 'woo-review' ); ?></h3>
        </div>

        <form action="" id="wrc_social_media_submitted_data" data-ajax="false">

            <div class="wrc_social_media_input-modal-body">
                <div id="wrc_pop_up_error" style="color:red; display: none;">Please insert the followings. </div>
                <div class="form-group" >
                    <input class="wrc_social_media_input" required placeholder="Enter Consumer Key" type="text" name="wrc_t_consumer_key">
                </div>
                <div class="form-group">
                    <input  class="wrc_social_media_input" required placeholder="Enter Consumer Secret Key" type="text" name="wrc_t_consumer_secret_key">
                </div>
                <div class="form-group">
                    <input  class="wrc_social_media_input" required placeholder="Enter Access Key" type="text" name="wrc_t_access_token">
                </div>
                <div class="form-group">
                    <input  class="wrc_social_media_input" required placeholder="Enter Access Secret Key"  type="text" name="wrc_t_access_token_secret_key">
                </div>

            </div>
            <div class="wrc_social_media_input-modal-footer">
                <button type="submit" class="button-secondary wrc_social_media_submit"><?php _e( 'Save', 'Woo Feed' ); ?></button>
                <button class="button-primary wrc_social_media_cancle"><?php _e( 'Cancel', 'Woo Feed' ); ?></button>
            </div>
        </form>
    </div>
</div>