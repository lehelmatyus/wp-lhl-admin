<?php 
    $reset_disabled = false;
    if (! $this->license_is_active){
        $reset_disabled = true;
    }

    $reset_link_text = __("Ajax Button Example", 'terms-popup-on-user-login' );
    $onclick_event_name = "ajaxButtonExample";
    
    AdminForm::button__active_key_required(
        $this->license_is_active,
        [],
        $reset_link_text,
        "button_id_EXAMPLE",
        $reset_disabled,
        $onclick_event_name,
        [
            'data-user-id = ' . $user->ID
        ]
    );

?>