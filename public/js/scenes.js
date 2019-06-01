jQuery(function($) {

    if (!$('body').hasClass('mobile') && !window.isTablet) {
        'use strict';

        var chapterTitles = [
            'What is Blockchain', 'How Does It Work', 'Blockchain in Action', 'Beyond the first steps', 'The Takeaway'
        ];
        var peopleCanvas = $("#people-canvas")[0];
        var peopleCanvas2 = $("#people-canvas2")[0];
        var mapCanvas = $("#map-canvas")[0];
        var canvasAnimation, canvasAnimationAmt;

        var context, peopleContext, peopleContext2, mapContext;

        var centerPoint = { x: window.innerWidth / 2, y: (window.innerHeight * .7) }

        var pt_1, pt_2, pt_3, pt_4, pt_5, pt_6, pt_7, pt_8;

        var scene2Pt1, scene2Pt2, scene2Pt3, scene2Pt4, scene2Pt5, scene2Pt6, scene2Pt7, scene2Pt8, scene2Pt9, scene2Pt10, scene2Pt11, scene2Pt12, scene2Pt13;

        var person1 = new Image();
        person1.src = '/images/headshot-02.png';
        person1.onload = function() {
            //loaded;
        };
        var person2 = new Image();
        person2.src = '/images/headshot-04.png';
        person2.onload = function() {
            //loaded;
        };
        var person3 = new Image();
        person3.src = '/images/headshot-06.png';
        person3.onload = function() {
            //loaded;
        };
        var person4 = new Image();
        person4.src = '/images/headshot-13.png';
        person4.onload = function() {
            //loaded;
        };
        var person5 = new Image();
        person5.src = '/images/headshot-05.png';
        person5.onload = function() {
            //loaded;
        };
        var person6 = new Image();
        person6.src = '/images/headshot-08.png';
        person6.onload = function() {
            //loaded;
        };
        var person7 = new Image();
        person7.src = '/images/headshot-10.png';
        person7.onload = function() {
            //loaded;
        };
        var person8 = new Image();
        person8.src = '/images/headshot-09.png';
        person8.onload = function() {
            //loaded;
        };
        var person9 = new Image();
        person9.src = '/images/headshot-01.png';
        person9.onload = function() {
            //loaded;
        };
        var person10 = new Image();
        person10.src = '/images/headshot-11.png';
        person10.onload = function() {
            //loaded;
        };
        var person11 = new Image();
        person11.src = '/images/headshot-12.png';
        person11.onload = function() {
            //loaded;
        };



        window.addEventListener("resize", updateCanvasOnResize); //TODO

        //preload people


        resetPoints();
        resetScene2Points();
        window.blockchain.letSceneToggle = true;
        buildIntro();
        buildScene1();
        buildScene2();
        buildScene3();
        buildScene4();
        buildScene5();
        buildNav();
        buildDefinitions();
        buildScrollCloser();
        buildScroller(true);

        var playButton = document.querySelector('.auto-scroller');
        playButton.addEventListener('click', function() {
            buildScroller(false);
            document.querySelector('.auto-scroller__button__label').classList.add('hide');
        });

        var allScene1Elements = $('#animate1 *');

        window.blockchain.scene2markup = $('#animate2').detach();
        window.blockchain.scene3markup = $('#animate3').detach();
        window.blockchain.scene4markup = $('#animate4').detach();
        window.blockchain.scene5markup = $('#animate5').detach();

        window.blockchain.scenes.push(window.blockchain.scene1Timeline.duration());
        window.blockchain.scenes.push(window.blockchain.scene2Timeline.duration());
        window.blockchain.scenes.push(window.blockchain.scene3Timeline.duration());
        window.blockchain.scenes.push(window.blockchain.scene4Timeline.duration());
        window.blockchain.scenes.push(window.blockchain.scene5Timeline.duration());


        function updateCanvasOnResize() {

            centerPoint = { x: window.innerWidth / 2, y: (window.innerHeight * .7) }
            resetPoints();
            resetScene2Points();

            if (context) {
                var canvas = context.canvas;
                if (canvas.id === 'people-canvas') {
                    initPeopleCanvas();
                    if (canvasAnimation === 'centralizeAnimation') {
                        centralizeAnimation(canvasAnimationAmt);
                    } else if (canvasAnimation === 'decentralizeAnimation') {
                        decentralizeAnimation(canvasAnimationAmt);
                    }
                } else if (canvas.id === 'people-canvas2') {
                    initPeopleCanvas2();
                    if (canvasAnimation === 'scene2PeopleIntro') {
                        scene2PeopleIntro(canvasAnimationAmt);
                    }
                    if (canvasAnimation === 'scene2PeopleLines') {
                        scene2PeopleLines(canvasAnimationAmt);
                    }
                }
            }
        }

        function resetPoints() {
            pt_3 = { x: centerPoint.x + (centerPoint.x / 3.5), y: centerPoint.y + (centerPoint.y * .2), size: 50, image: person3, complete: true }; //scott
            pt_2 = { x: centerPoint.x + (centerPoint.x / 1.8), y: centerPoint.y * .55, size: 120, image: person2, complete: true }; //eric
            pt_1 = { x: centerPoint.x - (centerPoint.x * .2), y: centerPoint.y + (centerPoint.y * .2), size: 80, image: person1, complete: true }; //richard
            pt_8 = { x: centerPoint.x - (centerPoint.x * .3), y: centerPoint.y - (centerPoint.y * .1), size: 40, image: person8, complete: true }; //micah
            pt_4 = { x: centerPoint.x - (centerPoint.x * .2), y: centerPoint.y - (centerPoint.y * .4), size: 40, image: person4, complete: true }; //steve
            pt_5 = { x: centerPoint.x + (centerPoint.x * .1), y: centerPoint.y - (centerPoint.y * .44), size: 70, image: person5, complete: true }; //mehmet
            pt_6 = { x: centerPoint.x + (centerPoint.x * .2), y: centerPoint.y - (centerPoint.y * .25), size: 30, image: person6, complete: true }; //mm
            pt_7 = { x: centerPoint.x + (centerPoint.x / 1.75), y: centerPoint.y - (centerPoint.y * .1), size: 60, image: person7, complete: true }; //brad
        }


        function resetScene2Points() {

            scene2Pt3 = { x: centerPoint.x + (centerPoint.x / 1.3), y: centerPoint.y + (centerPoint.y * .05), size: 50, image: person3, complete: true }; //scott
            scene2Pt2 = { x: centerPoint.x + (centerPoint.x / 1.7), y: centerPoint.y - (centerPoint.y * .2), size: 75, image: person2 }; //eric
            scene2Pt1 = { x: centerPoint.x + (centerPoint.x * .1), y: centerPoint.y + (centerPoint.y * .15), size: 75, image: person7 }; //richard
            scene2Pt8 = { x: centerPoint.x - (centerPoint.x * .36), y: centerPoint.y, size: 50, image: person10 };
            scene2Pt4 = { x: centerPoint.x + (centerPoint.x * .43), y: centerPoint.y, size: 30, image: person11 };
            scene2Pt5 = { x: centerPoint.x + (centerPoint.x / 1.3), y: centerPoint.y - (centerPoint.y * .5), size: 55, image: person5 }; //nauman
            scene2Pt6 = { x: centerPoint.x - (centerPoint.x * .18), y: centerPoint.y - (centerPoint.y * .32), size: 40, image: person9 }; //gene(01)
            scene2Pt7 = { x: centerPoint.x + (centerPoint.x / 1.6), y: centerPoint.y - (centerPoint.y * .2), size: 60, image: person7 }; //brad
            scene2Pt9 = { x: centerPoint.x - (centerPoint.x * .2), y: centerPoint.y - (centerPoint.y * .4), size: 30, image: person4 }; //steve
            scene2Pt10 = { x: centerPoint.x + (centerPoint.x / 2.4), y: centerPoint.y - (centerPoint.y * .6), size: 25, image: person4 };
            scene2Pt11 = { x: centerPoint.x + (centerPoint.x * .07), y: centerPoint.y - (centerPoint.y * .25), size: 36, image: person6 }; //eric
            scene2Pt12 = { x: centerPoint.x + (centerPoint.x * .3), y: centerPoint.y - (centerPoint.y * .3), size: 40, image: person2 }; //scott
            scene2Pt13 = { x: centerPoint.x + (centerPoint.x * .1), y: centerPoint.y - (centerPoint.y * .45), size: 25, image: person3 };
        }

        function buildDefinitions() {
            $('.text-block').on('click', function(e) {
                if (e.target.classList.contains('definition')) {
                    $('.definition-holder').removeAttr('style');
                    var word = e.target.dataset.word;
                    var top = e.target.getBoundingClientRect().top;
                    var left = e.target.getBoundingClientRect().left;
                    var right = $(window).width() - e.target.getBoundingClientRect().right;
                    //to account for right positioned text
                    if (word === 'smartcontract') {
                        $('#' + word).css('top', top + 'px');
                        $('#' + word).css('right', right + 'px');
                    } else {
                        $('#' + word).css('top', top + 'px');
                        $('#' + word).css('left', left + 'px');
                    }

                    $('#' + word).animate({
                        height: '140px',
                        width: '640px'
                    }, 200)
                    if (word === 'smartcontract') {
                        $('#' + word).animate({
                            height: '440px',
                        }, 200)
                    } else {
                        $('#' + word).animate({
                            height: '420px',
                        }, 200)
                    }

                    if (window.blockChainAnalyticsEmitter) {
                        window.blockChainAnalyticsEmitter.emit('definition_word', { clickedWord: word });
                    }

                }
            });
        }

        function buildScrollCloser() {
            var timer;
            var hiddenFirstTime = false;
            $(window).on('scroll', function() {
                $('.definition-holder').removeAttr('style');
                if (window.scrollY < window.blockchain.introTimeline.duration() + 800 &&
                    hiddenFirstTime !== true) {
                    //document.querySelector('.auto-scroller__button').classList.add('active');
                } else
                if (window.scrollY > window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.scene4Timeline.duration() + window.blockchain.scene5Timeline.duration() + 300) {
                    clearTimeout(timer);
                    document.querySelector('.auto-scroller__button').classList.remove('active');
                    document.querySelector('.auto-scroller__button').classList.remove('raised');
                } else {
                    document.querySelector('.auto-scroller__button').classList.remove('active');
                    document.querySelector('.auto-scroller__button').classList.remove('raised');
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        document.querySelector('.auto-scroller__button').classList.add('raised');
                        window.setTimeout(function() {
                            document.querySelector('.auto-scroller__button').classList.add('active');
                        }, 250);
                    }, 500)
                }
            })

        }

        function clearCanvas() {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }

        function initPeopleCanvas() {

            if (!peopleContext) {
                peopleContext = peopleCanvas.getContext('2d');
            }
            peopleContext.canvas.width = window.innerWidth;
            peopleContext.canvas.height = window.innerHeight;
            context = peopleContext;
        }

        function initPeopleCanvas2() {

            if (!peopleContext2) {
                peopleContext2 = peopleCanvas2.getContext('2d');
            }
            peopleContext2.canvas.width = window.innerWidth;
            peopleContext2.canvas.height = window.innerHeight;
            context = peopleContext2;
        }

        function drawPersonNoBlock(image, point, size) {
            context.drawImage(image, point.x - (size / 2), point.y - (size / 2), size, size);
        }

        function drawPerson(image, point, size) {

            context.drawImage(image, point.x - (size / 2), point.y - (size / 2), size, size);
            if (!point.complete) {
                createPersonBlock(point.x - (size / 2), point.y - (size / 2), size);
            }

        }

        function createPersonBlock(ptx, pty, size) {
            context.globalAlpha = 0.6;
            var radius = size / 2;
            context.beginPath();
            context.fillStyle = "black";
            context.arc(ptx + radius, pty + radius, radius, 0, 2 * Math.PI, false);
            context.shadowBlur = 3;
            context.fill();
            context.globalAlpha = 1.0;
        }

        function drawCircle(centerX, centerY, radius, color) {

            var circleColor = '#FFFFFF';
            if (color === 'yellow') {
                circleColor = '#FFD17A';
            }

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = circleColor;
            context.shadowBlur = 3;
            context.fill();
        }

        function drawLine(point1, point2, amount, size, person, movePerson) {

            context.beginPath();
            context.moveTo(point1.x, point1.y);

            var ptX = point1.x + (point2.x - point1.x) * amount;
            var ptY = point1.y + (point2.y - point1.y) * amount;

            context.lineTo(point1.x + (point2.x - point1.x) * amount, point1.y + (point2.y - point1.y) * amount);

            context.strokeStyle = '#FFFFFF';
            context.lineWidth = .3;
            context.stroke();

            var pt = { x: ptX, y: ptY };
            if (movePerson) {
                drawPersonNoBlock(person, pt, size * amount);
            } else {
                drawPersonNoBlock(person, point2, size);
            }

        }

        function movePeople(point1, point2, amount) {

            var ptX = point1.x + (point2.x - point1.x) * amount;
            var ptY = point1.y + (point2.y - point1.y) * amount;

            var pt = { x: ptX, y: ptY };

            drawPerson(point2.image, pt, point2.size * amount);
        }


        function animateDiamond(amount, points) {

            var size = 14;
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);

            for (var i = 0; i < points.length; i++) {
                var startPt = points[i].start;
                var targetPt = points[i].target;
                var ptX = startPt.x + (targetPt.x - startPt.x) * amount;
                var ptY = startPt.y + (targetPt.y - startPt.y) * amount;
                drawDiamond(ptX - (size / 2), ptY - (size / 2), size);
                var point = points[i].target;
                if (amount === 1) {
                    point.complete = true;
                } else {
                    point.complete = false;
                }
            }

            scene2PeopleLines(1, false);
        }

        function drawDiamond(x, y, width) {

            var point0 = { x: x + (width / 2), y: y };
            var point1 = { x: x + width, y: y + (width / 2) };
            var point2 = { x: x + (width / 2), y: y + width };
            var point3 = { x: x, y: y + (width / 2) };

            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(point0.x, point0.y);
            context.lineTo(point1.x, point1.y);
            context.lineTo(point2.x, point2.y);
            context.lineTo(point3.x, point3.y);
            context.lineTo(point0.x, point0.y);
            context.closePath();
            context.strokeStyle = '#FFFFFF';
            context.stroke();
        }

        function centralizeAnimation(lineAmount, movePerson) {
            canvasAnimation = 'centralizeAnimation';
            canvasAnimationAmt = lineAmount;

            //context.imageSmoothingEnabled = true;

            if (context) {
                clearCanvas();

                if (lineAmount) {
                    drawCircle(centerPoint.x, centerPoint.y, 2, 'white');
                    drawLine(centerPoint, pt_1, lineAmount, 80, person1, movePerson); //richard
                    drawLine(centerPoint, pt_2, lineAmount, 120, person2, movePerson); //eric
                    drawLine(centerPoint, pt_3, lineAmount, 50, person3, movePerson); //scott
                    drawLine(centerPoint, pt_4, lineAmount, 40, person4, movePerson); //steve
                    drawLine(centerPoint, pt_5, lineAmount, 70, person5, movePerson); //mehmet
                    drawLine(centerPoint, pt_6, lineAmount, 30, person6, movePerson); //mm
                    drawLine(centerPoint, pt_7, lineAmount, 60, person7, movePerson); //brad
                    drawLine(centerPoint, pt_8, lineAmount, 40, person8, movePerson); //micah
                }
            } else {
                initPeopleCanvas();
            }
        }

        function decentralizeAnimation(lineAmount) {

            canvasAnimation = 'decentralizeAnimation';
            canvasAnimationAmt = lineAmount;
            clearCanvas();
            drawLine(pt_2, pt_6, lineAmount, 30, person6); //mm
            drawLine(pt_4, pt_1, lineAmount, 80, person1); //richard
            drawLine(pt_7, pt_2, lineAmount, 120, person2); //eric
            drawLine(pt_5, pt_3, lineAmount, 50, person3); //scott
            drawLine(pt_7, pt_5, lineAmount, 70, person5); //mehmet
            drawLine(pt_3, pt_4, lineAmount, 40, person4); //steve
            drawLine(pt_1, pt_7, lineAmount, 60, person7); //brad
            drawLine(pt_6, pt_8, lineAmount, 40, person8); //micah
            drawLine(pt_6, pt_1, lineAmount, 80, person1); //richard
        }


        function drawPeople(personAry) {
            for (var i = 0; i < personAry.length; i++) {
                var p = personAry[i];
                drawPerson(p.image, p, p.size);
            }
        }

        function drawPeople(personAry) {
            for (var i = 0; i < personAry.length; i++) {
                var p = personAry[i];
                drawPerson(p.image, p, p.size);
            }
        }

        function scene2PeopleLines(lineAmount, doClear) {

            canvasAnimation = 'scene2PeopleLines';
            canvasAnimationAmt = lineAmount;
            if (doClear) {
                clearCanvas();
            }

            drawNewLine(scene2Pt3, scene2Pt2, lineAmount); //scott to eric
            drawNewLine(scene2Pt3, scene2Pt4, lineAmount); //scott to steve
            drawNewLine(scene2Pt2, scene2Pt5, lineAmount); //eric to mehmet
            drawNewLine(scene2Pt2, scene2Pt4, lineAmount); //eric to steve
            //drawNewLine(scene2Pt5, scene2Pt3, lineAmount);//mehmet to scott
            drawNewLine(scene2Pt2, scene2Pt10, lineAmount); //eric to steve
            drawNewLine(scene2Pt11, scene2Pt10, lineAmount); //eric to mehmet
            drawNewLine(scene2Pt4, scene2Pt11, lineAmount); //eric to steve
            drawNewLine(scene2Pt5, scene2Pt10, lineAmount); //eric to steve
            drawNewLine(scene2Pt5, scene2Pt12, lineAmount); //mehmet to scott
            drawNewLine(scene2Pt4, scene2Pt12, lineAmount); //steve to scott
            drawNewLine(scene2Pt1, scene2Pt4, lineAmount); //richard to steve
            drawNewLine(scene2Pt1, scene2Pt8, lineAmount); //steve to richard
            drawNewLine(scene2Pt1, scene2Pt6, lineAmount); //richard to mm
            drawNewLine(scene2Pt11, scene2Pt8, lineAmount); //eric to micah
            drawNewLine(scene2Pt11, scene2Pt13, lineAmount); //eric to mehmet
            drawNewLine(scene2Pt13, scene2Pt6, lineAmount); //mehmet to mm
            drawNewLine(scene2Pt8, scene2Pt13, lineAmount); //eric to micah


            //drawPeople([scene2Pt1, scene2Pt2, scene2Pt3, scene2Pt4, scene2Pt5, scene2Pt6, scene2Pt8, scene2Pt10, scene2Pt11, scene2Pt12, scene2Pt13]);
            drawPeople([scene2Pt1, scene2Pt4, scene2Pt5, scene2Pt6, scene2Pt8, scene2Pt10, scene2Pt11, scene2Pt12, scene2Pt13]);

        }

        function drawNewLine(point1, point2, amount) {

            context.beginPath();
            context.moveTo(point1.x, point1.y);

            var ptX = point1.x + (point2.x - point1.x) * amount;
            var ptY = point1.y + (point2.y - point1.y) * amount;

            context.lineTo(point1.x + (point2.x - point1.x) * amount, point1.y + (point2.y - point1.y) * amount);

            context.strokeStyle = '#FFFFFF';
            context.lineWidth = .3;
            context.stroke();

        }

        function scene2PeopleIntro(lineAmount) {

            canvasAnimation = 'scene2PeopleIntro';
            canvasAnimationAmt = lineAmount;
            initPeopleCanvas2();

            context.clearRect(0, 0, context.canvas.width, context.canvas.height);

            movePeople(centerPoint, scene2Pt6, lineAmount);
            movePeople(centerPoint, scene2Pt5, lineAmount);
            movePeople(centerPoint, scene2Pt4, lineAmount);
            // movePeople(centerPoint, scene2Pt3, lineAmount);
            // movePeople(centerPoint, scene2Pt2, lineAmount);
            movePeople(centerPoint, scene2Pt1, lineAmount);

            movePeople(centerPoint, scene2Pt8, lineAmount);
            movePeople(centerPoint, scene2Pt10, lineAmount);

            movePeople(centerPoint, scene2Pt11, lineAmount);
            movePeople(centerPoint, scene2Pt12, lineAmount);
            movePeople(centerPoint, scene2Pt13, lineAmount);

        }

        function buildScroller(paused) {

            var scrollLimit = window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.scene4Timeline.duration() + window.blockchain.scene5Timeline.duration() + 500;
            var curScroll = window.scrollY;
            var time = (10 * (scrollLimit - curScroll)) / 5000;
            console.log('Scroll duration: ' + time);
            window.blockchain.scrollerTimeline = new TimelineMax({
                paused: paused,
            });
            window.blockchain.scrollerTimeline
                .to(window, time, {
                    scrollTo: { y: scrollLimit }
                })

        }

        function buildIntro() {
            window.blockchain.introTimeline = new TimelineMax({
                useFrames: true,
                ease: Linear.easeNone
            });
            window.blockchain.introTimeline
                .to('.blockchain-wrapper', 0, {
                    position: 'fixed',
                    delay: window.blockchain.windowHeight
                })
            window.blockchain.intro = new ScrollMagic.Scene({
                    triggerHook: 0,
                    duration: window.blockchain.introTimeline.duration(),
                    offset: 0
                })
                .on('enter', function(data) {
                    if (data.scrollDirection === "FORWARD") {
                        toggleScene('1', 'add');
                    }
                })
                .on('leave', function(data) {
                    if (data.scrollDirection === 'REVERSE') {
                        toggleScene('1', 'remove');
                    }
                })
                .setTween(window.blockchain.introTimeline)
                .addTo(window.blockchain.blockchainController);

            $('.blockchain-wrapper').on('click', function(e) {
                if (e.target.classList.contains('close') || e.target.classList.contains('close-img')) {
                    $(e.target).closest('.definition-holder').animate({
                        height: '140px',
                    }, 200)
                    $(e.target).closest('.definition-holder').animate({
                        height: 0,
                        width: 0
                    }, 200)
                    if (window.blockChainAnalyticsEmitter) {
                        var word = $(e.target).parents('div.definition-holder__word')[0].innerText.toLowerCase().replace(/"|\s/, '');
                        window.blockChainAnalyticsEmitter.emit('definition_word', { clickedWord: word, closed: true });
                    }
                }
            })
        }

        function buildScene1() {
            window.blockchain.scene1Timeline = new TimelineMax({
                useFrames: true,
                ease: Linear.easeNone
            });
            if (window.blockchain.isWebGL) {
                window.blockchain.scene1Timeline
                    .to('#animate1 *', 1, {
                        clearProps: 'all'
                    })
            }
            window.blockchain.scene1Timeline
                .set('#scene1', {
                    display: 'block'
                })
                .to('.blockchain-wrapper nav', 35, {
                    right: 0,
                    delay: 0
                })
                .to('#scene1 .chapter-title', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('.mark', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene1 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: -100,
                    onComplete: function() {

                        document.querySelector('.auto-scroller__button').classList.add('raised');
                        window.setTimeout(function() {
                            document.querySelector('.auto-scroller__button').classList.add('active');
                        }, 250);
                    }
                })
                .to('#scene1 .chapter-title .fly-ins', 500, {
                    transform: 'translateZ(0)',
                    delay: -100,
                })
                .to('#scene1 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: 0
                })
                .to('#scene1 .bc-header.chapter-1', 100, {
                    opacity: 1,
                    delay: -100
                })
                .to('#scene1 .ctt-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .ctt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .ctt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .ctt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene1 .ctt-2', 1000, {
                    delay: 400,
                    z: 1000
                })
                .to('#scene1 .ctt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene1 .chapter-title .fly-ins', 1000, {
                    transform: 'translateZ(1000px)',
                    delay: -1000
                })
                .to('#scene1 .chapter-title', 0, {
                    display: 'none',
                    delay: -400
                })
                .to('#scene1 .chapter-text', 0, {
                    display: 'block',
                    delay: -400
                })
                .to('#scene1 .ct-1', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .ct-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene1 .ct-1', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene1 .d1', 0, {
                    display: 'block',
                    delay: -700
                })
                .to('#scene1 .d1 div', 200, {
                    delay: -700,
                    borderColor: "rgb(255,255,255)"
                })
                .to('#scene1 .d1 span', 200, {
                    delay: -700,
                    color: "rgb(255,255,255)"
                })
                .to('#scene1 .d1', 500, {
                    delay: -700,
                    z: 0
                })
                .to('#scene1 .block-building-info', 500, {
                    delay: 0,
                    width: '300px'
                })
                .to('#scene1 .block-building-info', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .block-building-info .cat-0', e.time(), e.totalDuration());
                        printTextController('#scene1 .block-building-info .cat-1', e.time(), e.totalDuration());
                        printTextController('#scene1 .block-building-info .cat-2', e.time(), e.totalDuration());
                        printTextController('#scene1 .block-building-info .cat-3', e.time(), e.totalDuration());
                        printTextController('#scene1 .block-building-info .cat-4', e.time(), e.totalDuration());
                    }, 50),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .tb-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene1 .tb-1__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .tb-1__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .tb-1__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .tb-1__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                })
                .to('#scene1 .d2', 0, {
                    display: 'block',
                    delay: 50
                })
                .to('#scene1 .d1 .element__label', 200, {
                    opacity: 0
                })
                .to('#scene1 .d2 div', 200, {
                    delay: -200,
                    borderColor: "rgb(215,215,215)"
                })
                .to('#scene1 .d2 span', 200, {
                    delay: -200,
                    color: "rgb(215,215,215)"
                })
                .to('#scene1 .d2', 500, {
                    delay: -200,
                    z: -200
                })
                .to('#scene1 .d3', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene1 .d3 div', 200, {
                    delay: 0,
                    borderColor: "rgb(175,175,175)"
                })
                .to('#scene1 .d3 span', 200, {
                    delay: -200,
                    color: "rgb(175,175,175)"
                })
                .to('#scene1 .d3', 500, {
                    delay: -200,
                    z: -400
                })
                .to('#scene1 .d4', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene1 .d4 div', 200, {
                    delay: 0,
                    borderColor: "rgb(135,135,135)"
                })
                .to('#scene1 .d4 span', 200, {
                    delay: -200,
                    color: "rgb(135,135,135)"
                })
                .to('#scene1 .d4', 500, {
                    delay: -200,
                    z: -600,
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene1 .block-building-info', 500, {
                    delay: 200,
                    width: '0'
                })
                .to('#scene1 .block-building-info', 300, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .block-building-info .cat-0', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene1 .block-building-info .cat-1', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene1 .block-building-info .cat-2', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene1 .block-building-info .cat-3', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene1 .block-building-info .cat-4', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .bottom-bar', 500, {
                    delay: 0,
                    width: '100%'
                })
                .to('#scene1 .left-bar', 500, {
                    delay: 0,
                    height: '100%'
                })
                .to('#scene1 .top-bar', 500, {
                    delay: 0,
                    width: '100%'
                })
                .to('#scene1 .right-bar', 500, {
                    delay: 0,
                    height: '100%'
                })
                .to('#scene1 .draw-cube .back', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene1 .draw-cube .back', 500, {
                    delay: 0,
                    z: -600
                })
                .to('#scene1 .draw-cube .left', 500, {
                    delay: -50,
                    opacity: 1
                })
                .to('#scene1 .draw-cube .right', 500, {
                    delay: -500,
                    opacity: 1
                })

            .to('#scene1 .tb-1__copy', 1000, {
                    delay: 0,
                    z: 1000
                })
                .to('#scene1 .tb-1__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene1 .tb-2', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene1 .tb-2__title', 400, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .tb-2__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .tb-2__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .tb-2__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .diamond-transaction-wrapper .diamond-holder', 200, {
                    opacity: 0
                })
                .to('#scene1 .top-bar', 0, {
                    left: 'auto',
                    right: 0,
                    delay: 0
                })
                .to('#scene1 .right-bar', 0, {
                    top: 'auto',
                    bottom: 0,
                    delay: 0
                })
                .to('#scene1 .iecd-1', 0, {
                    display: 'block',
                    delay: -100
                })
                .to('#scene1 .iecd-1 .er-1', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '561px',
                    delay: 0
                })
                // .to('#scene1 .digital-record .iecd-1 .er-1 .char', 1, {

            // })
            .to('#scene1 .iecd-1 .er-1', 100, {
                    delay: 0,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.iecd-1 .er-1', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-1', 800, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-1', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .top-bar', 820, {
                    delay: -840,
                    width: 0
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '561px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-2', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '522px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-2', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.iecd-1 .er-2', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-2', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-2', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '522px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-3', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '483px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-3', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.iecd-1 .er-3', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-3', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-3', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '483px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-4', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '444px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-4', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-4', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-4', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-4', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '444px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-5', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '405px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-5', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-5', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-5', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-5', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '405px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-6', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '366px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-6', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-6', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-6', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-6', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '366px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-7', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '327px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-7', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-7', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-7', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-7', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '327px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-8', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '288px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-8', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-8', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-8', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-8', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '288px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-9', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '249px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-9', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-9', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-9', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-9', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '249px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-10', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '210px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-10', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-10', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-10', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-10', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '210px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-11', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '171px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-11', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-11', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-11', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-11', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '171px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-12', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '132px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-12', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-12', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-12', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-12', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '132px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-13', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '93px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-13', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-13', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-13', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-13', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '93px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-14', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '54px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-14', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-14', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-14', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-14', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '54px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-15', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '15px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-15', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-15', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-15', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-15', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '15px',
                    delay: -220
                })
                .to('#scene1 .iecd-1 .er-16', 0, {
                    delay: -600,
                    display: 'block'
                })
                .to('#scene1 .digital-record .left-bar', 0, {
                    height: '0px',
                    delay: -600
                })
                .to('#scene1 .iecd-1 .er-16', 100, {
                    delay: -600,
                    clearProps: 'all',
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.digital-record', '.er-16', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .iecd-1 .er-16', 800, {
                    delay: -600,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.digital-record', '.iecd-1 .er-16', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .digital-record .bottom-bar', 800, {
                    delay: -820,
                    width: 0
                })
                .to('#scene1 .digital-record .right-bar', 0, {
                    height: '0px',
                    delay: -220
                })
                .to('#scene1 .digital-record .interior-encryption-cover-duplicate', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene1 .digital-record .iecd-2', 1000, {
                    z: -50,
                    delay: 0
                })
                .to('#scene1 .digital-record .iecd-3', 1000, {
                    z: -50,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-4', 1000, {
                    z: -50,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-5', 1000, {
                    z: -50,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-6', 1000, {
                    z: -50,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-7', 1000, {
                    z: -50,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -50,
                    delay: -1000
                })
                .to('#scene1 .block-num', 1000, {
                    opacity: 1,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-3', 1000, {
                    z: -100,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-4', 1000, {
                    z: -100,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-5', 1000, {
                    z: -100,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-6', 1000, {
                    z: -100,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-7', 1000, {
                    z: -100,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -100,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-4', 1000, {
                    z: -150,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-5', 1000, {
                    z: -150,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-6', 1000, {
                    z: -150,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-7', 1000, {
                    z: -150,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -150,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-5', 1000, {
                    z: -200,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-6', 1000, {
                    z: -200,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-7', 1000, {
                    z: -200,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -200,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-6', 1000, {
                    z: -250,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-7', 1000, {
                    z: -250,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -250,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-7', 1000, {
                    z: -300,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -300,
                    delay: -1000
                })
                .to('#scene1 .digital-record .iecd-8', 1000, {
                    z: -350,
                    delay: -1000
                })
                .to('#scene1 .draw-cube-wrapper .left', 1000, {
                    opacity: 0,
                    delay: -1000
                })
                .to('#scene1 .draw-cube-wrapper .right', 1000, {
                    opacity: 0,
                    delay: -1000
                })
                .to('#scene1 .draw-cube-wrapper .back', 1000, {
                    opacity: 0,
                    delay: -1000,
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene1 .tb-2__copy', 1000, {
                    delay: 500,
                    z: 1000,
                })
                .to('#scene1 .tb-2__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene1 .draw-cube', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1500px)'
                })
                .to('#scene1 .draw-cube', 0, {
                    delay: -300,
                    display: 'none'
                })
                .to('#scene1 .tb-3', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene1 .tb-3__title', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .tb-3__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1 .tb-3__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene1 .tb-3__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1', 700, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        centralizeAnimation(e.ratio, true);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],

                })
                .to('#scene1', 400, {
                    delay: 500,
                    onUpdate: _.throttle(function(e) {
                        centralizeAnimation(1 - e.ratio);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene1', 500, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        decentralizeAnimation(e.ratio);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene1 .tb-3__copy', 1000, {
                    delay: 300,
                    z: 1000
                })
                .to('#scene1 .tb-3__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene1 .people-container', 1000, {
                    transform: 'translateZ(1000px)',
                    delay: -1000
                })
                .to('#scene1 .bc-header.chapter-1', 100, {
                    opacity: 0,
                    delay: 0
                })
                .set('#scene1', {
                    display: 'none'
                })
            window.blockchain.scene1 = new ScrollMagic.Scene({
                    triggerHook: 0,
                    duration: window.blockchain.scene1Timeline.duration(),
                    offset: window.blockchain.windowHeight
                })
                .on('enter', function(data) {
                    $('.nav-selector .chapter-label').text('01 What is BlockChain');
                    initPeopleCanvas();
                    spawnStars(100, window.blockchain.scene1Timeline, '1');
                    $('.side-nav .chapter1').addClass('active');
                    if (data.scrollDirection === "FORWARD") {
                        toggleScene('2', 'add');
                    }
                })
                .on('leave', function(data) {
                    if (data.scrollDirection === "REVERSE" && data.type === "leave") {
                        window.blockchain.BlockChain.introTimeline.restart();
                    } else if (data.scrollDirection === 'REVERSE') {
                        toggleScene('2', 'remove');
                    }
                    $('.side-nav .chapter1').removeClass('active');
                    clearCanvas();
                })
                .on('progress', _.throttle(function(data) {
                    trackSceneProgress('01 What is BlockChain', data.progress);
                    trackNavProgress('chapter1', data.progress);
                }, window.blockchain.tickRate))
                .setTween(window.blockchain.scene1Timeline)
                .addTo(window.blockchain.blockchainController);
        }

        function buildScene2() {
            window.blockchain.scene2Timeline = new TimelineMax({
                useFrames: true,
                ease: Linear.easeNone
            });
            if (window.blockchain.isWebGL) {
                window.blockchain.scene2Timeline
                    .to('#animate2 *', 1, {
                        clearProps: 'all'
                    })
            } else {
                window.blockchain.scene2Timeline
                    .to('#animate2', 25, {
                        delay: 50,
                        onStart: function() {
                            spawnStars(100, window.blockchain.scene2Timeline, '2');
                        }
                    })
            }
            window.blockchain.scene2Timeline
                .set('#scene2', {
                    display: 'block'
                })
                .to('#scene2 .chapter-title', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene2 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: 0
                })
                .to('#scene2 .chapter-title .fly-ins', 500, {
                    transform: 'translateZ(0)',
                    delay: -100
                })
                .to('#scene2 .bc-header.chapter-2', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene2 .ctt-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .ctt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .ctt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .ctt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .ctt-2', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .ctt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .chapter-title .fly-ins', 400, {
                    delay: -1000,
                    transform: 'translateZ(2000px)',
                })
                .to('#scene2 .chapter-title', 0, {
                    display: 'none',
                    delay: -300
                })
                .to('#scene2 .chapter-text', 0, {
                    display: 'block',
                    delay: -300
                })
                .to('#scene2 .ct-1', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .ct-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .ct-1', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .chapter-text', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene2 .section-a', 0, {
                    display: 'block',
                    delay: -700
                })
                .to('#scene2 .bc-header.sub-a.chapter-2', 0, {
                    display: 'block',
                    delay: -700
                })
                .to('#scene2 .stt-1', 400, {
                    delay: -700,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .stt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .stt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .stt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .stt-2', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .stt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .section-a .bc-people', 0, {
                    display: 'block',
                    delay: -700
                })
                .to('#scene2 .section-a .car-registration img', 100, {
                    opacity: 1,
                    delay: -700
                })
                .to('#scene2 .section-a .car-registration img', 500, {
                    z: 0,
                    y: -75,
                    delay: -800
                })
                .to('#scene2 .section-a .bc-people .buyer', 100, {
                    opacity: 1,
                    delay: -400
                })
                .to('#scene2 .section-a .bc-people .buyer', 500, {
                    z: 0,
                    left: '87%',
                    delay: -500
                })
                .to('#scene2 .section-a .bc-people .seller', 100, {
                    opacity: 1,
                    delay: -400
                })
                .to('#scene2 .section-a .bc-people .seller', 500, {
                    z: 0,
                    left: '33%',
                    delay: -400
                })
                .to('#scene2 .tb-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene2 .tb-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .section-a .draw-diamond .tl', 500, {
                    height: '324px',
                    delay: 0
                })
                .to('#scene2 .section-a .draw-diamond .bl', 500, {
                    height: '322px',
                    delay: 0
                })
                .to('#scene2 .section-a .draw-diamond .br', 500, {
                    height: '318px',
                    delay: 0
                })
                .to('#scene2 .section-a .draw-diamond .tr', 500, {
                    height: '322px',
                    delay: 0,
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .tb-1', 1000, {
                    delay: 150,
                    z: 1000
                })
                .to('#scene2 .registration-info', 500, {
                    delay: -950,
                    width: '300px'
                })
                .to('#scene2 .registration-info', 300, {
                    delay: -900,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .registration-info .cat-0', e.time(), e.totalDuration());
                        printTextController('#scene2 .registration-info .cat-1', e.time(), e.totalDuration());
                        printTextController('#scene2 .registration-info .cat-2', e.time(), e.totalDuration());
                        printTextController('#scene2 .registration-info .cat-3', e.time(), e.totalDuration());
                        printTextController('#scene2 .registration-info .cat-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-2', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene2 .tb-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .registration-info-wrapper', 500, {
                    transform: 'translateZ(2000px) translateY(-50%) translateX(-50%)',
                    delay: 300
                })
                .to('#scene2 .draw-diamond', 500, {
                    transform: 'translateZ(2000px) translateY(-50%) translateX(-50%)',
                    delay: -500
                })
                .to('#scene2 .section-a .car-registration', 500, {
                    z: 2000,
                    delay: -500
                })
                .to('#scene2 .section-a .bc-people .seller', 500, {
                    transform: 'translateZ(-500px) translateY(-100px) translateX(-100px)',
                    left: '115%',
                    top: '77%',
                    delay: -500
                })
                .to('#scene2 .section-a .bc-people .buyer', 500, {
                    transform: 'translateZ(-300px) translateY(-100px) translateX(-100px)',
                    left: '92%',
                    top: '53%',
                    delay: -500,
                })
                .to('#scene2', 500, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        scene2PeopleIntro(e.ratio);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                })

            /*
            .to('#scene2 .section-a .bc-people .buyer', 0, {
                display: 'none',
                delay: 0
            })
            .to('#scene2 .section-a .bc-people .seller', 0, {
                display: 'none',
                delay: 0
            })
            */
            .to('#scene2', 400, {
                    delay: 20,
                    onUpdate: _.throttle(function(e) {
                        scene2PeopleLines(e.ratio, true);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2', 400, {
                    delay: 200,
                    onUpdate: _.throttle(function(e) {
                        animateDiamond(e.ratio, [{ start: scene2Pt3, target: scene2Pt2 }]);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        animateDiamond(e.ratio, [{ start: scene2Pt2, target: scene2Pt5 }, { start: scene2Pt2, target: scene2Pt4 }, { start: scene2Pt2, target: scene2Pt10 }]);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        animateDiamond(e.ratio, [{ start: scene2Pt10, target: scene2Pt11 }, { start: scene2Pt4, target: scene2Pt11 }, { start: scene2Pt5, target: scene2Pt12 }, { start: scene2Pt4, target: scene2Pt12 }, { start: scene2Pt4, target: scene2Pt1 }]);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        animateDiamond(e.ratio, [{ start: scene2Pt1, target: scene2Pt8 }, { start: scene2Pt1, target: scene2Pt6 }, { start: scene2Pt11, target: scene2Pt8 }, { start: scene2Pt11, target: scene2Pt13 }]);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .people-container', 1000, {
                    transform: 'translateZ(1000px)',
                    delay: 500
                })
                .to('#scene2 .section-a .bc-people .buyer', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene2 .section-a .bc-people .seller', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene2 .tb-2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                // .to('#scene2 .section-a .bc-people .transfer-1', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-1', 500, {
                //     left: '20%',
                //     top: '20%',
                //     transform: 'translateZ(-600px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-2', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-2', 500, {
                //     transform: 'translateZ(-500px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-3', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-3', 500, {
                //     transform: 'translateZ(-1000px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-4', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-4', 500, {
                //     transform: 'translateZ(-800px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-5', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-5', 500, {
                //     transform: 'translateZ(-400px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-6', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-6', 500, {
                //     transform: 'translateZ(-800px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-7', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-7', 500, {
                //     transform: 'translateZ(-1000px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-8', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-8', 500, {
                //     transform: 'translateZ(-1000px)',
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-9', 100, {
                //     opacity: 1,
                //     delay: -500
                // })
                // .to('#scene2 .section-a .bc-people .transfer-9', 500, {
                //     transform: 'translateZ(-700px)',
                //     delay: -500
                // })
                .to('#scene2 .section-a', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene2 .section-b', 0, {
                    display: 'block',
                    delay: -400
                })
                .to('#scene2 .bc-header.sub-a.chapter-2', 0, {
                    display: 'none',
                    delay: -400
                })
                .to('#scene2 .bc-header.sub-b.chapter-2', 0, {
                    display: 'block',
                    delay: -400
                })
                .to('#scene2 .stt-3', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .stt-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .stt-4', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .stt-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .stt-4', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .stt-3', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .block-building .d1', 0, {
                    display: 'block',
                    delay: -700
                })
                .to('#scene2 .block-building .d1 div', 200, {
                    delay: -700,
                    borderColor: "rgb(255,255,255)"
                })
                .to('#scene2 .block-building .d1 span', 200, {
                    delay: -700,
                    color: "rgb(255,255,255)"
                })
                .to('#scene2 .block-building .d1', 500, {
                    delay: -700,
                    z: 0
                })
                .to('#scene2 .block-building-info', 500, {
                    delay: -200,
                    width: '300px'
                })
                .to('#scene2 .block-building-info', 400, {
                    delay: -650,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .block-building-info .cat-0', e.time(), e.totalDuration());
                        printTextController('#scene2 .block-building-info .cat-1', e.time(), e.totalDuration());
                        printTextController('#scene2 .block-building-info .cat-2', e.time(), e.totalDuration());
                        printTextController('#scene2 .block-building-info .cat-3', e.time(), e.totalDuration());
                        printTextController('#scene2 .block-building-info .cat-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-3', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene2 .tb-3', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-3', e.time(), e.totalDuration(), 'forward', 'block');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .block-building .d2', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene2 .block-building .d2 div', 200, {
                    delay: 0,
                    borderColor: "rgb(215,215,215)"
                })
                .to('#scene2 .block-building .d2 span', 200, {
                    delay: -200,
                    color: "rgb(215,215,215)"
                })
                .to('#scene2 .block-building .d2', 500, {
                    delay: -200,
                    z: -200
                })
                .to('#scene2 .block-building-info', 500, {
                    delay: -500,
                    width: '0'
                })
                .to('#scene2 .block-building-info', 300, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .block-building-info .cat-0', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene2 .block-building-info .cat-1', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene2 .block-building-info .cat-2', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene2 .block-building-info .cat-3', e.time(), e.totalDuration(), 'reverse');
                        printTextController('#scene2 .block-building-info .cat-4', e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .block-building .d3', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene2 .block-building .d3 div', 200, {
                    delay: 0,
                    borderColor: "rgb(175,175,175)"
                })
                .to('#scene2 .block-building .d3 span', 200, {
                    delay: -200,
                    color: "rgb(175,175,175)"
                })
                .to('#scene2 .block-building .d3', 500, {
                    delay: -200,
                    z: -400
                })
                .to('#scene2 .block-building .d4', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene2 .block-building .d4 div', 200, {
                    delay: 0,
                    borderColor: "rgb(135,135,135)"
                })
                .to('#scene2 .block-building .d4 span', 200, {
                    delay: -200,
                    color: "rgb(135,135,135)"
                })
                .to('#scene2 .block-building .d4', 500, {
                    delay: -200,
                    z: -600
                })
                .to('#scene2 .block-building .d5', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene2 .block-building .d5 div', 200, {
                    delay: 0,
                    borderColor: "rgb(95,95,95)"
                })
                .to('#scene2 .block-building .d5 span', 200, {
                    delay: -200,
                    color: "rgb(95,95,95)"
                })
                .to('#scene2 .block-building .d5', 500, {
                    delay: -200,
                    z: -800
                })
                .to('#scene2 .block-building .d6', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene2 .block-building .d6 div', 200, {
                    delay: 0,
                    borderColor: "rgb(55,55,55)"
                })
                .to('#scene2 .block-building .d6 span', 200, {
                    delay: -200,
                    color: "rgb(55,55,55)"
                })
                .to('#scene2 .block-building .d6', 500, {
                    delay: -200,
                    z: -1000
                })
                .to('#scene2 .section-b .bottom-bar', 500, {
                    delay: 0,
                    width: '100%'
                })
                .to('#scene2 .section-b .left-bar', 500, {
                    delay: 0,
                    height: '100%'
                })
                .to('#scene2 .section-b .top-bar', 500, {
                    delay: 0,
                    width: '100%'
                })
                .to('#scene2 .section-b .right-bar', 500, {
                    delay: 0,
                    height: '100%'
                })
                .to('#scene2 .draw-cube .back', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene2 .draw-cube .back', 500, {
                    delay: 0,
                    z: -1000
                })
                .to('#scene2 .draw-cube .left', 500, {
                    delay: -50,
                    opacity: 1
                })
                .to('#scene2 .draw-cube .right', 500, {
                    delay: -500,
                    opacity: 1,
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .tb-3', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .section-b .timestamp', 400, {
                    width: 275,
                    delay: -300
                })
                .to('#scene2 .tb-4', 0, {
                    delay: -500,
                    display: 'block'
                })
                .to('#scene2 .tb-4', 500, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .draw-cube', 1000, {
                    delay: 500,
                    z: 3400
                })
                .to('#scene2 .timestamp-wrapper', 1000, {
                    delay: -1000,
                    z: 3200
                })
                .to('#scene2 .block-building .d1', 1000, {
                    delay: -1000,
                    z: 3000
                })
                .to('#scene2 .block-building .d2', 1000, {
                    delay: -1000,
                    z: 2800
                })
                .to('#scene2 .block-building .d3', 1000, {
                    delay: -1000,
                    z: 2600
                })
                .to('#scene2 .block-building .d4', 1000, {
                    delay: -1000,
                    z: 2400
                })
                .to('#scene2 .block-building .d5', 1000, {
                    delay: -1000,
                    z: 2200
                })
                .to('#scene2 .block-building .d6', 1000, {
                    delay: -1000,
                    z: 2000
                })
                .to('#scene2 .tb-4', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .section-b', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene2 .bc-header.sub-b.chapter-2', 0, {
                    display: 'none',
                    delay: -500
                })
                .to('#scene2 .bc-header.sub-c.chapter-2', 0, {
                    display: 'block',
                    delay: -500
                })
                .to('#scene2 .section-c', 0, {
                    display: 'block',
                    delay: -500
                })
                .to('#scene2 .stt-5', 400, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .stt-5', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .stt-6', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .stt-6', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .stt-6', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .stt-5', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-5', 0, {
                    delay: -500,
                    display: 'block'
                })
                .to('#scene2 .tb-5__title', 400, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-5__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-5__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-5__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .network-example .fade-in', 100, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene2 .network-example .c1', 1000, {
                    delay: -100,
                    transform: 'translateZ(2600px)'
                })
                .to('#scene2 .network-example .c2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2200px)'
                })
                .to('#scene2 .network-example .c3', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1800px)'
                })
                .to('#scene2 .network-example .c4', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1400px)'
                })
                .to('#scene2 .network-example .c5', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1000px)'
                })
                .to('#scene2 .network-example .c6', 1000, {
                    delay: -1000,
                    transform: 'translateZ(600px)'
                })
                .to('#scene2 .network-example .c7', 1000, {
                    delay: -1000,
                    transform: 'translateZ(200px)',
                })
                .to('#scene2 .network-example .c8-parent', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene2 .network-example .c8', 1000, {
                    delay: 0,
                    transform: 'translateZ(-200px) rotateY(0) rotateZ(0)',
                    top: '45%',
                    left: '0',
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .tb-5__copy', 1000, {
                    delay: 150,
                    z: 1000
                })
                .to('#scene2 .tb-5__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-6', 0, {
                    delay: -500,
                    display: 'block'
                })
                .to('#scene2 .tb-6__title', 400, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-6__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-6__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-6__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-6__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-6__copy_2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .network-example .c9-parent', 100, {
                    opacity: 1,
                    delay: -500
                })
                .to('#scene2 .network-example .c9', 1000, {
                    delay: -500,
                    transform: 'translateZ(-600px) rotateY(0) rotateZ(0)',
                    top: '45%',
                    left: '0',
                })
                .to('#scene2 .network-example .c10-parent', 100, {
                    opacity: 1,
                    delay: -500
                })
                .to('#scene2 .network-example .c10', 1000, {
                    delay: -500,
                    transform: 'translateZ(-1000px) rotateY(0) rotateZ(0)',
                    top: '45%',
                    left: '0',
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })

            .to('#scene2 .network-example .c1', 1000, {
                    delay: 150,
                    transform: 'translateZ(5700px)'
                })
                .to('#scene2 .network-example .c2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(5300px)'
                })
                .to('#scene2 .network-example .c3', 1000, {
                    delay: -1000,
                    transform: 'translateZ(4900px)'
                })
                .to('#scene2 .network-example .c4', 1000, {
                    delay: -1000,
                    transform: 'translateZ(4500px)'
                })
                .to('#scene2 .network-example .c5', 1000, {
                    delay: -1000,
                    transform: 'translateZ(4100px)'
                })
                .to('#scene2 .network-example .c6', 1000, {
                    delay: -1000,
                    transform: 'translateZ(3700px)'
                })
                .to('#scene2 .network-example .c7', 1000, {
                    delay: -1000,
                    transform: 'translateZ(3300px)'
                })
                .to('#scene2 .network-example .c8', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2900px)'
                })
                .to('#scene2 .network-example .c9', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2500px)'
                })
                .to('#scene2 .network-example .c10', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2100px)'
                })
                .to('#scene2 .tb-6__title', 1000, {
                    delay: -600,
                    z: 1000,
                })
                .to('#scene2 .tb-6__copy_1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-6__copy_2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-7', 0, {
                    delay: -400,
                    display: 'block'
                })
                .to('#scene2 .tb-7__title', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-7__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-7__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-7__copy_1', e.time(), e.totalDuration(), null, 'hash');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-7__copy_2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-7__copy_2', e.time(), e.totalDuration(), null, 'hash function');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .cw-1 .cube', 100, {
                    delay: -500,
                    opacity: 1
                })
                .to('#scene2 .securing-the-chain .cw-1 .cube', 500, {
                    delay: -500,
                    transform: 'translateZ(0)'
                })

            .to('#scene2 .encryption-cover .er-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '234px',
                    delay: 0
                })
                .to('#scene2 .encryption-cover .er-1', 100, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .top-bar', 400, {
                    delay: -420,
                    width: 0
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '234px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-2', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '218px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-2', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-2', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '218px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-3', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '202px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-3', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-3', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '202px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-4', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '186px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-4', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-4', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '186px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-5', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '170px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-5', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-5', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-5', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-5', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '170px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-6', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '154px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-6', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-6', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-6', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-6', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '154px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-7', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '138px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-7', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-7', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-7', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-7', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '138px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-8', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '122px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-8', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-8', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-8', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-8', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '122px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-9', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '106px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-9', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-9', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-9', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-9', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '106px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-10', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '90px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-10', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-10', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-10', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-10', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '90px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-11', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '74px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-11', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-11', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-11', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-11', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '74px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-12', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '58px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-12', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-12', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-12', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-12', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '58px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-13', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '42px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-13', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-13', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-13', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-13', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '42px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-14', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '26px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-14', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-14', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-14', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-14', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '26px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-15', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '10px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-15', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-15', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-15', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-15', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '10px',
                    delay: -40
                })
                .to('#scene2 .encryption-cover .er-16', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .left-bar', 0, {
                    height: '0px',
                    delay: -300
                })
                .to('#scene2 .encryption-cover .er-16', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.securing-the-chain .encryption-cover', '.er-16', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .encryption-cover .er-16', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.securing-the-chain .encryption-cover', '.er-16', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .bottom-bar', 400, {
                    delay: -420,
                    width: 0
                })
                .to('#scene2 .securing-the-chain .right-bar', 0, {
                    height: '0px',
                    delay: -40
                })
                .to('#scene2 .securing-the-chain .encryption-cover-duplicate', 0, {
                    display: 'block'
                })
                .to('#scene2 .securing-the-chain .cw-1 .block-num', 100, {
                    color: "rgb(0,0,0)",
                    delay: 0
                })
                .to('#scene2 .securing-the-chain .ecd-2', 100, {
                    z: -60,
                    delay: 0
                })
                .to('#scene2 .securing-the-chain .ecd-4', 100, {
                    z: -60,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .ecd-6', 100, {
                    z: -60,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .ecd-4', 100, {
                    z: -120,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .ecd-6', 100, {
                    z: -120,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .ecd-6', 100, {
                    z: -180,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .cw-1 .back', 100, {
                    opacity: 0,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .cw-1 .left', 100, {
                    opacity: 0,
                    delay: -100
                })
                .to('#scene2 .securing-the-chain .cw-1 .right', 100, {
                    opacity: 0,
                    delay: -100,
                    onComplete: function() {


                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .tb-7__copy_2', 1000, {
                    delay: 350,
                    z: 1000,
                })
                .to('#scene2 .tb-7__copy_1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-7__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-8', 0, {
                    delay: -400,
                    display: 'block'
                })
                .to('#scene2 .tb-8__title', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-8__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-8__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-8__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-8__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-8__copy_2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-8__copy_3', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-8__copy_3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],

                })
                .to('#scene2 .securing-the-chain .cw-2 .cube', 100, {
                    delay: -700,
                    opacity: 1
                })
                .to('#scene2 .securing-the-chain .cw-2 .cube', 500, {
                    delay: -700,
                    transform: 'translateZ(0)'
                })
                .to('#scene2 .securing-the-chain .cw-1 .gleam', 400, {
                    delay: 200,
                    left: '500px'
                })
                .to('#scene2 .securing-the-chain .cw-2 .interior-encryption-cover-duplicate', 200, {
                    delay: -250,
                    opacity: 1,
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .tb-8__title', 1000, {
                    delay: 350,
                    z: 1000
                })
                .to('#scene2 .tb-8__copy_1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-8__copy_2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-8__copy_3', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-9', 0, {
                    delay: -500,
                    display: 'block'
                })
                .to('#scene2 .tb-9__title', 400, {
                    delay: -500,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-9__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-9__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-9__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-9__copy_2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-9__copy_2', e.time(), e.totalDuration(), 'forwards');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .securing-the-chain .encryption-cover .to-hide', 0, {
                    delay: 0,
                    opacity: 0
                })
                // .to('#scene2 .securing-the-chain .iecd-1 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .to('#scene2 .securing-the-chain .ecd-2 .to-hide', 0, {
                    delay: 50,
                    opacity: 0
                })
                // .to('#scene2 .securing-the-chain .iecd-3 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .to('#scene2 .securing-the-chain .ecd-4 .to-hide', 0, {
                    delay: 50,
                    opacity: 0
                })
                // .to('#scene2 .securing-the-chain .iecd-5 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .to('#scene2 .securing-the-chain .ecd-6 .to-hide', 0, {
                    delay: 50,
                    opacity: 0
                })
                // .to('#scene2 .securing-the-chain .iecd-7 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .set('#scene2 .securing-the-chain .iecd-7 .circle', {
                    backgroundColor: "rgb(95,11,15)"
                })
                .to('#scene2 .securing-the-chain .iecd-7 .circle', 50, {
                    delay: 0,
                })
                .set('#scene2 .securing-the-chain .iecd-5 .circle', {
                    backgroundColor: "rgb(142,17,22)"
                })
                .to('#scene2 .securing-the-chain .iecd-5 .circle', 50, {
                    delay: 0,
                })
                .set('#scene2 .securing-the-chain .iecd-3 .circle', {
                    backgroundColor: "rgb(190,22,29)"
                })
                .to('#scene2 .securing-the-chain .iecd-3 .circle', 50, {
                    delay: 0,
                })
                .set('#scene2 .securing-the-chain .iecd-1 .circle', {
                    backgroundColor: "rgb(236,27,36)"
                })
                .to('#scene2 .securing-the-chain .iecd-1 .circle', 50, {
                    delay: 0,
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .tb-9__title', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene2 .tb-9__copy_1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-9__copy_2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .securing-the-chain .cw-1', 500, {
                    delay: -1000,
                    transform: 'translateZ(2000px)'
                })
                .to('#scene2 .securing-the-chain .cw-2 .cube', 500, {
                    delay: -1000,
                    transform: 'translateZ(2000px)'
                })
                .to('#scene2 .securing-the-chain', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene2 .sync-example', 0, {
                    delay: -500,
                    display: 'block'
                })
                .to('#scene2 .sync-example .c1', 1000, {
                    delay: -500,
                    transform: 'translateZ(-800px)'
                })
                .to('#scene2 .sync-example .c2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(-1200px)'
                })
                .to('#scene2 .sync-example .c3', 1000, {
                    delay: -1000,
                    transform: 'translateZ(-1600px)'
                })
                .to('#scene2 .tb-10', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene2 .tb-10__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-10__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-10__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-10__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene2 .tb-10__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene2 .tb-10__copy_2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene2 .sync-example .person', 200, {
                    opacity: 20,
                    delay: 200
                })
                .to('#scene2 .sync-example .c1', 1000, {
                    delay: -200,
                    transform: 'translateZ(2600px)'
                })
                .to('#scene2 .sync-example .c2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2200px)'
                })
                .to('#scene2 .sync-example .c3', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1800px)'
                })

            .to('#scene2 .tb-10__title', 1000, {
                    delay: -800,
                    z: 1000
                })
                .to('#scene2 .tb-10__copy_1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .tb-10__copy_2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene2 .bc-header.chapter-2', 100, {
                    opacity: 1,
                    delay: -1000
                })
                .set('#scene2', {
                    display: 'none'
                })

            window.blockchain.scene2 = new ScrollMagic.Scene({
                    triggerHook: 0,
                    duration: window.blockchain.scene2Timeline.duration(),
                    offset: window.blockchain.scene1Timeline.duration() + window.blockchain.windowHeight
                })
                .on('enter', function(data) {
                    spawnStars(100, window.blockchain.scene2Timeline, '2');
                    $('.nav-selector .chapter-label').text('02 How Does It Work');

                    if (data.scrollDirection === 'FORWARD') {
                        toggleScene('1', 'remove');
                        toggleScene('3', 'add');
                    }
                    $('.side-nav .chapter2').addClass('active');
                })
                .on('leave', function(data) {
                    clearCanvas();
                    if (data.scrollDirection === 'REVERSE') {
                        toggleScene('1', 'add');
                        toggleScene('3', 'remove');
                    }
                    $('.side-nav .chapter2').removeClass('active');
                })
                .on('progress', _.throttle(function(data) {
                    trackSceneProgress('02 How Does It Work', data.progress);
                    trackNavProgress('chapter2', data.progress);
                }, window.blockchain.tickRate))
                .setTween(window.blockchain.scene2Timeline);
        }

        function buildScene3() {
            var offset = window.blockchain.windowHeight + 1000; // height + previous scene durations
            var ticketField = 0;
            var randomPrinter;
            window.blockchain.scene3Timeline = new TimelineMax({
                useFrames: true,
                ease: Linear.easeNone
            });

            window.blockchain.scene3Timeline
            if (window.blockchain.isWebGL) {
                window.blockchain.scene3Timeline
                    .to('#animate3 *', 1, {
                        clearProps: 'all'
                    })
            } else {
                window.blockchain.scene3Timeline
                    .to('#animate3', 25, {
                        delay: 50,
                        onStart: function() {
                            console.log('this inside onStart ', this.target)

                            spawnStars(100, window.blockchain.scene3Timeline, '3');
                        }
                    })
            }
            window.blockchain.scene3Timeline
                .set('#scene3', {
                    display: 'block'
                })
                .set('#scene3', {
                    display: 'block'
                })
                .to('#scene3 .chapter-title', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: 0
                })
                .to('#scene3 .chapter-title .fly-ins', 500, {
                    transform: 'translateZ(0)',
                    delay: -100
                })
                .to('#scene3 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: 0
                })
                .to('#scene3 .bc-header.chapter-3', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene3 .ctt-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .ctt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ctt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .ctt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {

                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .ctt-2', 1000, {
                    delay: 500,
                    z: 2000
                })
                .to('#scene3 .ctt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .chapter-title .fly-ins', 1000, {
                    transform: 'translateZ(1000px)',
                    delay: -1000
                })
                .to('#scene3 .chapter-title', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene3 .chapter-text', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .ct-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .ct-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .ct-1', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .chapter-text', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene3 .section-a', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .bc-header.sub-a.chapter-3', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .section-a .stt-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .stt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .stt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .stt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-a .stt-2', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .section-a .stt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .section-a .concert-tickets__ticket-1', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene3 .section-a .concert-tickets__ticket-2', 100, {
                    opacity: 1,
                    delay: -50
                })
                .to('#scene3 .section-a .concert-tickets__ticket-1', 500, {
                    transform: 'translateZ(0)',
                    delay: -150,
                })
                .to('#scene3 .section-a .concert-tickets__ticket-2', 500, {
                    transform: 'translateZ(0)',
                    delay: -450,
                })
                .to('#scene3 .tb-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-a .tb-1__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-1__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .tb-1__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-1__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-a .tb-1__copy', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .section-a .tb-1__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .section-a .concert-tickets__ticket-1', 500, {
                    transform: 'translateZ(2000px)',
                    delay: -1000
                })
                .to('#scene3 .section-a .concert-tickets__ticket-2', 500, {
                    transform: 'translateZ(100px) translateY(0) translateX(0)',
                    top: '30%',
                    left: '55%',
                    delay: -1000,
                })
                .to('#scene3 .tb-2', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-a .tb-2__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-2__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .tb-2__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-2__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-a .tb-2__copy', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .section-a .tb-2__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .section-a .concert-tickets__ticket-2', 200, {
                    transform: 'translateZ(0px) translateY(0) translateX(0)',
                    left: '33.33%',
                    top: '45%',
                    delay: -1000
                })

            .to('#scene3 .section-a .ticket-info', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .section-a .ticket-info__ticket .cat-0', 400, {
                    width: 335,
                    delay: 0
                })
                .to('#scene3 .section-a .ticket-info__ticket .cat-1', 400, {
                    width: 160,
                    delay: -300
                })
                .to('#scene3 .section-a .ticket-info__ticket .cat-2', 266, {
                    width: 225,
                    delay: -350
                })
                .to('#scene3 .section-a .ticket-info__ticket .cat-3', 311, {
                    width: 110,
                    delay: -236
                })
                .to('#scene3 .section-a .ticket-info__ticket .cat-4', 170, {
                    width: 250,
                    delay: -281
                })
                .to('#scene3 .section-a .ticket-info__ticket .cat-5', 200, {
                    width: 205,
                    delay: -150
                })
                // .to('#scene3 .section-a .ticket-info__ticket .cat-6', 220, {
                //     width: 205,
                //     delay: -190
                // })
                .to('#scene3 .tb-3', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-a .tb-3', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                })
                .to('#scene3 .ticket-info .cat-0', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 50,
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    left: 123,
                    top: 55,
                    display: 'block'
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 200, {
                    delay: 0,
                    left: 335,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.ticket-info', 0, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    display: 'none',
                    delay: 50
                })
                .to('#scene3 .ticket-info .cat-0', 50, {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    delay: 0,
                })
                .to('#scene3 .ticket-info .cat-1', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    left: 185,
                    top: 13,
                    display: 'block'
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 200, {
                    delay: 0,
                    left: 270,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.ticket-info', 1, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    display: 'none'
                })
                .to('#scene3 .ticket-info .cat-1', 50, {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    delay: 0
                })
                .to('#scene3 .ticket-info .cat-2', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .ticket-info .cat-3', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: -50
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    left: 170,
                    top: 82,
                    display: 'block'
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 400, {
                    delay: 0,
                    left: 290,
                })
                .to('#scene3 .ticket-info .cat-2', 200, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.ticket-info', 2, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticket-info .cat-3', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.ticket-info', 3, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    display: 'none'
                })
                .to('#scene3 .ticket-info .cat-2', 50, {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    delay: 0
                })
                .to('#scene3 .ticket-info .cat-3', 50, {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    delay: -50
                })
                .to('#scene3 .ticket-info .cat-4', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    top: 10,
                    left: 357,
                    width: '40px',
                    height: '5px',
                    display: 'block'
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 100, {
                    delay: 0,
                    top: 105,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.ticket-info', 4, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    display: 'none'
                })
                .to('#scene3 .ticket-info .cat-4', 50, {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    delay: 0
                })
                .to('#scene3 .ticket-info .cat-5', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    left: 13,
                    top: 12,
                    display: 'block'
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 100, {
                    delay: 0,
                    top: 105,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.ticket-info', 5, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .concert-tickets .highlighter', 0, {
                    display: 'none'
                })
                .to('#scene3 .ticket-info .cat-5', 50, {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    delay: 0
                })
                .to('#scene3 .tb-2', 0, {
                    delay: 0,
                    display: 'block',
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-a .tb-3', 1000, {
                    delay: 150,
                    z: 1000
                })
                .to('#scene3 .section-a .concert-tickets__ticket-2', 500, {
                    transform: 'translateZ(2000px)',
                    left: '33%',
                    top: '40%',
                    delay: -1000
                })
                .to('#scene3 .section-a .ticket-info__ticket', 500, {
                    scale: '.7',
                    left: '53%',
                    delay: -500
                })
                .to('#scene3 .ticket-info .ticket-info__category', -250, {
                    marginBottom: '-1px',
                    delay: 0
                })
                .to('#scene3 .section-a .ticket-info .tl', 500, {
                    height: '383px',
                    delay: 0
                })
                .to('#scene3 .section-a .ticket-info .bl', 500, {
                    height: '381px',
                    delay: 0
                })
                .to('#scene3 .section-a .ticket-info .br', 500, {
                    height: '377px',
                    delay: 0
                })
                .to('#scene3 .section-a .ticket-info .tr', 500, {
                    height: '385px',
                    delay: 0
                })
                .to('#scene3 .tb-4', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-a .tb-4', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-4', e.time(), e.totalDuration(), 'forwards', 'address');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer', 0, {
                    display: 'block',
                    delay: -500
                })
                .to('#scene3 .section-a .ticket-transfer', 0, {
                    display: 'block',
                    delay: -500
                })
                .to('#scene3 .section-a .draw-diamond .seller', 500, {
                    z: 0,
                    opacity: 1,
                    delay: 0
                })
                .to('#scene3 .section-a .draw-diamond .buyer', 500, {
                    z: 0,
                    opacity: 1,
                    delay: -500
                })
                .to('#scene3 .section-a .ticket-transfer .address', 500, {
                    width: '496px',
                    delay: 0,
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        showRandomText('address', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: -1000,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .address .address-wrapper', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-a .ticket-info .ticket', 100, {
                    delay: -500,
                    onStart: function(e) {
                        clearInterval(window.blockchain.printInterval);
                    },
                    onUpdateParams: ["{self}"],
                })

            .to('#scene3 .section-a .tb-4', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .section-a .ticket-info .ticket-info__ticket', 200, {
                    delay: -1000,
                    opacity: 0,
                })
                .to('#scene3 .section-a .ticket-info .draw-diamond', 200, {
                    delay: -1000,
                    opacity: 0
                })
                .to('#scene3 .section-a .draw-diamond .seller', 200, {
                    delay: -200,
                    opacity: 0
                })
                .to('#scene3 .section-a .ticket-info .ticket-info__ticket', 1000, {
                    delay: -1000,
                    y: '100%',
                })
                .to('#scene3 .section-a .ticket-info .draw-diamond', 1000, {
                    delay: -1000,
                    y: '100%'
                })
                .to('#scene3 .section-a .draw-diamond .seller', 1000, {
                    delay: -1000,
                    y: '100%'
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        encrypt(e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .address', 0, {
                    delay: 0,
                    background: 'transparent',
                })
                .to('#scene3 .section-a .address .address-wrapper', 0, {
                    delay: 0,
                    display: 'none',
                })
                .to('#scene3 .section-a .address h3', 0, {
                    delay: 0,
                    display: 'none',
                })
                .to('#scene3 .section-a .encryption-cover .fades', 0, {
                    delay: 0,
                    background: 'transparent'
                })
                .to('#scene3 .tb-5', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-a .tb-5', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-5', e.time(), e.totalDuration(), 'forwards', 'private key');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        encrypt(e.time(), e.totalDuration(), 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .encryption-cover .bit', 0, {
                    delay: 0,
                    background: 'transparent',
                })
                .to('#scene3 .section-a .keyhole-wrapper', 200, {
                    delay: -400,
                    opacity: 1,
                })
                .to('#scene3 .section-a .keyhole-wrapper', 500, {
                    delay: -200,
                    z: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-a .tb-5', 1000, {
                    delay: 350,
                    z: 1000,
                })
                .to('#scene3 .section-a .key-mask', 0, {
                    delay: 150,
                    display: 'block',
                })
                .to('#scene3 .section-a .address', 500, {
                    delay: 0,
                    top: '50%',
                    marginTop: '24px'
                })
                .to('#scene3 .tb-6', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-6__copy_1', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-6__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-6__copy_2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-6__copy_2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .address', 500, {
                    delay: 0,
                    x: -150,
                })

            .to('#scene3 .section-a .mask-mask', 0, {
                    delay: 0,
                    zIndex: 9999,
                })
                .to('#scene3 .section-a .mask-mask', 500, {
                    delay: 10,
                    top: -240,
                    left: -240
                })
                .to('#scene3 .section-a  .keyhole__ticket', 273, {
                    delay: -358,
                    height: '340px',
                })
                .to('#scene3 .section-a  .address', 0, {
                    delay: 50,
                    display: 'none',
                })
                .to('#scene3 .section-a .key-mask', 0, {
                    delay: 0,
                    display: 'none',
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .tb-6', 1000, {
                    delay: 150,
                    z: 1000
                })
                .to('#scene3 .section-a .reveal-mask', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene3 .section-a .keyhole-wrapper', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene3 .section-a .dw-3', 0, {
                    delay: 0,
                    display: 'block',
                })
                .to('#scene3 .tb-6_b', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-6_b__copy_1', 400, {
                    delay: -400,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-6_b__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-6_b__copy_2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-6_b__copy_2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer .address-3', 500, {
                    onStart: function(e) {
                        //console.log('reset address')
                        $('.address-3 .type-ins').html($('.address .type-ins').html() + $('.address .char').eq(0).html() + $('.address .char').eq(1).html() + $('.address .char').eq(2).html() + $('.address .char').eq(3).html());
                    },
                    width: '496px',
                    delay: -500,
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        showRandomText('address-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: -1000,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .address-2 .address-wrapper', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        showRandomText('address-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .ticket-transfer', 1000, {
                    delay: -1000,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .address-3 .address-wrapper', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-a .bbiw-2 .cat-1 .type-ins', 1, {
                    delay: 50,
                })
                .to('#scene3 .section-a .bbiw-2 .block-building-info', 500, {
                    delay: 0,
                    width: '300px',
                    onStart: function(e) {
                        $('.bbiw-2 .cat-1 .type-ins').html($('.address-3 .type-ins').html() + $('.address-3 .char').eq(0).html() + $('.address-3 .char').eq(1).html() + $('.address-3 .char').eq(2).html() + $('.address-3 .char').eq(3).html() + $('.address-3 .char').eq(4).html());
                    },
                })
                .to('#scene3 .section-a .ticket-transfer .address-3', 1000, {
                    z: 1000,
                    delay: 50,
                })
                .to('#scene3 .section-a .bbiw-2 .block-building-info', 1000, {
                    z: 1000,
                    delay: -1000,
                })
                .to('#scene3 .section-a .dw-3', 1000, {
                    z: 1000,
                    delay: -1000,
                })
                .to('#scene3 .tb-6_b__copy_1', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .tb-6_b__copy_2', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .bbiw-2', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .keyhole', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .section-a', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene3 .section-b', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .bc-header.sub-a.chapter-3', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene3 .bc-header.sub-b.chapter-3', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .section-b .stt-3', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .stt-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-b .stt-4', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .stt-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-b .stt-4', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .section-b .stt-3', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .ticker', 200, {
                    opacity: 1,
                    delay: -200
                })
                .to('#scene3 .ticker-1', 500, {
                    left: 0,
                    top: 0,
                    z: 0,
                    delay: -200
                })
                .to('#scene3 .ticker-2', 500, {
                    delay: -500,
                    left: 255,
                    top: 0,
                    z: 0
                })
                .to('#scene3 .ticker-3', 500, {
                    delay: -500,
                    left: 510,
                    top: 0,
                    z: 0
                })
                .to('#scene3 .ticker-4', 500, {
                    delay: -500,
                    left: 0,
                    top: 39,
                    z: 0
                })
                .to('#scene3 .ticker-5', 500, {
                    delay: -500,
                    left: 255,
                    top: 39,
                    z: 0
                })
                .to('#scene3 .ticker-6', 500, {
                    delay: -500,
                    left: 510,
                    top: 39,
                    z: 0
                })
                .to('#scene3 .ticker-7', 500, {
                    delay: -500,
                    left: 0,
                    top: 78,
                    z: 0
                })
                .to('#scene3 .ticker-8', 500, {
                    delay: -500,
                    left: 255,
                    top: 78,
                    z: 0
                })
                .to('#scene3 .ticker-9', 500, {
                    delay: -500,
                    left: 510,
                    top: 78,
                    z: 0
                })
                .to('#scene3 .ticker-10', 500, {
                    delay: -500,
                    left: 0,
                    top: 117,
                    z: 0
                })
                .to('#scene3 .ticker-11', 500, {
                    delay: -500,
                    left: 255,
                    top: 117,
                    z: 0
                })
                .to('#scene3 .ticker-12', 500, {
                    delay: -500,
                    left: 510,
                    top: 117,
                    z: 0
                })
                .to('#scene3 .ticker-13', 500, {
                    delay: -500,
                    left: 0,
                    top: 156,
                    z: 0
                })
                .to('#scene3 .ticker-14', 500, {
                    delay: -500,
                    left: 255,
                    top: 156,
                    z: 0
                })
                .to('#scene3 .ticker-15', 500, {
                    delay: -500,
                    left: 510,
                    top: 156,
                    z: 0
                })
                .to('#scene3 .ticker-16', 500, {
                    delay: -500,
                    left: 0,
                    top: 195,
                    z: 0
                })
                .to('#scene3 .ticker-17', 500, {
                    delay: -500,
                    left: 255,
                    top: 195,
                    z: 0
                })
                .to('#scene3 .ticker-18', 500, {
                    delay: -500,
                    left: 510,
                    top: 195,
                    z: 0
                })
                .to('#scene3 .ticker-19', 500, {
                    delay: -500,
                    left: 0,
                    top: 234,
                    z: 0
                })
                .to('#scene3 .ticker-20', 500, {
                    delay: -500,
                    left: 255,
                    top: 234,
                    z: 0
                })
                .to('#scene3 .ticker-21', 500, {
                    delay: -500,
                    left: 510,
                    top: 234,
                    z: 0
                })
                .to('#scene3 .tb-7', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-b .tb-7__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-7__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-b .tb-7__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-7__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                })
                .to('#scene3 .ticker-4', 200, {
                    delay: 150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-4', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-18', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-18', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-7', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-7', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-9', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-9', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-16', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-16', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-2', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-2', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-6', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-6', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-8', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-8', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-20', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-20', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-1', 200, {
                    delay: -100,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-1', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-19', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-19', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-3', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-3', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-17', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-17', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-5', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-5', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-11', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-11', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-10', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-10', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-12', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-12', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-13', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-13', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-21', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-21', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-14', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-14', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-15', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-15', e.time(), e.totalDuration(), 1, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-4', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-4', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-18', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-18', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-7', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-7', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-9', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-9', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-16', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-16', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-2', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-2', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-6', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-6', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-8', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-8', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-20', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-20', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-1', 200, {
                    delay: -100,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-1', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-19', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-19', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-3', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-3', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-17', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-17', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-5', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-5', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-11', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-11', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-10', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-10', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-12', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-12', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-13', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-13', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-21', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-21', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-14', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-14', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-15', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-15', e.time(), e.totalDuration(), 2);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-4', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-4', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-18', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-18', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-7', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-7', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-9', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-9', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-16', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-16', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-2', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-2', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-6', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-6', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-8', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-8', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-20', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-20', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-1', 200, {
                    delay: -100,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-1', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-19', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-19', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-3', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-3', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-17', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-17', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-5', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-5', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-11', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-11', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-10', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-10', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-12', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-12', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-13', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-13', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-21', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-21', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-14', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-14', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-15', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-15', e.time(), e.totalDuration(), 2, 'reverse');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-4', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-4', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-18', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-18', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-7', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-7', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-9', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-9', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-16', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-16', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-2', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-2', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-6', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-6', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-8', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-8', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-20', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-20', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-1', 200, {
                    delay: -100,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-1', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-19', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-19', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-3', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-3', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-17', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-17', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-5', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-5', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-11', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-11', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-10', 200, {
                    delay: -150,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-10', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-12', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-12', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-13', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-13', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-21', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-21', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-14', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-14', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-15', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-15', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .ticker-15', 200, {
                    delay: -200,
                    onUpdate: _.throttle(function(e) {
                        typeTickerText('ticker-15', e.time(), e.totalDuration(), 1);
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-b .tb-7__copy', 1000, {
                    delay: 200,
                    z: 1000
                })
                .to('#scene3 .section-b .tb-7__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .ticker-wrapper', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .ticker-wrapper', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene3 .sc-1', 0, {
                    delay: 0,
                    display: 'block',
                })
                .to('#scene3 .sc-1 .left', 200, {
                    delay: 0,
                    backgroundColor: "rgba(117,97,55,.3)"
                })
                .to('#scene3 .sc-1 .right', 200, {
                    delay: -200,
                    backgroundColor: "rgba(255,230,180,.3)"
                })
                .to('#scene3 .sc-1 .top', 200, {
                    delay: -200,
                    backgroundColor: "rgba(255,210,122,.3)"
                })
                .to('#scene3 .sc-1 .bottom', 200, {
                    delay: -200,
                    backgroundColor: "rgba(160,132,77,.3)"
                })
                .to('#scene3 .sc-1 .front', 200, {
                    delay: -200,
                    backgroundColor: "rgba(255,210,120,.3)"
                })
                .to('#scene3 .sc-1 .back', 200, {
                    delay: -200,
                    backgroundColor: "rgba(255,210,120,.25)"
                })
                .to('#scene3 .sc-1 .front p', 200, {
                    delay: -200,
                    opacity: 1
                })
                .to('#scene3 .sc-1 .cube', 500, {
                    delay: -200,
                    z: -800,
                    x: '-50%'
                })
                .to('#scene3 .sc-1 .smart-contract-type', 500, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .smart-contract-type', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],

                })
                .to('#scene3 .tb-8', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .section-b .tb-8__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-8__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-b .tb-8__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-8__copy', e.time(), e.totalDuration(), 'forwards', 'smart contract');
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-b .tb-8__copy', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .section-b .tb-8__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .sc-1 .cube', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .sc-1 .cube', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene3 .buyer-example', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .buyer-example .diamond', 200, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene3 .buyer-example .diamond-wrapper', 500, {
                    delay: -200,
                    z: 0
                })
                .to('#scene3 .buyer-example .ticker', 500, {
                    delay: -500,
                    z: 0
                })
                .to('#scene3 .tb-9', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-9__copy_1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-9__copy_1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-9__copy_2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-9__copy_2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })

            .to('#scene3 .bc-people .broker', 200, {
                    delay: -200,
                    opacity: 1
                })
                .to('#scene3 .bc-people .broker', 500, {
                    delay: -200,
                    z: 0
                })
                .to('#scene3 .bc-people .seller', 200, {
                    delay: -450,
                    opacity: 1
                })
                .to('#scene3 .bc-people .seller', 500, {
                    delay: -450,
                    z: 0
                })
                .to('#scene3 .bc-people .buyer', 200, {
                    delay: -450,
                    opacity: 1
                })
                .to('#scene3 .bc-people .buyer', 500, {
                    delay: -450,
                    z: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .tb-9', 1000, {
                    delay: 600,
                    z: 1000
                })
                .to('#scene3 .buyer-example .diamond-wrapper', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .buyer-example .ticker', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .bc-people .broker', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .bc-people .seller', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .bc-people .buyer', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .buyer-example', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene3 .transaction-example', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-10', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .tb-10__1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-10__1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-10__2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-10__2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-10__3', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .tb-10__3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .transaction-example .chain1 .cube-wrapper', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene3 .transaction-example .chain2 .cube-wrapper', 100, {
                    opacity: 1,
                    delay: -100
                })
                .to('#scene3 .transaction-example .element__label', 100, {
                    opacity: 1,
                    delay: -100
                })
                .to('#scene3 .transaction-example .c1', 1000, {
                    delay: -500,
                    transform: 'translateZ(2100px)'
                })
                .to('#scene3 .transaction-example .c2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1700px)'
                })
                .to('#scene3 .transaction-example .c3', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1300px)'
                })
                .to('#scene3 .transaction-example .c4', 1000, {
                    delay: -1000,
                    transform: 'translateZ(900px)'
                })
                .to('#scene3 .transaction-example .c5', 1000, {
                    delay: -1000,
                    transform: 'translateZ(500px)'
                })
                .to('#scene3 .transaction-example .c6', 1000, {
                    delay: -1000,
                    transform: 'translateZ(100px)'
                })
                .to('#scene3 .transaction-example .c7', 1000, {
                    delay: -1000,
                    transform: 'translateZ(-300px)'
                })
                .to('#scene3 .transaction-example .td-1 .diamond', 200, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene3 .transaction-example .td-2 .diamond', 200, {
                    opacity: 1,
                    delay: -200
                })
                .to('#scene3 .transaction-example .td-1', 500, {
                    transform: 'translateZ(-800px)',
                    delay: -200
                })
                .to('#scene3 .transaction-example .td-2', 500, {
                    transform: 'translateZ(-800px)',
                    delay: -500
                })
                .to('#scene3 .transaction-example .sc-2', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .transaction-example .td-1 .diamond', 0, {
                    filter: "blur(2px)",
                    delay: 0
                })
                .to('#scene3 .transaction-example .td-2 .diamond', 0, {
                    filter: "blur(2px)",
                    delay: 0
                })
                .to('#scene3 .transaction-example .sc-2 .cube > div', 200, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene3 .transaction-example .sc-2 p', 200, {
                    delay: -200,
                    opacity: 1
                })
                .to('#scene3 .transaction-example .block-building-info', 500, {
                    width: '300px',
                    delay: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .tb-10__3', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .tb-10__2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .tb-10__1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .transaction-example .c1', 1000, {
                    delay: -1000,
                    transform: 'translateZ(4500px)'
                })
                .to('#scene3 .transaction-example .c2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(4100px)'
                })
                .to('#scene3 .transaction-example .c3', 1000, {
                    delay: -1000,
                    transform: 'translateZ(3700px)'
                })
                .to('#scene3 .transaction-example .c4', 1000, {
                    delay: -1000,
                    transform: 'translateZ(3300px)'
                })
                .to('#scene3 .transaction-example .c5', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2900px)'
                })
                .to('#scene3 .transaction-example .c6', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2500px)'
                })
                .to('#scene3 .transaction-example .c7', 1000, {
                    delay: -1000,
                    transform: 'translateZ(2100px)'
                })
                .to('#scene3 .transaction-example .td-1', 1000, {
                    transform: 'translateZ(2100px)',
                    delay: -1000
                })
                .to('#scene3 .transaction-example .td-2', 1000, {
                    transform: 'translateZ(1700px)',
                    delay: -1000
                })
                .to('#scene3 .transaction-example .sc-2 .cube', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1700px)',
                })
                .to('#scene3 .transaction-example .cl1', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1000)'
                })
                .to('#scene3 .transaction-example .cl2', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1000)'
                })
                .to('#scene3 .transaction-example', 0, {
                    delay: 0,
                    display: 'none',
                })
                .to('#scene3 .transaction-example', 0, {
                    delay: 0,
                    display: 'none',
                })
                .to('#scene3 #section-b', 0, {
                    delay: 0,
                    display: 'none',
                })
                .to('#scene3 #section-c', 0, {
                    delay: 0,
                    display: 'block',
                })
                .to('#scene3 .bc-header.sub-b.chapter-3', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene3 .bc-header.sub-c.chapter-3', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene3 .stt-5', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .stt-5', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .stt-6', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene3 .stt-6', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .stt-6', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene3 .stt-5', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .tb-11', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-11__title', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-11__title', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-11__copy', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-11__copy', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"],
                })
                .to('#scene3 .section-c .id-card', 100, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene3 .section-c .id-card', 400, {
                    delay: -100,
                    z: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-c .id-card', 1000, {
                    delay: 400,
                    z: 1000
                })
                .to('#scene3 .tb-11__title', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .tb-11__copy', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .section-c .map', 0, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene3 .section-c .map', 500, {
                    delay: 0,
                    transform: 'translateZ(0)'
                })
                .to('#scene3 .section-c .map', 50, {
                    delay: 0,
                    onUpdate: function(e) {
                        initMapCanvas();
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-12', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-12__title', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-12__title', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-12__copy', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-12__copy', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"],
                })
                .to('#scene3 .section-c .map', 500, {
                    delay: 0,
                    onUpdate: function(e) {
                        animateMapCanvas([{ city1: belem, city2: boston }], e.ratio);
                    },
                    onUpdateParams: ["{self}"]
                })

            .to('#scene3 .section-c .map', 200, {
                    delay: 0,
                    onUpdate: function(e) {
                        animateMapCanvas([{ city1: boston, city2: halifax }], e.ratio);
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .map', 500, {
                    delay: 0,
                    onUpdate: function(e) {
                        animateMapCanvas([{ city1: halifax, city2: belem }, { city1: halifax, city2: frankfurt }, { city1: halifax, city2: fez }], e.ratio);
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .map', 500, {
                    delay: 0,
                    onUpdate: function(e) {
                        animateMapCanvas([{ city1: belem, city2: beirut }, { city1: fez, city2: frankfurt }, { city1: fez, city2: beirut }, { city1: fez, city2: belem }, { city1: frankfurt, city2: beirut }], e.ratio);
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .map', 100, {
                    delay: 0,
                    onUpdate: function(e) {
                        animateMapCanvas([], e.ratio);
                    },
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                /*
                .to('#scene3 .tb-11__copy', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-11__copy', e.time(), e.totalDuration(), 'reverse');
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-11__title', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-11__title', e.time(), e.totalDuration(), 'reverse');
                    },
                    onUpdateParams: ["{self}"]
                })
                */
                .to('#scene3 .section-c .map', 1000, {
                    delay: 150,
                    transform: 'translateZ(1000px)'
                })
                .to('#scene3 .tb-12__copy', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1000px)'
                })
                .to('#scene3 .tb-12__title', 1000, {
                    delay: -1000,
                    transform: 'translateZ(1000px)'
                })
                .to('#scene3 .tb-13', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-13', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-13', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .fingerprint', 100, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene3 .section-c .fingerprint', 400, {
                    delay: -100,
                    z: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })

            .to('#scene3 .section-c .fingerprint', 400, {
                    delay: 800,
                    left: '37%',
                    scale: .73
                })
                .to('#scene3 .tb-13', 1000, {
                    delay: -400,
                    transform: 'translateZ(1000px)'
                })
                .to('#scene3 .tb-14', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene3 .tb-14', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-14', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .refugee', 100, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene3 .section-c .refugee', 400, {
                    delay: -100,
                    z: 0
                })
                .to('#scene3 .section-c .draw-diamond .tl', 500, {
                    height: '430px',
                    delay: 0
                })
                .to('#scene3 .section-c .draw-diamond .bl', 500, {
                    height: '428px',
                    delay: 0
                })
                .to('#scene3 .section-c .draw-diamond .br', 500, {
                    height: '424px',
                    delay: 0
                })
                .to('#scene3 .section-c .draw-diamond .tr', 500, {
                    height: '421px',
                    delay: 0
                })
                .to('#scene3 .section-c .registration-info', 500, {
                    delay: 0,
                    width: '200px'
                })
                .to('#scene3 .section-c .cat-1', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-0', 50, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.section-c', 1, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .cat-1', 50, {
                    backgroundColor: 'rgba(255,255,255,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-2', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-0', 50, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.section-c', 2, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .cat-2', 50, {
                    backgroundColor: 'rgba(255,255,255,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-3', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-0', 50, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.section-c', 3, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .cat-3', 50, {
                    backgroundColor: 'rgba(255,255,255,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-4', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-0', 50, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.section-c', 4, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .cat-4', 50, {
                    backgroundColor: 'rgba(255,255,255,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-5', 50, {
                    backgroundColor: 'rgba(255,209,122,1)',
                    delay: 0
                })
                .to('#scene3 .section-c .cat-0', 50, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        typeFormFields('.section-c', 5, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .cat-5', 50, {
                    backgroundColor: 'rgba(255,255,255,1)',
                    delay: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-c .diamond-mask', 400, {
                    delay: 150,
                    transform: "rotate(-45deg) translateY(-120px)"
                })
                .to('#scene3 .section-c .fingerprint', 1000, {
                    delay: -400,
                    z: 1000
                })
                .to('#scene3 .tb-14', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .section-c .fingerprint', 0, {
                    delay: 0,
                    left: '60%',
                    z: 0,
                    scale: 1
                })
                .to('#scene3 .section-c .fingerprint .print-1', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene3 .tb-15', 0, {
                    delay: -400,
                    display: 'block'
                })
                .to('#scene3 .tb-15__copy', 400, {
                    delay: -400,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-15__copy', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .tb-15__copy_2', 400, {
                    delay: 0,
                    onUpdate: function(e) {
                        printTextController('#scene3 .tb-15__copy_2', e.time(), e.totalDuration());
                    },
                    onUpdateParams: ["{self}"]
                })
                .to('#scene3 .section-c .fingerprint .print-2-mask', 500, {
                    delay: -400,
                    height: '200px'
                })
                .to('#scene3 .section-c .fingerprint .print-3-mask', 500, {
                    delay: 0,
                    height: '200px'
                })
                .to('#scene3 .section-c .fingerprint .print-2-mask', 0, {
                    delay: 0,
                    top: 'auto',
                    bottom: 0
                })
                .to('#scene3 .section-c .fingerprint .print-3-mask', 0, {
                    delay: 0,
                    top: 'auto',
                    bottom: 0
                })
                .to('#scene3 .section-c .fingerprint .print-2', 0, {
                    bottom: 0,
                    top: 'auto'
                })
                .to('#scene3 .section-c .fingerprint .print-3', 0, {
                    bottom: 0,
                    top: 'auto'
                })
                .to('#scene3 .section-c .diamond-mask', 400, {
                    transform: "rotate(-45deg) translateY(480px)",
                    delay: -25,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene3 .section-c .fingerprint .print-2-mask', 100, {
                    delay: -350,
                    height: '0'
                })

            .to('#scene3 .section-c .fingerprint .print-3-mask', 100, {
                    delay: -350,
                    height: '0',
                })
                .to('#scene3 .section-c .draw-diamond', 1000, {
                    z: 1000,
                    delay: 150
                })
                .to('#scene3 .section-c .refugee', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .section-c .registration-info-wrapper', 1000, {
                    z: 1000,
                    delay: -1000
                })
                .to('#scene3 .tb-15__copy', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene3 .tb-15__copy_2', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene1 .bc-header.chapter-3', 100, {
                    opacity: 1,
                    delay: -1000
                })
                .set('#scene3', {
                    display: 'none'
                })
            window.blockchain.scene3 = new ScrollMagic.Scene({
                    triggerHook: 0,
                    duration: window.blockchain.scene3Timeline.duration(),
                    offset: window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.windowHeight
                })
                .on('enter', function(data) {
                    $('.nav-selector .chapter-label').text('03 BlockChain in Action');
                    spawnStars(100, window.blockchain.scene3Timeline, '3');

                    if (data.scrollDirection === 'FORWARD') {
                        toggleScene('2', 'remove');
                        toggleScene('4', 'add');
                    }
                    $('.side-nav .chapter3').addClass('active');
                })
                .on('leave', function(data) {
                    if (data.scrollDirection === 'REVERSE') {
                        toggleScene('2', 'add');
                        toggleScene('4', 'remove');
                    }
                    $('.side-nav .chapter3').removeClass('active');
                })
                .on('progress', _.throttle(function(data) {
                    trackSceneProgress('03 BlockChain in Action', data.progress);
                    trackNavProgress('chapter3', data.progress);
                }, window.blockchain.tickRate))
                .setTween(window.blockchain.scene3Timeline);
        }

        function buildScene4() {
            window.blockchain.scene4Timeline = new TimelineMax({
                useFrames: true,
                ease: Linear.easeNone
            });

            var ts1 = $('#scene4 .ts-1');
            var ts1__text = $('#scene4 .ts-1-text');
            var ts2 = $('#scene4 .ts-2');
            var ts2__text = $('#scene4 .ts-2-text');
            var ts3 = $('#scene4 .ts-3');
            var ts3__text = $('#scene4 .ts-3-text');
            var ts4 = $('#scene4 .ts-4');
            var ts4__text = $('#scene4 .ts-4-text');
            var ts5 = $('#scene4 .ts-5');
            var ts5__text = $('#scene4 .ts-5-text');
            var ts6 = $('#scene4 .ts-6');
            var ts6__text = $('#scene4 .ts-6-text');
            var ts7 = $('#scene4 .ts-7');
            var ts7__text = $('#scene4 .ts-7-text');
            var ts8 = $('#scene4 .ts-8');
            var ts8__text = $('#scene4 .ts-8-text');
            var ts9 = $('#scene4 .ts-9');
            var ts9__text = $('#scene4 .ts-9-text');
            var ts10 = $('#scene4 .ts-10');
            var ts10__text = $('#scene4 .ts-10-text');
            var ts11 = $('#scene4 .ts-11');
            var ts11__text = $('#scene4 .ts-11-text');
            var ts12 = $('#scene4 .ts-12');
            var ts12__text = $('#scene4 .ts-12-text');
            var ts13 = $('#scene4 .ts-13');
            var ts13__text = $('#scene4 .ts-13-text');
            var ts14 = $('#scene4 .ts-14');
            var ts14__text = $('#scene4 .ts-14-text');
            var ts15 = $('#scene4 .ts-15');
            var ts15__text = $('#scene4 .ts-15-text');
            var ts16 = $('#scene4 .ts-16');
            var ts16__text = $('#scene4 .ts-16-text');
            var ts17 = $('#scene4 .ts-17');
            var ts17__text = $('#scene4 .ts-17-text');
            var ts18 = $('#scene4 .ts-18');
            var ts18__text = $('#scene4 .ts-18-text');
            var ts19 = $('#scene4 .ts-19');
            var ts19__text = $('#scene4 .ts-19-text');
            var ts20 = $('#scene4 .ts-20');
            var ts20__text = $('#scene4 .ts-20-text');
            var ts21 = $('#scene4 .ts-21');
            var ts21__text = $('#scene4 .ts-21-text');
            var ts22 = $('#scene4 .ts-22');
            var ts22__text = $('#scene4 .ts-22-text');
            var ts23 = $('#scene4 .ts-23');
            var ts23__text = $('#scene4 .ts-23-text');
            var ts24 = $('#scene4 .ts-24');
            var ts24__text = $('#scene4 .ts-24-text');


            window.blockchain.scene4Timeline
            if (window.blockchain.isWebGL) {
                window.blockchain.scene4Timeline
                    .to('#animate4 *', 1, {
                        clearProps: 'all'
                    })
            } else {
                window.blockchain.scene4Timeline
                    .to('#animate4', 25, {
                        delay: 50,
                        onStart: function() {
                            spawnStars(100, window.blockchain.scene4Timeline, '4');
                        }
                    })
            }
            window.blockchain.scene4Timeline
                .set('#scene4', {
                    display: 'block'
                })
                .to('#scene4 .chapter-title', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene4 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: 0
                })
                .to('#scene4 .chapter-title .fly-ins', 500, {
                    transform: 'translateZ(0)',
                    delay: -100
                })
                .to('#scene4 .bc-header.chapter-4', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene4 .ctt-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .ctt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .ctt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .ctt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene4 .ctt-2', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene4 .ctt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene4 .chapter-title .fly-ins', 1000, {
                    transform: 'translateZ(1000px)',
                    delay: -1000
                })
                .to('#scene4 .chapter-title', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene4 .chapter-text', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene4 .ct-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .ct-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene4 .ct-1', 1000, {
                    delay: 500,
                    z: 1000
                })
                .to('#scene4 .chapter-text', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene4 .tb-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene4 .tb-1__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-1__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .tb-1__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-1__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })

            .set('#scene4 .timeline', {
                    display: 'block',
                })
                // .to('#scene4 .ts-text', 100, {
                //     opacity: 1,
                //     delay: 0
                // })
                // .to('#scene4 .time-segment', 100, {
                //     opacity: 1,
                //     delay: -100
                // })
                .to('.disclaimer', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('.timeline-slider .time-segment', 100, {
                    opacity: 1,
                    delay: -100
                })
                .to('.timeline-slider .ts-text', 100, {
                    opacity: 1,
                    delay: -100
                })
                .to(ts1, 1000, {
                    transform: 'translateZ(0) rotateY(90deg)',
                    delay: -100
                })
                .to(ts1__text, 1000, {
                    transform: 'translateZ(0)',
                    delay: -1000
                })
                .to(ts2, 1000, {
                    transform: 'translateZ(-800px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts2__text, 1000, {
                    transform: 'translateZ(-800px)',
                    delay: -1000
                })
                .to(ts3, 1000, {
                    transform: 'translateZ(-1600px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts3__text, 1000, {
                    transform: 'translateZ(-1600px)',
                    delay: -1000
                })
                .to(ts4, 1000, {
                    transform: 'translateZ(-2400px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts4__text, 1000, {
                    transform: 'translateZ(-2400px)',
                    delay: -1000
                })
                .to(ts14, 250, {
                    transform: 'translateZ(-3200px) rotateY(90deg)',
                    delay: -250
                })
                .to(ts14__text, 1000, {
                    transform: 'translateZ(-3200px)',
                    delay: -1000
                })
                .to(ts1__text, 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController(ts1__text, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to(ts1, 1000, {
                    transform: 'translateZ(800px) rotateY(90deg)',
                    delay: 500
                })
                .to(ts1__text, 1000, {
                    transform: 'translateZ(800px)',
                    delay: -1000
                })
                .to(ts2, 1000, {
                    transform: 'translateZ(0) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts2__text, 1000, {
                    transform: 'translateZ(0)',
                    delay: -1000
                })
                .to(ts3, 1000, {
                    transform: 'translateZ(-800px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts3__text, 1000, {
                    transform: 'translateZ(-800px)',
                    delay: -1000
                })
                .to(ts4, 1000, {
                    transform: 'translateZ(-1600px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts4__text, 1000, {
                    transform: 'translateZ(-1600px)',
                    delay: -1000
                })
                .to(ts14, 1000, {
                    transform: 'translateZ(-2400px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts14__text, 1000, {
                    transform: 'translateZ(-2400px)',
                    delay: -1000
                })
                .to(ts2__text, 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController(ts2__text, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to(ts1, 0, {
                    display: 'none',
                    delay: 500
                })
                .to(ts1__text, 0, {
                    display: 'none',
                    delay: 0
                })
                .to(ts2, 1000, {
                    transform: 'translateZ(800px) rotateY(90deg)',
                    delay: 0
                })
                .to(ts2__text, 1000, {
                    transform: 'translateZ(800px)',
                    delay: -1000
                })
                .to(ts3, 1000, {
                    transform: 'translateZ(0) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts3__text, 1000, {
                    transform: 'translateZ(0)',
                    delay: -1000
                })
                .to(ts4, 1000, {
                    transform: 'translateZ(-800px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts4__text, 1000, {
                    transform: 'translateZ(-800px)',
                    delay: -1000
                })
                .to(ts14, 1000, {
                    transform: 'translateZ(-1600px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts14__text, 1000, {
                    transform: 'translateZ(-1600px)',
                    delay: -1000
                })
                .to(ts3__text, 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController(ts3__text, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to(ts2, 0, {
                    display: 'none',
                    delay: 500
                })
                .to(ts2__text, 0, {
                    display: 'none',
                    delay: 0
                })
                .to(ts3, 1000, {
                    transform: 'translateZ(800px) rotateY(90deg)',
                    delay: 0
                })
                .to(ts3__text, 1000, {
                    transform: 'translateZ(800px)',
                    delay: -1000
                })
                .to(ts4, 1000, {
                    transform: 'translateZ(0) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts4__text, 1000, {
                    transform: 'translateZ(0)',
                    delay: -1000
                })
                .to(ts14, 1000, {
                    transform: 'translateZ(-800px) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts14__text, 1000, {
                    transform: 'translateZ(-800px)',
                    delay: -1000
                })
                .to(ts4__text, 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController(ts4__text, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to(ts3, 0, {
                    display: 'none',
                    delay: 50
                })
                .to(ts3__text, 0, {
                    display: 'none',
                    delay: 0
                })
                .to(ts14, 0, {
                    display: 'block',
                    delay: 0
                })
                .to(ts14__text, 0, {
                    display: 'block',
                    delay: 0
                })
                .to(ts4, 1000, {
                    transform: 'translateZ(800px) rotateY(90deg)',
                    delay: 0
                })
                .to(ts4__text, 1000, {
                    transform: 'translateZ(800px)',
                    delay: -1000
                })
                .to(ts14, 1000, {
                    transform: 'translateZ(0) rotateY(90deg)',
                    delay: -1000
                })
                .to(ts14__text, 1000, {
                    transform: 'translateZ(0)',
                    delay: -1000
                })
                .to(ts14__text, 1000, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController(ts14__text, e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to(ts14, 1000, {
                    transform: 'translateZ(800px) rotateY(90deg)',
                    delay: 400
                })
                .to(ts14__text, 1000, {
                    transform: 'translateZ(800px)',
                    delay: -1000
                })
                .to('#scene4 .tb-1__copy', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene4 .tb-1__title', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('.disclaimer', 100, {
                    opacity: 0,
                    delay: 0
                })
                .to('#scene4 .timeline', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene4 .receipts', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene4 .tb-2', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene4 .tb-2__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-2__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .tb-2__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-2__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .tb-2__copy-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-2__copy-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                })
                .to('#scene4 .receipts .cube-wrapper', 100, {
                    opacity: 1,
                    delay: 50
                })
                .to('#scene4 .receipts .c1', 2000, {
                    delay: -100,
                    transform: 'translateZ(3700px)'
                })
                .to('#scene4 .receipts .c2', 2000, {
                    delay: -2000,
                    transform: 'translateZ(3300px)'
                })
                .to('#scene4 .receipts .c3', 2000, {
                    delay: -2000,
                    transform: 'translateZ(2900px)'
                })
                .to('#scene4 .receipts .c4', 2000, {
                    delay: -2000,
                    transform: 'translateZ(2500px)'
                })
                .to('#scene4 .receipts .c5', 2000, {
                    delay: -2000,
                    transform: 'translateZ(2100px)'
                })
                .to('#scene4 .receipts .c6', 2000, {
                    delay: -2000,
                    transform: 'translateZ(1700px)'
                })
                .to('#scene4 .receipts .c7', 2000, {
                    delay: -2000,
                    transform: 'translateZ(1300px)'
                })
                .to('#scene4 .receipts .c8', 2000, {
                    delay: -2000,
                    transform: 'translateZ(900px)'
                })
                .to('#scene4 .receipts .c9', 2000, {
                    delay: -2000,
                    transform: 'translateZ(500px)'
                })
                .to('#scene4 .receipts .bc-label', 200, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene4 .receipts .rc-label', 200, {
                    opacity: 1,
                    delay: -200
                })
                .to('#scene4 .receipts .receipt-slider .receipt', 200, {
                    delay: -200,
                    opacity: 1
                })

            .to('#scene4 .receipts .r1', 8000, {
                    delay: -400,
                    transform: 'translateZ(14200px)'
                })
                .to('#scene4 .receipts .r2', 8000, {
                    delay: -8000,
                    transform: 'translateZ(13800px)'
                })
                .to('#scene4 .receipts .r3', 8000, {
                    delay: -8000,
                    transform: 'translateZ(13400px)'
                })
                .to('#scene4 .receipts .r4', 8000, {
                    delay: -8000,
                    transform: 'translateZ(13000px)'
                })
                .to('#scene4 .receipts .r5', 8000, {
                    delay: -8000,
                    transform: 'translateZ(12600px)'
                })
                .to('#scene4 .receipts .r6', 8000, {
                    delay: -8000,
                    transform: 'translateZ(12200px)'
                })
                .to('#scene4 .receipts .r7', 8000, {
                    delay: -8000,
                    transform: 'translateZ(11800px)'
                })
                .to('#scene4 .receipts .r8', 8000, {
                    delay: -8000,
                    transform: 'translateZ(11400px)'
                })
                .to('#scene4 .receipts .r9', 8000, {
                    delay: -8000,
                    transform: 'translateZ(11000px)'
                })
                .to('#scene4 .receipts .r10', 8000, {
                    delay: -8000,
                    transform: 'translateZ(10600px)'
                })
                .to('#scene4 .receipts .r11', 8000, {
                    delay: -8000,
                    transform: 'translateZ(10200px)'
                })
                .to('#scene4 .receipts .r12', 8000, {
                    delay: -8000,
                    transform: 'translateZ(9800px)'
                })
                .to('#scene4 .receipts .r13', 8000, {
                    delay: -8000,
                    transform: 'translateZ(9400px)'
                })
                .to('#scene4 .receipts .r14', 8000, {
                    delay: -8000,
                    transform: 'translateZ(9000px)'
                })
                .to('#scene4 .receipts .r15', 8000, {
                    delay: -8000,
                    transform: 'translateZ(8600px)'
                })
                .to('#scene4 .receipts .r16', 8000, {
                    delay: -8000,
                    transform: 'translateZ(8200px)'
                })
                .to('#scene4 .receipts .r17', 8000, {
                    delay: -8000,
                    transform: 'translateZ(7800px)'
                })
                .to('#scene4 .receipts .r18', 8000, {
                    delay: -8000,
                    transform: 'translateZ(7400px)'
                })
                .to('#scene4 .receipts .r19', 8000, {
                    delay: -8000,
                    transform: 'translateZ(7000px)'
                })
                .to('#scene4 .receipts .r20', 8000, {
                    delay: -8000,
                    transform: 'translateZ(6600px)'
                })
                .to('#scene4 .receipts .r21', 8000, {
                    delay: -8000,
                    transform: 'translateZ(6200px)'
                })
                .to('#scene4 .receipts .r22', 8000, {
                    delay: -8000,
                    transform: 'translateZ(5800px)'
                })
                .to('#scene4 .receipts .r23', 8000, {
                    delay: -8000,
                    transform: 'translateZ(5400px)'
                })
                .to('#scene4 .receipts .r24', 8000, {
                    delay: -8000,
                    transform: 'translateZ(5000px)'
                })
                .to('#scene4 .receipts .r25', 8000, {
                    delay: -8000,
                    transform: 'translateZ(4600px)'
                })
                .to('#scene4 .receipts .r26', 8000, {
                    delay: -8000,
                    transform: 'translateZ(4200px)'
                })
                .to('#scene4 .receipts .r27', 8000, {
                    delay: -8000,
                    transform: 'translateZ(3800px)'
                })
                .to('#scene4 .receipts .r28', 8000, {
                    delay: -8000,
                    transform: 'translateZ(3400px)'
                })
                .to('#scene4 .receipts .r29', 8000, {
                    delay: -8000,
                    transform: 'translateZ(3000px)'
                })
                .to('#scene4 .receipts .r30', 8000, {
                    delay: -8000,
                    transform: 'translateZ(2600px)'
                })

            .to('#scene4 .receipts .diamond-transaction-wrapper .d1', 0, {
                    display: 'block',
                    delay: -8000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d1 div', 500, {
                    delay: -8000,
                    borderColor: "rgb(255,255,255)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d1 span', 500, {
                    delay: -8000,
                    color: "rgb(255,255,255)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d1', 500, {
                    delay: -8000,
                    z: -1200
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d2', 0, {
                    display: 'block',
                    delay: -7800
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d2 div', 500, {
                    delay: -7800,
                    borderColor: "rgb(215,215,215)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d2 span', 500, {
                    delay: -7800,
                    color: "rgb(215,215,215)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d2', 500, {
                    delay: -7800,
                    z: -1400
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d3', 0, {
                    display: 'block',
                    delay: -7600
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d3 div', 500, {
                    delay: -7600,
                    borderColor: "rgb(175,175,175)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d3 span', 500, {
                    delay: -7600,
                    color: "rgb(175,175,175)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d3', 500, {
                    delay: -7600,
                    z: -1600
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d4', 0, {
                    display: 'block',
                    delay: -7400
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d4 div', 500, {
                    delay: -7400,
                    borderColor: "rgb(135,135,135)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d4 span', 500, {
                    delay: -7400,
                    color: "rgb(135,135,135)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d4', 500, {
                    delay: -7400,
                    z: -1800
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d5', 0, {
                    display: 'block',
                    delay: -7200
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d5 div', 500, {
                    delay: -7200,
                    borderColor: "rgb(95,95,95)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d5 span', 500, {
                    delay: -7200,
                    color: "rgb(95,95,95)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d5', 500, {
                    delay: -7200,
                    z: -2000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d6', 0, {
                    display: 'block',
                    delay: -7000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d6 div', 500, {
                    delay: -7000,
                    borderColor: "rgb(55,55,55)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d6 span', 500, {
                    delay: -7000,
                    color: "rgb(55,55,55)"
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d6', 500, {
                    delay: -7000,
                    z: -2200
                })
                .to('#scene4 .receipts .draw-cube .bottom-bar', 500, {
                    delay: -6800,
                    width: '100%'
                })
                .to('#scene4 .receipts .draw-cube .left-bar', 500, {
                    delay: -6300,
                    height: '100%'
                })
                .to('#scene4 .receipts .draw-cube .top-bar', 500, {
                    delay: -5800,
                    width: '100%'
                })
                .to('#scene4 .receipts .draw-cube .right-bar', 500, {
                    delay: -5300,
                    height: '100%'
                })
                .to('#scene4 .receipts .draw-cube .back', 0, {
                    delay: -4800,
                    display: 'block'
                })
                .to('#scene4 .receipts .draw-cube .back', 500, {
                    delay: -4800,
                    z: -1000
                })
                .to('#scene4 .receipts .draw-cube .left', 500, {
                    delay: -4050,
                    opacity: 1
                })
                .to('#scene4 .receipts .draw-cube .right', 500, {
                    delay: -4050,
                    opacity: 1,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene4 .receipts .bc-label', 200, {
                    opacity: 0,
                    delay: -2500
                })
                .to('#scene4 .receipts .rc-label', 200, {
                    opacity: 0,
                    delay: -2500
                })
                .to('#scene4 .receipts .c8', 1000, {
                    delay: -2500,
                    transform: 'translateZ(3300px)'
                })
                .to('#scene4 .receipts .c9', 1000, {
                    delay: -2500,
                    transform: 'translateZ(2900px)'
                })
                .to('#scene4 .receipts .draw-cube', 1000, {
                    delay: -2500,
                    z: 2900
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d1', 1000, {
                    delay: -2500,
                    z: 2000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d2', 1000, {
                    delay: -2500,
                    z: 2000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d3', 1000, {
                    delay: -2500,
                    z: 2000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d4', 1000, {
                    delay: -2500,
                    z: 2000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d5', 1000, {
                    delay: -2500,
                    z: 2000
                })
                .to('#scene4 .receipts .diamond-transaction-wrapper .d6', 1000, {
                    delay: -2500,
                    z: 2000
                })
                .to('#scene4 .receipts .tb-2', 1000, {
                    z: 1000,
                    delay: -2500
                })
                .to('#scene4 .receipts', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene4 .boundaries', 0, {
                    delay: -800,
                    display: 'block'
                })
                .to('#scene4 .tb-3', 0, {
                    delay: -800,
                    display: 'block'
                })
                .to('#scene4 .tb-3__title', 400, {
                    delay: -800,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-3__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .tb-3__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-3__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .boundaries .chain1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene4 .boundaries .chain1 .cube-wrapper', 200, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene4 .boundaries .chain1 .c1', 1500, {
                    delay: -200,
                    transform: 'translateZ(7600px)',
                })
                .to('#scene4 .boundaries .chain1 .c2', 1500, {
                    delay: -1500,
                    transform: 'translateZ(7200px)'
                })
                .to('#scene4 .boundaries .chain1 .c3', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6800px)'
                })
                .to('#scene4 .boundaries .chain1 .c4', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6400px)'
                })
                .to('#scene4 .boundaries .chain1 .c5', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6000px)'
                })
                .to('#scene4 .boundaries .chain1 .c6', 1500, {
                    delay: -1500,
                    transform: 'translateZ(5600px)'
                })
                .to('#scene4 .boundaries .chain1 .c7', 1500, {
                    delay: -1500,
                    transform: 'translateZ(5200px)'
                })
                .to('#scene4 .boundaries .chain1 .c8', 1500, {
                    delay: -1500,
                    transform: 'translateZ(4800px)'
                })
                .to('#scene4 .boundaries .chain1 .c9', 1500, {
                    delay: -1500,
                    transform: 'translateZ(4400px)',
                })
                .to('#scene4 .boundaries .chain2', 0, {
                    delay: -800,
                    display: 'block'
                })
                .to('#scene4 .boundaries .chain2 .cube-wrapper', 200, {
                    delay: -800,
                    opacity: 1
                })
                .to('#scene4 .boundaries .chain2 .c1', 1500, {
                    delay: -800,
                    transform: 'translateZ(7600px)'
                })
                .to('#scene4 .boundaries .chain2 .c2', 1500, {
                    delay: -1500,
                    transform: 'translateZ(7200px)'
                })
                .to('#scene4 .boundaries .chain2 .c3', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6800px)'
                })
                .to('#scene4 .boundaries .chain2 .c4', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6400px)'
                })
                .to('#scene4 .boundaries .chain2 .c5', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6000px)'
                })
                .to('#scene4 .boundaries .chain2 .c6', 1500, {
                    delay: -1500,
                    transform: 'translateZ(5600px)'
                })
                .to('#scene4 .boundaries .chain2 .c7', 1500, {
                    delay: -1500,
                    transform: 'translateZ(5200px)'
                })
                .to('#scene4 .boundaries .chain2 .c8', 1500, {
                    delay: -1500,
                    transform: 'translateZ(4800px)'
                })
                .to('#scene4 .boundaries .chain2 .c9', 1500, {
                    delay: -1500,
                    transform: 'translateZ(4400px)',

                })
                .to('#scene4 .boundaries .chain1', 0, {
                    delay: -800,
                    display: 'none'
                })
                .to('#scene4 .boundaries .chain1_2', 0, {
                    delay: -800,
                    display: 'block'
                })
                .to('#scene4 .boundaries .chain1_2 .cube-wrapper', 200, {
                    delay: -800,
                    opacity: 1
                })
                .to('#scene4 .boundaries .chain1_2 .c1', 1500, {
                    delay: -800,
                    transform: 'translateZ(7600px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c2', 1500, {
                    delay: -1500,
                    transform: 'translateZ(7200px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c3', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6800px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c4', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6400px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c5', 1500, {
                    delay: -1500,
                    transform: 'translateZ(6000px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c6', 1500, {
                    delay: -1500,
                    transform: 'translateZ(5600px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c7', 1500, {
                    delay: -1500,
                    transform: 'translateZ(5200px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c8', 1500, {
                    delay: -1500,
                    transform: 'translateZ(4800px)'
                })
                .to('#scene4 .boundaries .chain1_2 .c9', 1500, {
                    delay: -1500,
                    transform: 'translateZ(4400px)',
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene4 .boundaries .chain2', 0, {
                    delay: -800,
                    display: 'none'
                })
                .to('#scene4 .boundaries .chain2_2', 0, {
                    delay: -800,
                    display: 'block',
                })
                .to('#scene4 .boundaries .chain2_2 .cube-wrapper', 200, {
                    delay: -800,
                    opacity: 1
                })
                .to('#scene4 .boundaries .chain2_2 .c1', 2000, {
                    delay: -800,
                    transform: 'translateZ(7600px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c2', 2000, {
                    delay: -2000,
                    transform: 'translateZ(7200px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c3', 2000, {
                    delay: -2000,
                    transform: 'translateZ(6800px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c4', 2000, {
                    delay: -2000,
                    transform: 'translateZ(6400px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c5', 2000, {
                    delay: -2000,
                    transform: 'translateZ(6000px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c6', 2000, {
                    delay: -2000,
                    transform: 'translateZ(5600px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c7', 2000, {
                    delay: -2000,
                    transform: 'translateZ(5200px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c8', 2000, {
                    delay: -2000,
                    transform: 'translateZ(4800px)'
                })
                .to('#scene4 .boundaries .chain2_2 .c9', 2000, {
                    delay: -2000,
                    transform: 'translateZ(4400px)'
                })
                .to('#scene4 .tb-3', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene4 .boundaries', 0, {
                    delay: 0,
                    display: 'none'
                })
                .to('#scene4 .new-tech', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene4 .tb-4', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene4 .tb-4__title', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-4__title', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .tb-4__copy', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene4 .tb-4__copy', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .cw-3 .cube', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene4 .new-tech .cw-3 .cube', 1000, {
                    delay: -100,
                    z: 0
                })

            .to('#scene4 .encryption-cover .er-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '234px',
                    delay: 0
                })
                .to('#scene4 .encryption-cover .er-1', 100, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .top-bar', 400, {
                    delay: -420,
                    width: 0
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '234px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-2', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '218px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-2', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-2', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '218px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-3', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '202px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-3', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-3', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-3', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '202px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-4', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '186px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-4', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-4', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-4', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '186px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-5', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '170px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-5', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-5', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-5', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-5', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '170px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-6', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '154px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-6', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-6', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-6', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-6', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '154px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-7', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '138px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-7', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-7', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-7', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-7', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '138px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-8', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '122px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-8', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-8', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-8', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-8', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '122px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-9', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '106px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-9', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-9', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-9', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-9', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '106px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-10', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '90px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-10', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-10', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-10', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-10', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '90px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-11', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '74px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-11', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-11', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-11', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-11', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '74px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-12', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '58px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-12', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-12', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-12', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-12', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '58px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-13', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '42px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-13', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-13', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-13', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-13', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '42px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-14', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '26px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-14', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-14', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-14', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-14', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '26px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-15', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '10px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-15', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-15', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-15', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-15', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '10px',
                    delay: -40
                })
                .to('#scene4 .encryption-cover .er-16', 0, {
                    delay: -300,
                    display: 'block'
                })
                .to('#scene4 .new-tech .left-bar', 0, {
                    height: '0px',
                    delay: -300
                })
                .to('#scene4 .encryption-cover .er-16', 100, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        preEncryptLine('.new-tech .encryption-cover', '.er-16', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .encryption-cover .er-16', 400, {
                    delay: -300,
                    onUpdate: _.throttle(function(e) {
                        encryptLine('.new-tech .encryption-cover', '.er-16', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene4 .new-tech .bottom-bar', 400, {
                    delay: -420,
                    width: 0
                })
                .to('#scene4 .new-tech .right-bar', 0, {
                    height: '0px',
                    delay: -40
                })
                .to('#scene4 .new-tech .encryption-cover-duplicate', 0, {
                    display: 'block'
                })
                .to('#scene4 .new-tech .cw-3 .block-num', 100, {
                    color: "rgb(0,0,0)",
                    delay: 0
                })
                .to('#scene4 .new-tech .ecd-2', 100, {
                    z: -60,
                    delay: 0
                })
                .to('#scene4 .new-tech .ecd-4', 100, {
                    z: -60,
                    delay: -100
                })
                .to('#scene4 .new-tech .ecd-6', 100, {
                    z: -60,
                    delay: -100
                })
                .to('#scene4 .new-tech .ecd-4', 100, {
                    z: -120,
                    delay: -100
                })
                .to('#scene4 .new-tech .ecd-6', 100, {
                    z: -120,
                    delay: -100
                })
                .to('#scene4 .new-tech .ecd-6', 100, {
                    z: -180,
                    delay: -100
                })
                .to('#scene4 .new-tech .cw-3 .back', 100, {
                    opacity: 0,
                    delay: -100
                })
                .to('#scene4 .new-tech .cw-3 .left', 100, {
                    opacity: 0,
                    delay: -100
                })
                .to('#scene4 .new-tech .cw-3 .right', 100, {
                    opacity: 0,
                    delay: -100
                })
                .to('#scene4 .new-tech .encryption-cover .to-hide', 0, {
                    delay: 0,
                    opacity: 0
                })
                // .to('#scene4 .new-tech .iecd-1 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .to('#scene4 .new-tech .ecd-2 .to-hide', 0, {
                    delay: 50,
                    opacity: 0
                })
                // .to('#scene4 .new-tech .iecd-3 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .to('#scene4 .new-tech .ecd-4 .to-hide', 0, {
                    delay: 50,
                    opacity: 0
                })
                // .to('#scene4 .new-tech .iecd-5 .to-hide', 0, {
                //     delay: 0,
                //     opacity: 0
                // })
                .to('#scene4 .new-tech .ecd-6 .to-hide', 0, {
                    delay: 50,
                    opacity: 0,
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene4 .new-tech .cw-3', 1000, {
                    delay: 50,
                    z: 1500
                })
                .to('#scene4 .tb-4', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene1 .bc-header.chapter-4', 100, {
                    opacity: 1,
                    delay: -1000
                })
                .set('#scene4', {
                    display: 'none'
                })
            window.blockchain.scene4 = new ScrollMagic.Scene({
                    triggerHook: 0,
                    duration: window.blockchain.scene4Timeline.duration(),
                    offset: window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.windowHeight
                })
                .on('enter', function(data) {
                    $('.nav-selector .chapter-label').text('04 Beyond the First Steps');
                    spawnStars(100, window.blockchain.scene4Timeline, '4');
                    if (data.scrollDirection === 'FORWARD') {
                        toggleScene('5', 'add');
                        toggleScene('3', 'remove');
                    }
                    $('.side-nav .chapter4').addClass('active');
                })
                .on('leave', function(data) {
                    if (data.scrollDirection === 'REVERSE') {
                        toggleScene('3', 'add');
                        toggleScene('5', 'remove');
                    }
                    $('.side-nav .chapter4').removeClass('active');
                })
                .on('progress', _.throttle(function(data) {
                    trackSceneProgress('04 Beyond the First Steps', data.progress);
                    trackNavProgress('chapter4', data.progress);
                }, window.blockchain.tickRate))
                .setTween(window.blockchain.scene4Timeline)
        }

        function buildScene5() {

            window.blockchain.scene5Timeline = new TimelineMax({
                useFrames: true,
                ease: Linear.easeNone
            });
            window.blockchain.scene5Timeline
            if (window.blockchain.isWebGL) {
                window.blockchain.scene5Timeline
                    .to('#animate5 *', 1, {
                        clearProps: 'all'
                    })
            } else {
                window.blockchain.scene5Timeline
                    .to('#animate5', 25, {
                        delay: 50,
                        onStart: function() {
                            spawnStars(100, window.blockchain.scene5Timeline, '5');
                        }
                    })
            }
            window.blockchain.scene5Timeline
                .set('#scene5', {
                    display: 'block'
                })
                .to('#scene5 .chapter-title', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene5 .takeaway', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene5 .chapter-title h3', 100, {
                    color: '#FFFFFF',
                    delay: 0
                })
                .to('#scene5 .chapter-title .fly-ins', 500, {
                    transform: 'translateZ(0)',
                    delay: -100
                })
                .to('#scene5 .bc-header.chapter-5', 100, {
                    opacity: 1,
                    delay: 0
                })
                .to('#scene5 .ctt-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene5 .ctt-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene5 .ctt-2', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene5 .ctt-2', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene5 .ctt-2', 1000, {
                    delay: 500,
                    z: 2000
                })
                .to('#scene5 .ctt-1', 1000, {
                    delay: -1000,
                    z: 1000
                })
                .to('#scene5 .chapter-title .fly-ins', 1000, {
                    transform: 'translateZ(1000px)',
                    delay: -1000
                })
                .to('#scene5 .ct-1', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('#scene5 .ct-1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene5 .ct-1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"],
                    onComplete: function() {
                        window.blockchain.scrollerTimeline.pause();
                    }
                })
                .to('#scene5 .ct-1', 1000, {
                    display: 'block',
                    z: 1000,
                    delay: 400
                })
                .to('#scene5 .chapter-title', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('#scene5 .takeaway .fade-in', 100, {
                    delay: 0,
                    opacity: 1
                })
                .to('#scene5 .takeaway .c1', 2000, {
                    delay: -100,
                    transform: 'translateZ(5200px)'
                })
                .to('#scene5 .takeaway .c2', 2000, {
                    delay: -2000,
                    transform: 'translateZ(4800px)'
                })
                .to('#scene5 .takeaway .c3', 2000, {
                    delay: -2000,
                    transform: 'translateZ(4400px)'
                })
                .to('#scene5 .takeaway .c4', 2000, {
                    delay: -2000,
                    transform: 'translateZ(4000px)'
                })
                .to('#scene5 .takeaway .c5', 2000, {
                    delay: -2000,
                    transform: 'translateZ(3600px)'
                })
                .to('#scene5 .takeaway .c6', 2000, {
                    delay: -2000,
                    transform: 'translateZ(3200px)'
                })
                .to('#scene5 .takeaway .c7', 2000, {
                    delay: -2000,
                    transform: 'translateZ(2800px)'
                })
                .to('#scene5 .takeaway .c8', 2000, {
                    delay: -2000,
                    transform: 'translateZ(2400px)'
                })
                .to('#scene5 .takeaway .c9', 2000, {
                    delay: -2000,
                    transform: 'translateZ(2000px)'
                })
                .to('#scene5 .outro__lockup img', 2000, {
                    delay: -2000,
                    transform: "translateZ(0)"
                })
                .to('#scene5 .outro__lockup img', 100, {
                    delay: -750,
                    opacity: 1
                })
                .to('.share-label', 0, {
                    display: 'block',
                    delay: 0
                })
                .to('.footer__links .share', 0, {
                    display: 'none',
                    delay: 0
                })
                .to('.footer__share-container', 0, {
                    left: '50%',
                    bottom: 0,
                    delay: 0
                })
                .to('#scene5 .tb-1__1', 0, {
                    delay: 0,
                    onUpdate: function(e) {
                        finishExperience(false);
                    },
                })
                .to('#scene5 .tb-1__1', 0, {
                    display: 'block',
                    delay: 0,
                    onUpdate: function(e) {
                        finishExperience(true);
                    },
                })
                .to('#scene5 .tb-1', 0, {
                    delay: 0,
                    display: 'block'
                })
                .to('#scene5 .tb-1__1', 400, {
                    delay: 0,
                    onUpdate: _.throttle(function(e) {
                        printTextController('#scene5 .tb-1__1', e.time(), e.totalDuration());
                    }, window.blockchain.tickRate),
                    onUpdateParams: ["{self}"]
                })
                .to('#scene5 .tb-1__2', 500, {
                    delay: 0,
                    opacity: 0.5
                })
                .to('#scene5', 500, {
                    delay: 0,
                })

            window.blockchain.scene5 = new ScrollMagic.Scene({
                    triggerHook: 0,
                    duration: window.blockchain.scene5Timeline.duration(),
                    offset: window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.scene4Timeline.duration() + window.blockchain.windowHeight
                })
                .on('enter', function(data) {
                    $('.nav-selector .chapter-label').text('05 The Takeaway');
                    spawnStars(100, window.blockchain.scene5Timeline, '5');

                    if (data.scrollDirection === 'FORWARD') {
                        toggleScene('3', 'remove');
                    }
                    $('.side-nav .chapter5').addClass('active');
                })
                .on('leave', function(data) {
                    if (data.scrollDirection === 'REVERSE') {
                        toggleScene('3', 'add');
                    }
                    $('.side-nav .chapter5').removeClass('active');
                })
                .on('progress', _.throttle(function(data) {
                    trackSceneProgress('05 The Takeaway', data.progress);
                    trackNavProgress('chapter5', data.progress);
                }, window.blockchain.tickRate))
                .setTween(window.blockchain.scene5Timeline)
        }

        function buildNav() {
            $('.side-nav a').on('click', function(e) {
                // window.blockchain.letSceneToggle = true;
                // console.log('-- SCENE REMOVAL UNLOCKED --');
                e.preventDefault();
                var scenes = [1, 2, 3, 4, 5];
                var chapter = $(this).data('chapter') - 1;
                var chapterNum = chapter + 1;
                // scenes.forEach(function(value) {
                //   if (value != 1) {
                //     toggleScene(value, 'remove');
                //   }
                // });
                // window.blockchain.letSceneToggle = false;
                // console.log('-- SCENE REMOVAL LOCKED --');
                var scrollPoint = window.blockchain.windowHeight;
                var x = 0;
                if (chapter === 0) {
                    scrollPoint = window.blockchain.windowHeight;
                } else {
                    while (x < chapter) {
                        scrollPoint += window.blockchain.scenes[x];
                        x++;
                    }
                }
                scrollPoint += 1500;
                var preScrollPoint = scrollPoint - 1500;
                if (!window.blockchain.isWebGL) {
                    preScrollPoint = preScrollPoint - 200;
                }
                window.scroll(0, preScrollPoint);
                window.setTimeout(function() {
                        // var actualChapter = chapter + 1;
                        // scenes.forEach(function(value) {
                        //   if (value == actualChapter - 1 || value == actualChapter || value == actualChapter + 1 ) {
                        //     // window.blockchain.letSceneToggle = true;
                        //     // console.log('-- SCENE REMOVAL UNLOCKED --');
                        //     // toggleScene(value, 'add')
                        //     // window.blockchain.letSceneToggle = false;
                        //     // console.log('-- SCENE REMOVAL LOCKED --');
                        //   }
                        // });
                        $('body, html').animate({
                                scrollTop: [scrollPoint, 'linear']
                            }, 2000)
                            // window.blockchain.letSceneToggle = true;
                            // console.log('-- SCENE REMOVAL UNLOCKED --');
                        spawnStars(100, window.blockchain['scene' + chapterNum + 'Timeline'], chapterNum);

                    }, 1000)
                    //console.log('scroll-point : ' + scrollPoint);
                    //window.scroll(0, scrollPoint);
                if (window.blockChainAnalyticsEmitter && document.querySelector('[id*="scene"][style*="block"]')) {
                    window.blockChainAnalyticsEmitter.emit('navigation_menu', { to: ('scene' + chapterNum), from: document.querySelector('[id*="scene"][style*="block"]')['id'] });
                }

            });
        }

        function toggleScene(sceneNum, method) {
            //if (window.blockchain.letSceneToggle === true) {
            if (method === 'remove') {
                if ($('#animate' + sceneNum).length > 0) {
                    window.blockchain['scene' + sceneNum + 'markup'] = $('#animate' + sceneNum).detach();
                    window.blockchain.blockchainController.removeScene(window.blockchain['scene' + sceneNum]);
                    //$('#scene'+sceneNum).css('display', 'none');
                }
                if (window.blockChainAnalyticsEmitter) {
                    window.blockChainAnalyticsEmitter.emit('toggle_scene_remove', { scene: sceneNum });
                }
            } else {
                if ($('#animate' + sceneNum).length <= 0) {
                    $('#scene' + sceneNum).append(window.blockchain['scene' + sceneNum + 'markup']);
                    window.blockchain.blockchainController.addScene(window.blockchain['scene' + sceneNum]);
                    //$('#scene'+sceneNum).css('display', 'block');
                }
                if (window.blockChainAnalyticsEmitter) {
                    window.blockChainAnalyticsEmitter.emit('toggle_scene_add', { scene: sceneNum });
                }
            }
            //}
        }

        function typeFormFields(parentWrapper, field, progress, length) {
            var percent = progress / length
            var allFields = $(parentWrapper + '__category');
            allFields.each(function(index) {
                if (index < field) {
                    $(this).find('.content').each(function() {
                            $(this).html($(this).data('text'));
                        })
                        // console.log('print '+ index + ' full');
                } else if (index > field) {
                    $(this).find('.content').html('');
                    // console.log('print '+ index + ' blank');
                }
            });
            $(parentWrapper + ' .cat-' + field + ' .content').each(function() {
                var textToEnter = $(this).data('text') + '';
                var textLength = textToEnter.length;
                var currentSpot = Math.round(textLength * percent);
                $(this).html(textToEnter.substring(0, currentSpot));
            });
        }

        function printTextController(container, progress, length, direction, definition) {
            if (typeof container !== 'object') {
                var $container = $(container);
            } else {
                var $container = container;
            }

            if (direction === 'reverse') {
                //Flip directions
                progress = length - progress;
            }
            if (progress <= 0) {
                printText($container, 0);
            } else if (progress > 0 && progress < length) {
                var percent = progress / length
                printText($container, percent);
                if (definition !== undefined) {
                    killDefinition(container, definition)
                }
            } else if (progress >= length) {
                printText($container, 1);
                if (definition !== undefined) {
                    makeDefinition(container, definition)
                }
            }
        }

        function printText(container, percentageComplete) {
            var content = container.find('.type-ins-holder');
            var arContent = content.html().split('');
            var currentSpot = Math.round(arContent.length * percentageComplete);
            container.find('.type-ins').html(content.html().substring(0, currentSpot));
        }

        function makeDefinition(container, phrase) {
            var spacelessPhrase = phrase.replace(' ', '');
            $(container + " .type-ins:contains(" + phrase + ")").html(function(_, html) {
                return html.split(phrase).join("<span class='definition' data-word='" + spacelessPhrase + "'>" + phrase + "</span>");
            });
        }

        function killDefinition(container, phrase) {
            $(container + ":contains(" + phrase + ")").html(function(_, html) {
                return html.split(phrase).join(phrase);
            });
        }

        function typeTextAndTitle(containerClass, progress, length, direction) {
            var textContainer = $('.' + containerClass);
            //console.log(progress);
            if (direction === 'reverse') {
                //Flip directions
                progress = 500 - progress;
            }
            if (progress <= 0) {
                printTextTo(textContainer, 'h1', 0);
                printTextTo(textContainer, 'p', 0);
            } else if (progress > 0 && progress <= 100) {
                var percent = (progress) / 100
                printTextTo(textContainer, 'h1', percent);
                printTextTo(textContainer, 'p', 0);
                //console.log(percent);
            } else if (progress > 100 && progress <= 500) {
                var percent = (progress - 100) / 400
                printTextTo(textContainer, 'h1', 1);
                printTextTo(textContainer, 'p', percent);
                //console.log(percent);
            } else if (progress > 500) {
                printTextTo(textContainer, 'h1', 1);
                printTextTo(textContainer, 'p', 1);
            }
        }

        function typeText(containerClass, progress, length, direction) {
            var textContainer = $('.' + containerClass);
            //console.log(progress);
            if (direction === 'reverse') {
                //Flip directions
                progress = 400 - progress;
            }
            if (progress <= 0) {
                printTextTo(textContainer, 'p', 0);
            } else if (progress > 0 && progress <= 400) {
                var percent = progress / 400
                printTextTo(textContainer, 'p', percent);
            } else if (progress > 400) {
                printTextTo(textContainer, 'p', 1);
            }
        }

        function typeTickerText(containerClass, progress, length, target, direction) {
            var textContainer = $('.' + containerClass);
            //console.log(progress);
            if (direction === 'reverse') {
                //Flip directions
                progress = 200 - progress;
            }
            if (progress <= 0) {
                printTickerTextTo(textContainer, 0, target);
            } else if (progress > 0 && progress <= 200) {
                var percent = progress / 200
                printTickerTextTo(textContainer, percent, target);
            } else if (progress > 200) {
                printTickerTextTo(textContainer, 1, target);
            }
        }

        function typeWrappedText(containerClass, progress, length) {
            var textContainer = $('.' + containerClass);
            //console.log(progress);
            if (progress <= 0) {
                printWrappedText(textContainer, 0);
            } else if (progress > 0 && progress <= 400) {
                var percent = progress / 400
                printWrappedText(textContainer, percent);
            } else if (progress > 400) {
                printWrappedText(textContainer, 1);
            }
        }

        function showRandomText(containerClass, progress, length) {
            var nodes = $('.' + containerClass + ' .char');
            var percentageComplete = progress / length;
            var nodeToShow = Math.round(percentageComplete * nodes.length);
            nodes.each(function(index) {
                if (index <= nodeToShow) {
                    $(this).css('display', 'inline');
                } else {
                    $(this).css('display', 'none');
                }
                $(this).html(getRandomLetter());
            });
        }

        function preShowRandomText(containerClass) {
            var nodes = $('.address .char');
            nodes.css('display', 'none');
            window.blockchain.printInterval = window.setInterval(function() {
                nodes.each(function() {
                    $(this).text(getRandomLetter());
                })
            }, 100)
        }

        function printTextTo(container, percentageComplete, target) {
            var title = container.find('h1.type-ins-holder');
            var text = container.find('p.type-ins-holder');
            if (target == 'p') {
                var arText = text.html().split('');
                var currentSpot = Math.round(arText.length * percentageComplete);
                container.find('p.type-ins').html(text.html().substring(0, currentSpot));
            } else {
                var arTitle = title.html().split('');
                var currentSpot = Math.round(arTitle.length * percentageComplete);
                container.find('type-ins').html(title.html().substring(0, currentSpot));
            }
        }

        function printTickerTextTo(container, percentageComplete, target) {
            var text = container.find('.h-' + target);
            var arText = text.html().split('');
            var currentSpot = Math.round(arText.length * percentageComplete);
            container.find('.amount').html(text.html().substring(0, currentSpot));
        }

        function printWrappedText(container, percentageComplete) {
            var text = container.find('p.type-ins-holder');
            var arText = text.html().split('');
            var currentSpot = Math.round(arText.length * percentageComplete);
            container.find('.type-ins').html(text.html().substring(0, currentSpot));
        }

        function encrypt(progress, length, direction) {
            var percentageComplete = progress / length;
            var container = $('.address .encryption-cover');
            var rows = $('.encrypt-row').length;
            var cols = $('.row-1 .bit').length;
            if (direction === 'reverse') {
                percentageComplete = 1 - percentageComplete;
                var useFades = true;
            }
            percentageComplete = (progress - 50) / (length - 50);
            spawnEncryptionCubes('.address', '.row-1', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-2', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-3', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 100) / (length - 100);
            spawnEncryptionCubes('.address', '.row-4', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-5', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-6', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress) / (length);
            spawnEncryptionCubes('.address', '.row-7', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 200) / (length - 200);
            spawnEncryptionCubes('.address', '.row-8', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-9', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-10', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 300) / (length - 300);
            spawnEncryptionCubes('.address', '.row-11', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-12', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-13', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-14', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 200) / (length - 200);
            spawnEncryptionCubes('.address', '.row-15', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 500) / (length - 500);
            spawnEncryptionCubes('.address', '.row-16', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-17', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-18', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-19', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-20', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 650) / (length - 650);
            spawnEncryptionCubes('.address', '.row-21', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-22', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-23', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 700) / (length - 700);
            spawnEncryptionCubes('.address', '.row-24', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-25', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 675) / (length - 675);
            spawnEncryptionCubes('.address', '.row-26', Math.round(percentageComplete * cols), direction, useFades);
            percentageComplete = (progress - 725) / (length - 725);
            spawnEncryptionCubes('.address', '.row-27', Math.round(percentageComplete * cols), direction, useFades);
            spawnEncryptionCubes('.address', '.row-28', Math.round(percentageComplete * cols), direction, useFades);
        }

        function preEncryptLine(parentClass, rowClass, progress, length, direction) {
            //console.log('fire');
            var percentageComplete = progress / length;
            var container = $(parentClass);
            var letterHolders = container.find(rowClass + ' .char')
            var cols = container.find(rowClass + ' .char').length;
            var sendClass = parentClass + ' ' + rowClass;
            spawnEncryptionLetters(sendClass, Math.round(percentageComplete * cols));
            letterHolders.each(function() {
                $(this).html(getRandomLetter());
            });
        }

        function encryptLine(parentClass, rowClass, progress, length, direction) {
            var percentageComplete = progress / length;
            var container = $(parentClass);
            var cols = container.find(rowClass + ' .bit').length;
            var letterHolders = container.find(rowClass + ' .char')
            var curToShow = Math.round(percentageComplete * cols);
            spawnEncryptionCubes(parentClass, rowClass, curToShow);
            letterHolders.each(function() {
                $(this).html(getRandomLetter());
            });
            //console.log(percentageComplete + '||' + cols);
        }

        function preHighlightKey() {
            $('.address').css('background', 'transparent');
            $('.address-wrapper').css('display', 'none');
            var rows = $('.encryption-cover .row');
            if ($('.noFades').length === 0) {
                rows.each(function(index) {
                    var rowBits = $(this).find('.bit');
                    var curRow = index;
                    if (curRow == 3) {
                        rowBits.eq(29).removeClass('fades').addClass('noFades');
                        rowBits.eq(30).removeClass('fades').addClass('noFades');
                        rowBits.eq(31).removeClass('fades').addClass('noFades');
                        rowBits.eq(32).removeClass('fades').addClass('noFades');
                        rowBits.eq(33).removeClass('fades').addClass('noFades');
                    } else if (curRow == 4) {
                        rowBits.eq(28).removeClass('fades').addClass('noFades');
                        rowBits.eq(29).removeClass('fades').addClass('noFades');
                        rowBits.eq(30).removeClass('fades').addClass('noFades');
                        rowBits.eq(31).removeClass('fades').addClass('noFades');
                        rowBits.eq(32).removeClass('fades').addClass('noFades');
                        rowBits.eq(33).removeClass('fades').addClass('noFades');
                        rowBits.eq(34).removeClass('fades').addClass('noFades');
                    }
                });
                window.blockchain.scene3Timeline.to('#scene3 .encryption-cover .fades', 500, {
                    delay: 0,
                    opacity: .2,
                });
            }

        }

        function spawnEncryptionCubes(parentClass, rowClass, number, direction, useFades) {
            var x = 0;
            if (useFades === true) {
                var rowBits = $(parentClass).find(rowClass + ' .fades');
            } else {
                var rowBits = $(parentClass).find(rowClass + ' .bit');
            }

            if (direction === 'reverse') {
                rowBits.each(function(index) {
                    if (index <= number) {
                        $(this).css('opacity', 0);
                    } else {
                        $(this).css('opacity', 1);
                    }
                    x++;
                });
            } else {
                rowBits.each(function(index) {
                    if (number === 0) {
                        rowBits.each(function(index) {
                            $(this).removeClass('show');
                            return false;
                        })
                    }
                    if (index <= number) {
                        $(this).addClass('show');
                    } else {
                        $(this).removeClass('show');
                    }
                    x++;
                });
            }

        }

        function spawnEncryptionLetters(rowClass, number) {
            var rowBits = $(rowClass).find('.char');
            rowBits.each(function(index) {
                if (index < number) {
                    $(this).css('display', 'inline');
                } else {
                    $(this).css('display', 'none');
                }
            });
        }

        function spawnStars(amount, sceneTimeline, chapter) {
            if (!window.blockchain.isWebGL) {
                console.log('spawning particles');
                var x = 1;
                var length = sceneTimeline.duration();
                var delay = length * -1;
                $('#scene' + chapter + ' .particles').html('');
                //console.log(length);
                while (x <= amount) {
                    var posX = getRandomPosition(-4000, 4000);
                    var posZ = getRandomPosition(delay, 0);
                    var new_posZ = posZ + length;
                    var particle = '<div class="particle p' + x + '" style="transform: translate3d(' + posX + 'px, 0, ' + posZ + 'px)">';
                    var $particle = $(particle);
                    $('#scene' + chapter + ' .particles').append($particle);
                    sceneTimeline.to('#scene' + chapter + ' .p' + x, length, {
                        x: posX,
                        y: 0,
                        z: new_posZ,
                        delay: delay
                    });
                    x++;
                }
            }
        }

        function spawnCubeChain(scene, numOfCubes) {
            // Default distance is 18,000px for every 5,400px scrolled or 3.3333 to 1
            var x = 0;
            var startPos = -12000;
            var endPos = 1200;
            while (x < numOfCubes) {
                //Used for adding cube IDs
                var cubeNumber = x + 1;
                //Cubes are 800px deep, decrimenting this number allows them to be correctly stacked in the z-axis
                startPos -= 800;
                endPos = startPos + 18000;
                var transformDistance = endPos - startPos;
                var scrollDuration = 5400;
                var delay = scrollDuration * -1;
                if (cubeNumber === 1) {
                    delay = 0;
                }
                var cubeWrapper = $('<div class="cube-wrapper c' + cubeNumber + '" style="transform: translate3d(0, 0, ' + startPos + 'px)">');
                var cube = $('<div class="cube">');
                var front = $('<div class="front">');
                var back = $('<div class="back">');
                var top = $('<div class="top">');
                var bottom = $('<div class="bottom">');
                var left = $('<div class="left">');
                var right = $('<div class="right">');
                cube.append(front);
                cube.append(back);
                cube.append(top);
                cube.append(bottom);
                cube.append(left);
                cube.append(right);
                cubeWrapper.append(cube);
                $('#animate' + scene).append(cubeWrapper);
                //console.log('-- cube "#animate'+scene+' .c'+cubeNumber+'" spawned --');
                //console.log('start: '+startPos+', end: '+endPos+', duration: '+scrollDuration+', delay: '+delay);
                x++;
            }
        }

        function getRandomLetter() {
            var possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
            var totalCharacters = possibleCharacters.length;
            var charToUseID = Math.floor(Math.random() * totalCharacters);
            return possibleCharacters[charToUseID];
        }

        function getRandomPosition(min, max) {
            return Math.random() * (max - min) + min;
        }

        function trackSceneProgress(name, progress) {
            var progressPercent = progress * 100;
            $('.progress-bar').width(progressPercent + '%');
            //$('a.active .nav-item-progress').width(progressPercent + '%');
        }

        function trackNavProgress(chapter, progress) {
            var progressPercent = progress * 100;
            $('.' + chapter + ' .progress-tracker').css('top', progressPercent + '%');
            //$('a.active .nav-item-progress').width(progressPercent + '%');
        }

        function finishExperience(isComplete) {
            if (isComplete) {
                $('.footer__share-container').show();
            } else {
                $('.footer__share-container').hide();
            }
        }

        var halifax = { x: 200, y: 150, complete: false };
        var boston = { x: 180, y: 177, complete: false };
        var belem = { x: 246, y: 295, complete: false };

        var frankfurt = { x: 346, y: 145, complete: false };
        var beirut = { x: 400, y: 190, complete: false };
        var fez = { x: 310, y: 217, complete: false };

        // var mapCities = [halifax, boston, belem, frankfurt, beirut, fez];
        var mapCityLines = [];


        function initMapCanvas() {

            if (!mapContext) {
                mapContext = mapCanvas.getContext('2d');
            }
            mapContext.canvas.width = 800;
            mapContext.canvas.height = 400;
            context = mapContext;

            var color = 'white';

            drawCircle(halifax.x, halifax.y, 3, color);
            drawCircle(boston.x, boston.y, 3, color);
            drawCircle(belem.x, belem.y, 3, color);
            drawCircle(frankfurt.x, frankfurt.y, 3, color);
            drawCircle(beirut.x, beirut.y, 3, color);
            drawCircle(fez.x, fez.y, 3, color);

        }

        function removeLine(city1, city2) {

            for (var i = 0; i < mapCityLines.length; i++) {
                if (mapCityLines[i].city1.x === city1.x && mapCityLines[i].city2.x === city2.x) {
                    mapCityLines.splice(i, 1);
                    //console.log('remove the line : ',mapCityLines.length);
                }
            }

        }

        function animateMapCanvas(citiesAry, amount) {

            if (!mapContext) {
                mapContext = mapCanvas.getContext('2d');
            }
            mapContext.canvas.width = 800;
            mapContext.canvas.height = 400;
            context = mapContext;


            for (var j = 0; j < citiesAry.length; j++) {

                var line = { city1: citiesAry[j].city1, city2: citiesAry[j].city2 };

                if (amount === 1) {
                    //console.log('AMOUNT 1 : ', line);
                    citiesAry[j].city2.complete = true;
                    mapCityLines.push(line);
                } else {
                    citiesAry[j].city2.complete = false;
                    removeLine(citiesAry[j].city1, citiesAry[j].city2);
                    drawNewLine(citiesAry[j].city1, citiesAry[j].city2, amount);
                }
                drawNewLine(citiesAry[j].city1, citiesAry[j].city2, amount);
            }

            //draw finished lines
            for (var i = 0; i < mapCityLines.length; i++) {
                drawNewLine(mapCityLines[i].city1, mapCityLines[i].city2, 1);
            }

            drawCities();

        }

        function drawCities() {

            var color = 'white';
            var halifaxColor = (halifax.complete) ? 'yellow' : 'white';
            var bostonColor = (boston.complete) ? 'yellow' : 'white';
            //var belemColor = (belem.complete) ? 'yellow' : 'white';
            var frankfurtColor = (frankfurt.complete) ? 'yellow' : 'white';
            var fezColor = (fez.complete) ? 'yellow' : 'white';
            var beirutColor = (beirut.complete) ? 'yellow' : 'white';
            //draw cities
            drawCircle(halifax.x, halifax.y, 3, halifaxColor);
            drawCircle(boston.x, boston.y, 3, bostonColor);
            drawCircle(belem.x, belem.y, 3, 'yellow');
            drawCircle(frankfurt.x, frankfurt.y, 3, frankfurtColor);
            drawCircle(beirut.x, beirut.y, 3, beirutColor);
            drawCircle(fez.x, fez.y, 3, fezColor);

        }

        /*
      var activeTimeline = 0;
      var timeLineSegments = [$('#scene4 .ts-1-text'), $('#scene4 .ts-2-text'), $('#scene4 .ts-3-text'), $('#scene4 .ts-4-text'), $('#scene4 .ts-5-text')];
  
      function activateTimelineSegment(index) {
  
        //console.log('ACTIVATE.......' + index);
        timeLineSegments[index-1].addClass('activate');
  
      }
  
      function deactivateTimelineSegment(index) {
  
        if(index > 0) {
            timeLineSegments[index-1].removeClass('activate');
        }
  
      }
  
      function updateTimelineText(element, ratio) {
  
        var current = activeTimeline;
        var testpos = $(element).parent().offset();
        //console.log('RATIO : ', testpos);
        if(ratio > 0.7 && ratio <= 0.85) {
            activeTimeline = 1;
        } else if(ratio > 0.85 && ratio < 0.93) {
            activeTimeline = 2;
        } else if(ratio > 0.93) {
            activeTimeline = 3;
        } else {
            deactivateTimelineSegment(current);
        }
        //console.log('Active : ' + activeTimeline);
  
        // if(current != activeTimeline) {
        //   deactivateTimelineSegment(current);
        //   activateTimelineSegment(activeTimeline);
        // }
        if(activeTimeline > 0) {
            deactivateTimelineSegment(current);
            activateTimelineSegment(activeTimeline);
        }
  
      }*/
    }
});