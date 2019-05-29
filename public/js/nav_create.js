jQuery(function($) {

    'use strict';
    let isMobile = $('body').hasClass('mobile'),
        isTablet = (navigator.userAgent.search(/mobi/i) >= 0) && (screen.availWidth > 450);
    window.isTablet = isTablet;
    let body = $('body');

})