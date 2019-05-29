jQuery(function($) {

    'use strict';

    if (!window.blockchain.BlockChain) {

        window.blockchain.BlockChain = {};

    }

    if (window.isTablet || !document.querySelector('body.mobile')) {
        var leftGlobalNav = document.querySelector('header #main-nav'),
            rightGlobalNav = document.querySelector('header #sub-nav'),
            globalNavClosed = function(el, i, arr) {
                return el['target']['className'] === 'toplevel' && !el['old-value'];
            },
            navObserver = new MutationObserver(function(mutations) {
                if (mutations.length > 100 && !$('#content').hasClass('global-nav-open')) {
                    $('#content').addClass('global-nav-open');
                } else if (mutations.length < 100 && $('#content').hasClass('global-nav-open') && mutations.some(globalNavClosed)) {
                    $('#content').removeClass('global-nav-open');
                }
            }),
            navObserverConfig = { subtree: true, characterData: true, characterDataOldValue: true, attributes: true, attributeFilter: ["class"] };
        navObserver.observe(leftGlobalNav, navObserverConfig);
        navObserver.observe(rightGlobalNav, navObserverConfig);
    }

    window.blockchain.BlockChain.introTimeline = new TimelineMax({
        repeat: -1
    });

    window.blockchain.BlockChain.introTimeline
        .to('.side1', 0, {
            right: 0,
            left: 'auto'
        })
        .to('.side2', 0, {
            top: 0,
            bottom: 'auto'
        })
        .to('.side3', 0, {
            left: 0,
            right: 'auto'
        })

    .to('.side4', 0, {
            bottom: 0,
            top: 'auto'
        })
        .to('.side1', 0.25, {
            width: '380px',
            ease: Circ.easeIn
        })

    .to('.side2', 0.25, {
            height: '380px'
        })
        .to('.side3', 0.25, {
            width: '380px'
        })
        .to('.side4', 0.25, {
            height: '380px',
            ease: Circ.easeOut
        })
        .to('.animated-square-wrapper .square', 0, {
            opacity: 1
        })
        .to('#square2', 0.8, {
            scale: .8,
            ease: Circ.easeInOut
        })
        .to('#square3', 0.8, {
            scale: .64,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square4', 0.8, {
            scale: .51,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square5', 0.8, {
            scale: .41,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square6', 0.8, {
            scale: .33,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square7', 0.8, {
            scale: .26,
            ease: Circ.easeInOut
        }, '-=0.8')


    .to('#square2', 0.8, {
            scale: .45,
            ease: Circ.easeInOut
        }, '=1')
        .to('#square3', 0.8, {
            scale: .24,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square4', 0.8, {
            scale: .125,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square5', 0.8, {
            scale: .075,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square6', 0.8, {
            scale: 0.03,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square7', 0.8, {
            scale: 0,
            ease: Circ.easeInOut
        }, '-=0.8')

    .to('.animated-square', 0.8, {
            rotation: 0,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('.square-diagonal-container', 0.8, {
            opacity: 0.75,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('.square-diagonal-container2', 0.8, {
            opacity: 0.75,
            ease: Circ.easeInOut
        }, '-=0.8')

    .to('#square2', 0.8, {
            scale: 1.0,
            ease: Circ.easeInOut
        }, '=1')
        .to('#square3', 0.8, {
            scale: 1.0,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square4', 0.8, {
            scale: 1.0,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square5', 0.8, {
            scale: 1.0,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('#square6', 0.8, {
            scale: 0,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('.animated-square', 0.8, {
            rotation: -45,
            ease: Circ.easeInOut
        }, '-=0.8')

    .to('.square-diagonal-container', 0.3, {
            opacity: 0,
        }, '-=0.8')
        .to('.square-diagonal-container2', 0.3, {
            opacity: 0,
            ease: Circ.easeInOut
        }, '-=0.8')
        .to('.animated-square', 0.8, {
            rotation: -45,
            ease: Circ.easeInOut
        })
        .to('#square2', 0.4, {
            scale: 1,
        }, '-=0.4')
        .to('#square3', 0.4, {
            scale: 1,
        }, '-=0.4')
        .to('#square4', 0.4, {
            scale: 1,
        }, '-=0.4')
        .to('#square5', 0.4, {
            scale: 1,
        }, '-=0.4')
        .to('.animated-square-wrapper .square', 0, {
            opacity: 0
        }, '-=0.25')


    .to('.side4', 0, {
            top: 0
        })
        .to('.side4', 0.3, {
            height: 0
        })
        .to('.side1', 0, {
            left: 0
        })
        .to('.side1', 0.3, {
            width: 0
        })
        .to('.side2', 0, {
            bottom: 0,
            top: 'auto'
        })
        .to('.side2', 0.3, {
            height: 0
        })
        .to('.side3', 0, {
            right: 0,
            left: 'auto'
        })
        .to('.side3', 0.3, {
            width: 0
        })
});