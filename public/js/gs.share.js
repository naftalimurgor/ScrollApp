var GS = window['GS'] || {};

if(!GS.Share) {
    GS.Share = (function ($, window, document, undefined) {
        GS.Share = function () {
            var absolutePath = 'http://' + window.location.hostname + window.location.pathname,
                screen = $('<div id="screen"></div>'),
                shareTemp = $('<div></div>'),
                emailTemp,
                moreTemp,
                shareParams = {
                    url: function () {
                        return 'http://' + window.location.hostname + window.location.pathname;
                    },
                    title: document.title,
                    shortURLs: 'never'
                };
            var isGigyaUnavailable = function() {
                if (!window['gigya']) {
                    console.warn("gigya not found");
                    console.log(sharePlatform, {
                        url: getShareUrl(shareParams, shareBar),
                        provider: sharePlatform,
                        title: getShareTitle(shareParams, shareBar, sharePlatform),
                        shortURLs: shareParams['shortURLs']
                    });
                    return true;
                }
                return false;
            };


            this.init = function () {
                var templateUrl = window['share_template_url'];
                $('body').append(screen);
                $('body').append(shareTemp);

                shareTemp.load(templateUrl, function () {
                    emailTemp = shareTemp.find('#share-email-menu');
                    moreTemp = shareTemp.find('#share-more-menu');
                });

                screen.on('click', function () {
                    screen.hide();
                    if (emailTemp) {
                        emailTemp.hide();
                    }
                    if (moreTemp) {
                        moreTemp.hide();
                    }
                });

                $('.social-share-bar a').on('click', function (e) {
                    e.preventDefault();
                });

                $('.social-share-bar .share-item').each(function (hardRefresh) {
                    var shareItem = $(this),
                        shareBar = $(this).closest('.social-share-bar'),
                        sharePlatform = shareItem.attr('data-platform');

                    if (!hardRefresh && shareItem.hasClass('share-enabled')) {
                        return;
                    }

                    shareItem.addClass('share-enabled');

                    switch (sharePlatform) {
                        case 'print':
                            shareItem.on('click', printPage);
                            break;
                        case 'email':
                            shareItem.on('click', function () {
                                var shareBarParent = $(shareItem).parent().offsetParent();
                                sendEmail(shareParams, shareBar, shareBarParent);

                            });
                            break;
                        case 'more':
                            shareItem.on('click', function () {

                                if (isGigyaUnavailable()) {
                                    return;
                                }
                                showMore(shareParams, shareBar);
                            });
                            break;
                        default:
                            shareItem.on('click', function () {

                                if (isGigyaUnavailable()) {
                                    return;
                                }


                                gigya.socialize.postBookmark({
                                    url: getShareUrl(shareParams, shareBar),
                                    provider: sharePlatform,
                                    title: getShareTitle(shareParams, shareBar, sharePlatform),
                                    shortURLs: shareParams['shortURLs']
                                });
                                if (typeof gsAnalytics == 'object'
                                    && typeof gsAnalytics.handleSocialShare == 'function') {
                                    gsAnalytics.handleSocialShare(true, $(this).attr('data-platform'));
                                }
                            });
                            break;
                    }

                });

            };

            this.assetShare = function (params) {
                var assetTitle = params['title'],
                    assetUrl = absolutePath + params['url'];
                switch (params['provider']) {
                    case 'email':
                        sendEmailBasic(shareParams, assetUrl, assetTitle);
                        break;
                    case 'more':
                        showMoreBasic(shareParams, assetUrl, assetTitle);
                        break;
                    default:
                        gigya.socialize.postBookmark({
                            url: assetUrl,
                            provider: params['provider'],
                            title: assetTitle,
                            shortURLs: shareParams['shortURLs']
                        });
                        if (typeof gsAnalytics == 'object'
                            && typeof gsAnalytics.handleSocialShare == 'function') {
                            gsAnalytics.handleSocialShare(true, params['provider']);
                        }
                }
            }

            var sendEmail = function (shareParams, shareBar) {
                var shareUrl = getShareUrl(shareParams, shareBar),
                    shareTitle = getShareTitle(shareParams, shareBar, 'email');
                sendEmailBasic(shareParams, shareUrl, shareTitle);
            };

            var sendEmailBasic = function (shareParams, shareUrl, shareTitle, parentElement) {
                window.location = "mailto:?subject=" + encodeURIComponent(shareTitle) + "&body=" + encodeURIComponent(shareUrl);
                if (typeof gsAnalytics == 'object'
                    && typeof gsAnalytics.handleSocialShare == 'function') {
                    gsAnalytics.handleSocialShare(true, 'email');
                }
                if (typeof gsAnalytics == 'object'
                    && typeof gsAnalytics.handleSocialShare == 'function') {
                    gsAnalytics.handleSocialShare(true, 'email');
                }
            }

            var showMore = function (shareParams, shareBar) {
                var shareUrl = getShareUrl(shareParams, shareBar),
                    shareTitle = getShareTitle(shareParams, shareBar, 'more');
                showMoreBasic(shareParams, shareUrl, shareTitle);
            };

            var showMoreBasic = function (shareParams, shareUrl, shareTitle) {
                screen.show();

                if (moreTemp) {
                    moreTemp.find('.detail .page-title').text(shareTitle);
                    moreTemp.find('.detail .page-url').text(shareUrl);

                    moreTemp.find('.header a.close').on('click', function () {
                        moreTemp.hide();
                        screen.hide();
                    });

                    moreTemp.find('.body .main a.share-item').on('click', function () {
                        gigya.socialize.postBookmark({
                            url: shareUrl,
                            provider: $(this).attr('data-platform'),
                            title: shareTitle,
                            shortURLs: shareParams['shortURLs']
                        });
                        closeShowMore();
                        if (typeof gsAnalytics == 'object'
                            && typeof gsAnalytics.handleSocialShare == 'function') {
                            gsAnalytics.handleSocialShare(true, $(this).attr('data-platform'));
                        }
                    });

                    moreTemp.show();
                }
            };

            var printPage = function () {
                window.print();
            };

            var getShareUrl = function (shareParams, shareBar) {
                var shareUrl = 'http://' + window.location.hostname + window.location.pathname;
                if (shareBar) {
                    if (shareBar.attr('data-share-qstr')) {
                        shareUrl = shareUrl + '?' + shareBar.attr('data-share-qstr');
                    } else if (shareBar.attr('data-share-hash')) {
                        shareUrl = shareUrl + '#' + shareBar.attr('data-share-hash');
                    }
                }
                return shareUrl;
            };

            var getShareTitle = function (shareParams, shareBar, platform) {
                var shareTitle = shareParams['title'];
                if (shareBar) {
                    if (shareBar.attr('data-share-title') || shareBar.attr('data-share-title-twitter')) {
                        if (platform === 'twitter') {
                            if (shareBar.attr('data-share-title-twitter')) {
                                shareTitle = shareBar.attr('data-share-title-twitter');
                            } else {
                                shareTitle = shareBar.attr('data-share-title');
                            }
                        } else {
                            if (shareBar.attr('data-share-title')) {
                                shareTitle = shareBar.attr('data-share-title');
                            }
                        }
                    }
                }
                return shareTitle;
            }

            var emailValid = function (emailTemp) {
                var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    sendEmailButton = emailTemp.find('button.em-send'),
                    emailCheck = emailTemp.find('label.em-check'),
                    emailTo = $('#em-to').val().trim(),
                    emailFrom = $('#em-from').val().trim();

                if (emailTo
                    && emailFrom
                    && emailReg.test(emailTo)
                    && emailReg.test(emailFrom)) {
                    sendEmailButton.addClass('active');
                    emailCheck.hide();
                    return true;
                } else {
                    sendEmailButton.removeClass('active');
                    emailCheck.show();
                    return false;
                }
            };


            var closeEmailMenu = function () {
                emailTemp.find('#em-to').val('');
                emailTemp.find('#em-from').val('');
                emailTemp.find('#em-content').val('');
                emailTemp.find('.em-send').removeClass('active');
                emailTemp.find('.em-check').show();
                emailTemp.hide();
                screen.hide();
            };

            var closeShowMore = function () {
                screen.hide();
                moreTemp.hide();
            };

            this.updateShareTitle = function(title){
                shareParams['title'] = title;
            };

        };

        return new GS.Share();
    })(jQuery, this, this.document);
    GS.Page.register('*', GS.Share.init);
}