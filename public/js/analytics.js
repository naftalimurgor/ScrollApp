jQuery(function ($) {

    'use strict';
    if ($(window)[0]['gsAnalytics'] && gsAnalytics['handleDataVizInteraction']) {

        window.blockChainAnalyticsEmitter = new Emitter();
        var viewedSections = {},
            clickedDefinitionWords = {},
            blockchainAnalyticsObject = { shareBar: 0 },
            MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            blockchainAnalyticsObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    var currentScene =  $(mutation.target).closest('[id*="scene"]').attr('id'),
                        currentSection = $(mutation.target).find('div.section-title .type-ins-holder')[0].innerText.replace(/[ ]+/g,'');
                    if (mutation.target.style.display == 'block' && viewedSections[currentScene] && !viewedSections[currentScene][currentSection]) {
                        var title = $(mutation.target).find('div.section-title .type-ins-holder')[1].innerText;
                        viewedSections[currentScene][currentSection] = { enter: title };
                    } if (mutation.target.style.display == 'none' && viewedSections[currentScene] && viewedSections[currentScene][currentSection]) {
                        viewedSections[currentScene][currentSection]['exit'] = true;
                    }
                })
            }),
            sceneIntroObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    var currentScene =  $(mutation.target).closest('[id*="scene"]').attr('id');
                    if (mutation.target.style.display == 'block' && !viewedSections[currentScene]) {
                        viewedSections[currentScene] = {};
                    }
                    if (mutation.target.style.display == 'none' && viewedSections[currentScene]) {
                        viewedSections[currentScene]['exit'] = true;
                    }
                })
            });

        window.blockChainAnalyticsEmitter.on('toggle_scene_add', function(event) {
            var sceneNum = event['data']['scene'];
            if($('#animate'+sceneNum).find('div.section-wrapper').length) {
                $('#animate'+sceneNum).find('div.section-wrapper').each(function(i, el) {
                    viewedSections['scene'+sceneNum] = {};
                    blockchainAnalyticsObserver.observe(el, {attributes: true, attributeOldValue: true, attributeFilter: ['style'], characterData: true})
                })
            } else {
                sceneIntroObserver.observe(document.getElementById('scene'+sceneNum), {attributes: true, attributeOldValue: true, attributeFilter: ['style'], characterData: true})
            }
        });

        window.blockChainAnalyticsEmitter.on('toggle_scene_remove', function(event) {
            var sceneNum = event['data']['scene'];
            if (viewedSections['scene'+sceneNum]) {
                viewedSections['scene'+sceneNum]['exit'] = true;
            }
        });

        window.blockChainAnalyticsEmitter.on('definition_word', function(event) {
            var clickedWord = event.data.clickedWord;
            event.data.closed ? gsAnalytics['handleDataVizInteraction'](('Definition word -  '+clickedWord), ' : closed') : gsAnalytics['handleDataVizInteraction'](('Definition word - '+clickedWord), ' : click') ;
        });

        window.blockChainAnalyticsEmitter.on('navigation_menu', function(event) {
            var navigationEvent = ('From: '+event.data.from+', To: '+event.data.to);
            gsAnalytics['handleDataVizInteraction']('BlockChain Navigation- ', navigationEvent)
        })

        var sideNav = document.querySelector('nav.side-nav');
        if (sideNav) {
            sideNav.addEventListener('mouseover', function(event) {
                gsAnalytics['handleDataVizInteraction']('BlockChain Navigation Hover', event.target.innerText)
            })
        }

        var calculateScenesViewed = function() {
            Object.keys(viewedSections).forEach(function(el) {
                gsAnalytics['handleDataVizInteraction'](el, 'enter')
                if(Object.keys(viewedSections[el]).length > 0) {
                    Object.keys(viewedSections[el]).forEach(function(action) {
                        action === 'exit' ? gsAnalytics['handleDataVizInteraction'](el, 'exit') : gsAnalytics['handleDataVizInteraction']((el+' : '+action), 'enter');
                        if (viewedSections[el][action] == 'exit') {
                            gsAnalytics['handleDataVizInteraction']((el+' : '+ action), 'exit');
                        }
                    })
                }
            })
        };

        if ($(window)[0]['gsAnalytics'] && gsAnalytics['handleDataVizInteraction']) {
            $('div.blockchain-wrapper > div.footer').on('click', function(el) {
                if ($(el['delegateTarget']).has('div.share-open')) {
                    gsAnalytics['handleDataVizInteraction']('blockchain infographic social share', 'click');
                }
            })
        };

        $(window).bind('beforeunload', calculateScenesViewed);
    }

});
