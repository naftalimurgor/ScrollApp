'use strict';
/* eslint-disable no-console */
// eslint-disable-next-line no-undef
jQuery(function($) {


    if (navigator.userAgent.match(/Chrome/)) {
        $('body').addClass('chrome');
        window.GS.isChrome = true;
    } else {
        $('body').addClass('non-chrome');
    }

    window.blockchain.blockchainController = new ScrollMagic.Controller();
    window.blockchain.scenes = [];

    var windowHeight = $(window).innerHeight(),
        navHeight = $('header').outerHeight();
    window.blockchain.windowHeight = windowHeight;
    window.blockchain.sceneHeight = windowHeight - navHeight - 30;
    window.blockchain.tickRate = 50;
    window.blockchain.mobileTickRate = 10;
    $('#intro').css('height', window.blockchain.sceneHeight);

    window.blockchain.isWebGL = webgl_detect();
    if ($('.chrome').length > 0) {
        window.blockchain.isChrome = true;
    } else {
        window.blockchain.isChrome = false;
    }

    if (navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\//)) { // if IE
        console.log('IE Detected');
        window.blockchain.tickRate = 200;
        $('body').addClass('ie-browser');
        $('body').on("mousewheel", function() {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta,
                currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }

    var allowWebGL = getParameterByName('webgl'),
        lowFidelity = getParameterByName('lf');

    if (allowWebGL == 'false') {
        allowWebGL = false;
        window.blockchain.isWebGL = false;
    }

    if (lowFidelity == 'true') {
        lowFidelity = true;
        window.blockchain.isChrome = false;
    }

    if (window.blockchain.isWebGL && window.blockchain.isChrome && allowWebGL !== false) {
        console.log('WebGL detected!');
        console.log('Chrome browser detected!');
        console.log('Loading high fidelity version');
        document.querySelector('body').classList.add('webgl');
        window['blockchain']['highFidelity'] = true;
        var script1 = document.createElement('script');
        script1.src = 'js/background_config.js';
        $('head script:last').after(script1);
    } else if (window.blockchain.isWebGL && !window.blockchain.isChrome !== false) {
        console.log('WebGL detected!');
        console.log('Non Chrome browser detected!');
        console.log('Loading low fidelity version');
        document.querySelector('body').classList.add('webgl');
        window['blockchain']['lowFidelity'] = true;
        var script = document.createElement('script');
        script.src = 'js/background_config.js';
        $('head script:last').after(script);
    } else {
        console.log('No WebGL detected!');
        console.log('Loading static version');
    }

    function webgl_detect(return_context) {
        if (window.WebGLRenderingContext) {
            var canvas = document.createElement("canvas"),
                names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
                context = false;
            for (var i = 0; i < 4; i++) {
                try {
                    context = canvas.getContext(names[i]);
                    if (context && typeof context.getParameter == "function") {
                        // WebGL is enabled
                        if (return_context) {
                            // return WebGL object if the function's argument is present
                            return true;
                        }
                        // else, return just true
                        return true;
                    }
                } catch (e) {}
            }
            // WebGL is supported, but disabled
            return false;
        }
        // WebGL not supported
        return false;
    }

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }


    window.GS.blockchainTracking = function(section, direction) {
        //TRACKING for Scene Entering and Leaving
        console.log('Blockchain Tracking : ' + section + ' : ' + direction);
    };

});