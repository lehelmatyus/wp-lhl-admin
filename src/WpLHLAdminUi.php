<?php

class WpLHLAdminUi{

    /**
     * Enq Admin Styles
     */
    function wp_enqueue_style() {
        wp_enqueue_style('wp-lhl-admin-ui-styles',  plugin_dir_url( dirname( __FILE__ ) ) . '/vendor/lehelmatyus/wp-lhl-admin-ui/css/wp-lhl-admin-ui.css');
    }

}