jQuery(function($){
    'use strict';

    var numOfChapters = window.blockchain.scenes.length;
    var totalLength = 0;
    var sceneLengthPencents = [];
    var x = 0;
    var y = 0;
    var $body = $('body');
    var isMobile = $body.hasClass('mobile');

    var autoScrollY = 5000;
    var autoScrollInterval;
    var scrollLimit = window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.scene4Timeline.duration() + window.blockchain.scene5Timeline.duration();
    var scrollTime = 375000;

    var navBusy = false;
    window.blockchain.navOpen = false;


    //Autoscroll code

    var secret = "7116";
    var stop = "8316";
   var input = "";
   var timer;
   $(document).keyup(function(e) {
     input += e.which;
     // console.log('INPUT : ' + input);
     clearTimeout(timer);
     timer = setTimeout(function() { input = ""; }, 500);
     checkKeyInput();
   });


   function checkKeyInput() {
    if(input == secret) {
      setTimeout(startAutoScroll, 1000);
    } else if(input === stop) {
      jQuery('body,html').stop();
    }
   };


   // function autoScroll() {
   //   if(autoScrollY < scrollLimit + 1000) {
   //     jQuery('body,html').animate({ scrollTop: autoScrollY }, 900);
   //     autoScrollY += 500;
   //   } else {
   //     clearInterval(autoScrollInterval);
   //   }
   // }

   function startAutoScroll() {
     var currentLocation = document.body.scrollTop;
     var time = Math.round(scrollTime - (scrollTime * (currentLocation/scrollLimit)));
     //time = scrollTime;
     console.log('chrome : ' + document.body.scrollTop + ' : ' + time);
     //console.log('scrollposition : ' + jQuery('body,html').scrollTop());
     //autoScrollInterval = setInterval(autoScroll, 1000);
     jQuery('body,html').animate({ scrollTop: scrollLimit + 1000 }, time, 'linear');
   }

   // setTimeout(startAutoScroll, 5000);

    //End autoscroll code




    while (x < numOfChapters) {
        totalLength += window.blockchain.scenes[x];
        x++;
    }

    if(!isMobile && !window.isTablet) {
      while (y < numOfChapters) {
          var percent = (window.blockchain.scenes[y] / totalLength) * 100;
          var curChapter = y + 1;
          $('.chapter'+curChapter).css({
              height: percent+'%'
          });
          y++;
      }
    }

    $('.blockchain-spacer').css('paddingBottom', totalLength+'px');


    $('.nav-selector').on('click', function(e) {
        e.preventDefault();
        $('.definition-holder').removeAttr('style');
        if(navBusy) {
          return;
        }

        setTimeout(function(){ navBusy = false }, 900);
        navBusy = true;

        window.blockchain.navOpen = (window.blockchain.navOpen) ? false : true;

        var mobileNav = $('.mobile-nav')[0];
        //var isActive = $(mobileNav).is('.active');

        //reset
        $('.nav-item-progress').each(function (index, value) {
          $(this).width(0);
        });

        var progressValue = $('.progress-bar').width();
        var chapterNum = (window.blockchain.currentChapter>0) ? window.blockchain.currentChapter : 1;

        $('.nav-item-progress', '.chapter'+chapterNum).width(progressValue);


        if(window.blockchain.navOpen) {
          $(mobileNav).addClass('active');
          $(this).addClass('active');
          $('.bc-header').hide();
          $('.mobile-bottom-share').addClass('active');
        } else {
          $(mobileNav).removeClass('active');
          $('.bc-header').show();
          $(this).removeClass('active');
          $('.mobile-bottom-share').removeClass('active');
        }

    });


    $('.footer .share').on('click', function(e) {
      e.preventDefault();
      $('div.auto-scroller').attr('style', 'z-index:0;');
      $('.footer__share-container').show();
      $('.share-close').show();
      $('.share-open').show();
    });
    $('.footer .share-close').on('click', function(e) {
      e.preventDefault();
      $('div.auto-scroller').attr('style', 'z-index:99999;');
      $('.footer__share-container').hide();
      $(this).hide();
      $('.share-open').hide();
    });

    $('.footer .top').on('click', function(e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
});