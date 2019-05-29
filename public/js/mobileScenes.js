jQuery(function($){
  if ($('body').hasClass('mobile') || window.isTablet) {
      'use strict';
      var peopleCanvas = $("#people-canvas")[0];
      var peopleCanvas2 = $("#people-canvas2")[0];
      var networkCanvas = $("#network-canvas")[0];
      var mapCanvas = $("#map-canvas")[0];
      var takeawayCanvas = $("#takeaway-canvas")[0];
      var boundariesCanvas = $("#boundaries-canvas")[0];
      var context, peopleContext, peopleContext2, networkContext, mapContext, takeawayContext, boundariesContext;
      var canvasAnimation, canvasAnimationAmt;
      var centerPoint = {x: window.innerWidth/2, y:(window.innerHeight*.7)};

      var pt_1, pt_2, pt_3, pt_4, pt_5, pt_6, pt_7, pt_8;

      var scene2Pt1, scene2Pt2, scene2Pt3, scene2Pt4, scene2Pt5, scene2Pt6, scene2Pt7, scene2Pt8, scene2Pt9, scene2Pt10, scene2Pt11, scene2Pt12, scene2Pt13;

      var tabletImageMultiplier = (window.isTablet) ? 2 : 1;

      function updateCanvasOnResize() {

        centerPoint = {x: window.innerWidth/2, y:(window.innerHeight*.7)}
        resetScene1Points();
        resetScene2Points();

        if(context) {
          var canvas = context.canvas;
          if(canvas.id === 'people-canvas') {
            initPeopleCanvas();
            if(canvasAnimation === 'centralizeAnimation') {
              console.log('centralizeAnimation');
                centralizeAnimation(canvasAnimationAmt);
            } else if(canvasAnimation === 'decentralizeAnimation') {
              console.log('decentralizeAnimation');
                decentralizeAnimation(canvasAnimationAmt);
            }
          } else if(canvas.id === 'people-canvas2') {
            initPeopleCanvas2();
            if(canvasAnimation === 'scene2PeopleIntro') {
                scene2PeopleIntro(canvasAnimationAmt);
            }
            if(canvasAnimation === 'scene2DrawLinesAndPeople') {
                scene2DrawLinesAndPeople(canvasAnimationAmt);
            }
          } else if(canvas.id === 'takeaway-canvas') {
            initTakeawayCanvas();
            if(canvasAnimation === 'takeawayAnimation') {
                takeawayAnimation(canvasAnimationAmt);
            }

          }
        }
      }



      function resetScene1Points() {
        pt_3 = {x: centerPoint.x + (centerPoint.x/2), y: centerPoint.y + (centerPoint.y*.2), size: 50*tabletImageMultiplier, image: person3, complete: true};
        pt_2 = {x: centerPoint.x + (centerPoint.x/1.9), y: centerPoint.y *.7, size: 50*tabletImageMultiplier, image: person2, complete: true};
        pt_1 = {x: centerPoint.x - (centerPoint.x*.45), y: centerPoint.y + (centerPoint.y*.2), size: 80*tabletImageMultiplier, image: person1, complete: true};
        pt_8 = {x: centerPoint.x - (centerPoint.x*.7), y: centerPoint.y - (centerPoint.y*.1), size: 40*tabletImageMultiplier, image: person8, complete: true};
        pt_4 = {x: centerPoint.x - (centerPoint.x*.35), y: centerPoint.y *.7, size: 40*tabletImageMultiplier, image: person4, complete: true};
        pt_7 = {x: centerPoint.x + (centerPoint.x/1.5), y: centerPoint.y - (centerPoint.y*.1), size: 30*tabletImageMultiplier, image: person7, complete: true};
      }

      function resetScene2Points() {
        scene2Pt3 = {x: centerPoint.x + (centerPoint.x/1.7), y: centerPoint.y + (centerPoint.y*.15), size: 50*tabletImageMultiplier, image: person3, complete: true};
        scene2Pt2 = {x: centerPoint.x + (centerPoint.x/2), y: centerPoint.y - (centerPoint.y*.1), size: 24*tabletImageMultiplier, image: person4};
        scene2Pt1 = {x: centerPoint.x - (centerPoint.x*.3), y: centerPoint.y + (centerPoint.y*.28), size: 85*tabletImageMultiplier, image: person9};
        scene2Pt8 = {x: centerPoint.x - (centerPoint.x*.72), y: centerPoint.y, size: 36*tabletImageMultiplier, image: person8};
        scene2Pt5 = {x: centerPoint.x + (centerPoint.x/1.3), y: centerPoint.y - (centerPoint.y*.3), size: 55*tabletImageMultiplier, image: person1};
        scene2Pt6 = {x: centerPoint.x - (centerPoint.x*.5), y: centerPoint.y - (centerPoint.y*.2), size: 42*tabletImageMultiplier, image: person6};
        scene2Pt7 = {x: centerPoint.x + (centerPoint.x/1.6), y: centerPoint.y - (centerPoint.y*.2), size: 72*tabletImageMultiplier, image: person7};
        scene2Pt9 = {x: centerPoint.x - (centerPoint.x*.2), y: centerPoint.y - (centerPoint.y*.4), size: 36*tabletImageMultiplier, image: person4};
        scene2Pt10 = {x: centerPoint.x + (centerPoint.x/2), y: centerPoint.y - (centerPoint.y*.55), size: 42*tabletImageMultiplier, image: person10};
        scene2Pt11 = {x: centerPoint.x + (centerPoint.x*.07), y: centerPoint.y - (centerPoint.y*.14), size: 43*tabletImageMultiplier, image: person2};
        scene2Pt13 = {x: centerPoint.x, y: centerPoint.y - (centerPoint.y*.45), size: 72*tabletImageMultiplier, image: person5};
      }

      window.addEventListener("resize", updateCanvasOnResize);
      window.addEventListener("orientationchange", updateCanvasOnResize);

      //preload people
      var person1 = new Image();
      person1.src = '/a/pgs/images/blockchain/headshot-02.png';
      person1.onload = function() {
        //loaded;
      };
      var person2 = new Image();
      person2.src = '/a/pgs/images/blockchain/headshot-04.png';
      person2.onload = function() {
        //loaded;
      };
      var person3 = new Image();
      person3.src = '/a/pgs/images/blockchain/headshot-07.jpg';
      person3.onload = function() {
        //loaded;
      };
      var person4 = new Image();
      person4.src = '/a/pgs/images/blockchain/headshot-13.png';
      person4.onload = function() {
        //loaded;
      };
      var person5 = new Image();
      person5.src = '/a/pgs/images/blockchain/headshot-05.png';
      person5.onload = function() {
        //loaded;
      };
      var person6 = new Image();
      person6.src = '/a/pgs/images/blockchain/headshot-08.png';
      person6.onload = function() {
        //loaded;
      };
      var person7 = new Image();
      person7.src = '/a/pgs/images/blockchain/headshot-10.png';
      person7.onload = function() {
        //loaded;
      };
      var person8 = new Image();
      person8.src = '/a/pgs/images/blockchain/headshot-09.png';
      person8.onload = function() {
        //loaded;
      };
      var person9 = new Image();
      person9.src = '/a/pgs/images/blockchain/headshot-01.png';
      person9.onload = function() {
        //loaded;
      };
      var person10 = new Image();
      person10.src = '/a/pgs/images/blockchain/headshot-11.jpg';
      person10.onload = function() {
        //loaded;
      };


      resetScene1Points();
      resetScene2Points();


      function clearCanvas() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      }

      function initTakeawayCanvas() {

        if(!takeawayContext) {
            takeawayContext = takeawayCanvas.getContext('2d');
        }
        takeawayContext.canvas.width  = window.innerWidth;
        takeawayContext.canvas.height = window.innerHeight;
        context = takeawayContext;
      }

      function initBoundariesCanvas() {

        if(!boundariesContext) {
            boundariesContext = boundariesCanvas.getContext('2d');
        }
        boundariesContext.canvas.width  = window.innerWidth;
        boundariesContext.canvas.height = window.innerHeight;
        context = boundariesContext;
      }

      function initPeopleCanvas() {

        if(!peopleContext) {
            peopleContext = peopleCanvas.getContext('2d');
        }
        peopleContext.canvas.width  = window.innerWidth;
        peopleContext.canvas.height = window.innerHeight;
        context = peopleContext;
      }

      function initPeopleCanvas2() {

        if(!peopleContext2) {
            peopleContext2 = peopleCanvas2.getContext('2d');
        }
        peopleContext2.canvas.width  = window.innerWidth;
        peopleContext2.canvas.height = window.innerHeight;
        context = peopleContext2;
      }

      function initNetworkCanvas() {

        if(!networkContext) {
            networkContext = networkCanvas.getContext('2d');
        }
        networkContext.canvas.width  = window.innerWidth;
        networkContext.canvas.height = window.innerHeight;
        context = networkContext;

      }

      function drawPerson(image, point, size) {
        context.drawImage(image, point.x-(size/2), point.y-(size/2), size, size);
        if(!point.complete) {
          createPersonBlock(point.x-(size/2), point.y-(size/2), size);
        }
      }

      function drawPersonNoBlock(image, point, size) {
        context.drawImage(image, point.x-(size/2), point.y-(size/2), size, size);
      }

      function createPersonBlock(ptx, pty, size) {
        context.globalAlpha = 0.6;
        var radius = size/2;
        context.beginPath();
        context.fillStyle = "black";
        context.arc(ptx+radius, pty+radius, radius, 0, 2 * Math.PI, false);
        context.shadowBlur = 3;
        context.fill();
        context.globalAlpha = 1.0;
      }

      function drawCircle(centerX, centerY, radius, color) {

        var circleColor = '#FFFFFF';
        if(color === 'yellow') {
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
          context.moveTo(point1.x,point1.y);

          var ptX = point1.x + (point2.x - point1.x) * amount;
          var ptY = point1.y + (point2.y - point1.y) * amount;

          context.lineTo(point1.x + (point2.x - point1.x) * amount, point1.y + (point2.y - point1.y) * amount);

          context.strokeStyle = '#FFFFFF';
          context.lineWidth = .3;
          context.stroke();

          var pt = {x:ptX, y:ptY};
          if(movePerson) {
              drawPersonNoBlock(person, pt, size*amount);
          } else {
              drawPersonNoBlock(person, point2, size);
          }

      }

      function movePeople(point1, point2, amount) {

        var ptX = point1.x + (point2.x - point1.x) * amount;
        var ptY = point1.y + (point2.y - point1.y) * amount;

        var pt = {x:ptX, y:ptY};

        drawPerson(point2.image, pt, point2.size*amount);
      }


      function animateDiamond(amount, points) {

        var size = 14;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        for(var i=0; i<points.length; i++) {
          var startPt = points[i].start;
          var targetPt = points[i].target;
          var ptX = startPt.x + (targetPt.x - startPt.x) * amount;
          var ptY = startPt.y + (targetPt.y - startPt.y) * amount;
          drawDiamond(ptX-(size/2), ptY-(size/2), size);
          var point = points[i].target;
          if(amount === 1) {
            point.complete = true;
          } else {
            point.complete = false;
          }
        }

        scene2DrawLinesAndPeople(1, false);
      }

      function drawDiamond(x, y, width) {

          var point0 = {x:x+(width/2), y:y};
          var point1 = {x: x+width, y: y+(width/2)};
          var point2 = {x:x+(width/2), y:y+width};
          var point3 = {x:x, y:y+(width/2)};

          context.lineWidth=2;
          context.beginPath();
          context.moveTo(point0.x,point0.y);
          context.lineTo(point1.x,point1.y);
          context.lineTo(point2.x,point2.y);
          context.lineTo(point3.x,point3.y);
          context.lineTo(point0.x,point0.y);
          context.closePath();
          context.strokeStyle = '#FFFFFF';
          context.stroke();
      }

      function centralizeAnimation(lineAmount, movePerson) {

        canvasAnimation = 'centralizeAnimation';
        canvasAnimationAmt = lineAmount;

          if(context) {
            clearCanvas();

            if(lineAmount) {
              drawCircle(centerPoint.x,centerPoint.y, 2);
              drawLine(centerPoint, pt_1, lineAmount, pt_1.size, person1, movePerson);//richard
              drawLine(centerPoint, pt_2, lineAmount, pt_2.size, person2, movePerson);//eric
              drawLine(centerPoint, pt_3, lineAmount, pt_3.size, person3, movePerson);//scott
              drawLine(centerPoint, pt_4, lineAmount, pt_4.size, person4, movePerson);//steve
              drawLine(centerPoint, pt_7, lineAmount, pt_7.size, person7, movePerson);//brad
              drawLine(centerPoint, pt_8, lineAmount, pt_8.size, person8, movePerson);//micah
            }
        } else {
          initPeopleCanvas();
        }
      }

      function decentralizeAnimation(lineAmount) {

        canvasAnimation = 'decentralizeAnimation';
        canvasAnimationAmt = lineAmount;
        clearCanvas();

        drawNewLine(pt_8, pt_2, lineAmount);
        drawNewLine(pt_8, pt_3, lineAmount);
        drawNewLine(pt_8, pt_4, lineAmount);

        drawNewLine(pt_1, pt_3, lineAmount);
        drawNewLine(pt_1, pt_2, lineAmount);
        drawNewLine(pt_7, pt_4, lineAmount);
        drawNewLine(pt_7, pt_1, lineAmount);

        var personAry = [pt_7, pt_8, pt_1, pt_2, pt_3, pt_4];
        drawPeople(personAry);
      }

      function drawPeople(personAry) {
        for(var i=0; i<personAry.length; i++) {
          var p = personAry[i];
          drawPerson(p.image, p, p.size);
        }
      }

      function scene2DrawLinesAndPeople(lineAmount, doClear) {

        canvasAnimation = 'scene2DrawLinesAndPeople';
        canvasAnimationAmt = lineAmount;
        if(doClear) {
            clearCanvas();
        }

        drawNewLine(scene2Pt3, scene2Pt5, lineAmount);//scott to mehemt
        drawNewLine(scene2Pt2, scene2Pt5, lineAmount);//eric to mehmet
        drawNewLine(scene2Pt2, scene2Pt3, lineAmount);//eric to steve
        drawNewLine(scene2Pt11, scene2Pt10, lineAmount);//eric to mehmet
        drawNewLine(scene2Pt5, scene2Pt10, lineAmount);//eric to steve
        drawNewLine(scene2Pt6, scene2Pt2, lineAmount);//mm to eric
        drawNewLine(scene2Pt8, scene2Pt2, lineAmount);//mic to scott
        drawNewLine(scene2Pt1, scene2Pt11, lineAmount);//richard to eric
        drawNewLine(scene2Pt1, scene2Pt8, lineAmount);//richard to micah
        drawNewLine(scene2Pt1, scene2Pt2, lineAmount);//richard to mm
        drawNewLine(scene2Pt11, scene2Pt8, lineAmount);//eric to micah
        drawNewLine(scene2Pt11, scene2Pt13, lineAmount);//eric to mehmet
        drawNewLine(scene2Pt10, scene2Pt13, lineAmount);// to nauman
        drawNewLine(scene2Pt13, scene2Pt5, lineAmount);//gene to nauman

        drawPeople([scene2Pt1, scene2Pt2, scene2Pt3, scene2Pt5, scene2Pt6, scene2Pt8, scene2Pt10, scene2Pt11, scene2Pt13])

      }

      function drawNewLine(point1, point2, amount) {

          context.beginPath();
          context.moveTo(point1.x,point1.y);

          var ptX = point1.x + (point2.x - point1.x) * amount;
          var ptY = point1.y + (point2.y - point1.y) * amount;

          context.lineTo(point1.x + (point2.x - point1.x) * amount, point1.y + (point2.y - point1.y) * amount);

          context.strokeStyle = '#FFFFFF';
          context.lineWidth = 1;
          context.stroke();

      }

      function scene2PeopleIntro(lineAmount) {
        canvasAnimation = 'scene2PeopleIntro';
        canvasAnimationAmt = lineAmount;

        initPeopleCanvas2();

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        movePeople(centerPoint, scene2Pt6, lineAmount);
        movePeople(centerPoint, scene2Pt5, lineAmount);
        movePeople(centerPoint, scene2Pt3, lineAmount);
        movePeople(centerPoint, scene2Pt2, lineAmount);
        movePeople(centerPoint, scene2Pt1, lineAmount);
        movePeople(centerPoint, scene2Pt8, lineAmount);
        movePeople(centerPoint, scene2Pt10, lineAmount);
        movePeople(centerPoint, scene2Pt11, lineAmount);
        movePeople(centerPoint, scene2Pt13, lineAmount);
      }



      function intoNetworkAnimation(amount, amount2, formLine) {

        clearCanvas();
        //var yPt = (window.isTablet)
        var roundedAmount = Math.ceil(amount * 100)/100;

        var vanishingPt = {x: window.innerWidth/2, y: Math.ceil(window.innerHeight*.67)};

        var size = 50;

        var diamondNum = Math.floor(amount*20);
        var inc = amount*.15;
        var newSize = size + Math.ceil(amount * 100);

        //draw gold diamonds
        for(var i=0; i<diamondNum; i++) {
            drawDiamondFromCenter(vanishingPt.x, vanishingPt.y, newSize);
            newSize = (inc*newSize) + newSize;
        }


        var squareStartSize = size + (size*roundedAmount);
        var square2Size = squareStartSize + (squareStartSize*roundedAmount);
        var square3Size = square2Size + (square2Size*roundedAmount);
        var square4Size = square3Size + (square3Size*roundedAmount);

        //white squares
        var pts1 = drawSquare(vanishingPt.x, vanishingPt.y, squareStartSize);
        //drawBlockNumber(pts1, '181');
        var pts2 = drawSquare(vanishingPt.x, vanishingPt.y, square2Size);
        drawBlockNumber(pts2, '180', square2Size);
        var pts3 = drawSquare(vanishingPt.x, vanishingPt.y, square3Size);
        drawBlockNumber(pts3, '179', square3Size);
        var pts4 = drawSquare(vanishingPt.x, vanishingPt.y, square4Size);
        drawBlockNumber(pts4, '178', square4Size);

        //draw lines between squares corners
        drawNewLine(pts4[3], pts1[3], 1);
        drawNewLine(pts4[2], pts1[2], 1);
        drawNewLine(pts4[1], pts1[1], 1);
        drawNewLine(pts4[0], pts1[0], 1);

        if(formLine) {
          var roundedAmount2 = Math.ceil(amount2 * 100)/100;

          var formSquare1Size = squareStartSize*roundedAmount2;
          var formSquare1 = drawSquare(vanishingPt.x, vanishingPt.y, (squareStartSize*roundedAmount2));//larger

          var formSquare2Size = formSquare1Size/2;
          var innerDiamondSize = formSquare2Size;


          var formSquare2 = drawSquare(vanishingPt.x, vanishingPt.y, formSquare2Size);//smaller
          if(formSquare1Size > 20) {
              drawBlockNumber(formSquare1, '181', formSquare1Size);
          }

          for(var i=0; i<3; i++) {
              drawDiamondFromCenter(vanishingPt.x, vanishingPt.y, innerDiamondSize);
              innerDiamondSize += innerDiamondSize * .5;
          }
          drawNewLine(formSquare1[3], formSquare2[3], 1);
          drawNewLine(formSquare1[2], formSquare2[2], 1);
          drawNewLine(formSquare1[1], formSquare2[1], 1);
          drawNewLine(formSquare1[0], formSquare2[0], 1);
        }

      }

      function takeawayAnimation(amount, amount2) {
        canvasAnimation = 'takeawayAnimation';
        canvasAnimationAmt = amount;
        clearCanvas();

        if(amount > 0 && amount < 1) {

          var roundedAmount = Math.ceil(amount * 100)/100;
          var vanishingPt = {x: window.innerWidth/2, y: Math.ceil(window.innerHeight*.67)};
          var size = 500*roundedAmount;//used to size white squares
          var squareStartSize = size + (size*roundedAmount);
          var blockNumber = 180;

          var number = Math.floor(squareStartSize*.1) + 2;
          var totalSquares = (number < 11) ? number : 10;

          var squareAry = [];
          for(var i=0; i<totalSquares; i++) {
            //white squares
            //if (squareStartSize > 500) { break; }
            var pts = drawSquare(vanishingPt.x, vanishingPt.y, squareStartSize);
            if(blockNumber !== 180) {
              drawBlockNumber(pts, blockNumber, squareStartSize);
            }
            blockNumber--;
            squareAry.push(pts);

            //draw gold diamonds

            var newSize = squareStartSize;
            var diamondNum = (newSize<60) ? 2 : 4;
            if(newSize > 50) {
              for(var j=0; j<diamondNum; j++) {
                  drawDiamondFromCenter(vanishingPt.x, vanishingPt.y, newSize);
                  newSize -= newSize * .09;
              }
            }

            squareStartSize += squareStartSize*.5;
          }


        //draw lines between squares corners
        drawNewLine(squareAry[totalSquares-1][3], squareAry[0][3], 1);
        drawNewLine(squareAry[totalSquares-1][2], squareAry[0][2], 1);
        drawNewLine(squareAry[totalSquares-1][1], squareAry[0][1], 1);
        drawNewLine(squareAry[totalSquares-1][0], squareAry[0][0], 1);

        }
      }

      function boundariesAnimation(amount, color) {

        canvasAnimation = 'boundariesAnimation';
        canvasAnimationAmt = amount;
        clearCanvas();

        if(amount > 0 && amount < .9) {

          var roundedAmount = Math.ceil(amount * 100)/100;
          var vanishingPt = {x: window.innerWidth/2, y: Math.ceil(window.innerHeight*.67)};
          var size = 300*roundedAmount;//used to size white squares
          var squareStartSize = size + (size*roundedAmount);
          var blockNumber = 180;
          var yInc = 0;


          var number = Math.floor(squareStartSize*.1) + 2;
          var totalSquares = (number < 11) ? number : 10;
          // if(size < 20) {
          //   totalSquares = 5;
          // }
          var squareAry = [];
          for(var i=0; i<totalSquares; i++) {



            //white squares
            //if (squareStartSize > 500) { break; }
            var pts = drawSquare(vanishingPt.x, vanishingPt.y-yInc, squareStartSize);
            // yInc += 100*roundedAmount;
            //drawBlockNumber(pts, blockNumber, squareStartSize);
            blockNumber--;
            squareAry.push(pts);

            //draw gold diamonds

            var newSize = squareStartSize;
            var diamondNum = (newSize<60) ? 2 : 4;
            if(newSize > 50) {
              for(var j=0; j<diamondNum; j++) {
                // console.log('Boundary Diamonds : ' +  newSize);
                  drawDiamondFromCenter(vanishingPt.x, vanishingPt.y-yInc, newSize, color);
                  //yInc += 10;
                  newSize -= newSize * .09;
              }
            }

            // yInc += 500*roundedAmount;

            squareStartSize += squareStartSize*.5;
          }

        //draw lines between squares corners
        drawNewLine(squareAry[totalSquares-1][3], squareAry[0][3], 1);
        drawNewLine(squareAry[totalSquares-1][2], squareAry[0][2], 1);
        drawNewLine(squareAry[totalSquares-1][1], squareAry[0][1], 1);
        drawNewLine(squareAry[totalSquares-1][0], squareAry[0][0], 1);

        }
      }

      function animateContract(amount) {

        clearCanvas();

        var roundedAmount = Math.ceil(amount * 100)/100;


        var vanishingPt = {x: 180, y: 400}

        var size = 10;
        //
        // var diamondNum = Math.floor(amount*20);
        // var inc = amount*.15;
        // var xInc = 10;
        // var newSize = size + Math.ceil(amount * 100);
        // for(var i=0; i<diamondNum; i++) {
        //     drawDiamondFromCenter(180-xInc, 400, newSize);
        //     newSize = (inc*newSize) + newSize;
        //     xInc += 20;
        // }

        var startX = 180;
        var startY = 400;
        var increment = 20;
        var firstSquare, lastSquare;

        var squareNum = Math.ceil(amount * 10);
        var squareStartSize = size + (size*roundedAmount);
        for(var j=0; j<squareNum; j++) {
          //context.globalAlpha = roundedAmount;
          var pts = drawSquare(startX, startY, squareStartSize);
          // var offset = 20*roundedAmount;
          // var diamondsizeinc = 1.0;
          // for(var i=0;i<5; i++) {
          //     drawDiamondFromCenter(startX+offset, startY+offset, squareStartSize/diamondsizeinc);
          //     offset += 5;
          // }

          context.globalAlpha = 1.0;
          squareStartSize += increment;
          startX -= squareStartSize/2;
          startY -= squareStartSize/2;
          increment += 20;
          if(j === 0) {
            firstSquare = pts;
          } else if(j === squareNum-1) {
            lastSquare = pts;
          }
        }


        if(squareNum > 1) {
          drawNewLine(lastSquare[0], firstSquare[0], 1);
          drawNewLine(lastSquare[1], firstSquare[1], 1);
          drawNewLine(lastSquare[2], firstSquare[2], 1);
          drawNewLine(lastSquare[3], firstSquare[3], 1);
        }



      }

      function drawBlockNumber(points, cubeNum, size) {


        var fontSize = Math.floor(size*.2);
        var fontStyle = fontSize + 'px ProFont';

        var topleft = points[3];
        var leftOffset = Math.floor(size * .08);

        context.font = fontStyle;
        context.fillStyle = 'white';
        context.fillText(cubeNum, topleft.x + leftOffset, topleft.y - leftOffset);

      }

      function drawDiamondFromCenter(x, y, width, color) {
        var hex = '#FFD17A';
        if(color) {
          hex = color;
        }

        var point0 = {x:x, y:y-(width/2)};
        var point1 = {x: x+(width/2), y:y};
        var point2 = {x:x, y:y+(width/2)};
        var point3 = {x:x-(width/2), y:y};

        context.lineWidth=1;
        context.beginPath();
        context.moveTo(point0.x,point0.y);
        context.lineTo(point1.x,point1.y);
        context.lineTo(point2.x,point2.y);
        context.lineTo(point3.x,point3.y);
        context.lineTo(point0.x,point0.y);
        context.closePath();
        context.strokeStyle = hex;
        context.stroke();
      }

      function drawSquare(x, y, width) {

          var halfWidth = width/2;
          var point0 = {x: Math.floor(x-halfWidth), y: Math.floor(y-halfWidth)};
          var point1 = {x: Math.floor(x+halfWidth), y: Math.floor(y-halfWidth)};
          var point2 = {x: Math.floor(x+halfWidth), y: Math.floor(y+halfWidth)};
          var point3 = {x: Math.floor(x-halfWidth), y: Math.floor(y+halfWidth)};


          context.beginPath();
          context.moveTo(point0.x,point0.y);
          context.lineTo(point1.x,point1.y);
          context.lineTo(point2.x,point2.y);
          context.lineTo(point3.x,point3.y);
          context.closePath();
          context.strokeStyle = '#FFFFFF';

          var lineWidth = 2;
          if(width < 60) {
              lineWidth = .5;
          } else if(width < 100) {
              lineWidth = 1;
          }
          context.lineWidth = lineWidth;
          context.stroke();

          return [point0, point1, point2, point3];

      }

      var titleFlyinZTranslation = (window.isTablet) ?  0 : -400;
      var carRegistrationZ = (window.isTablet) ?  0 : -1200;

      buildIntro();
      buildScene1();
      buildScene2();
      buildScene3();
      buildScene4();
      buildScene5();
      buildNav();
      buildDefinitions();
      buildScrollCloser();

      window.blockchain.scene2markup = $('#animate2').detach();
      window.blockchain.scene3markup = $('#animate3').detach();
      window.blockchain.scene4markup = $('#animate4').detach();
      window.blockchain.scene5markup = $('#animate5').detach();


      window.blockchain.scenes.push(window.blockchain.scene1Timeline.duration());
      window.blockchain.scenes.push(window.blockchain.scene2Timeline.duration());
      window.blockchain.scenes.push(window.blockchain.scene3Timeline.duration());
      window.blockchain.scenes.push(window.blockchain.scene4Timeline.duration());
      window.blockchain.scenes.push(window.blockchain.scene5Timeline.duration());

      function buildDefinitions() {
        $('.text-block').on('click', function(e) {
          if (e.target.classList.contains('definition')) {
            $('.definition-holder').removeAttr('style');
            var word = e.target.dataset.word;

            $('#'+word).animate({
              height: '60px',
              width: '90%',
              left: '50%',
              top: '20%',
              transform: 'translateX(-50%)'
            }, 200)
            if (word === 'smartcontract') {
              $('#'+word).animate({
                height: '540px',
              }, 200)
            } else if (word === 'privatekey') {
              $('#'+word).animate({
                height: '440px',
              }, 200)
            } else {
              $('#'+word).animate({
                height: '420px',
              }, 200)
            }

          }
        });
      }

      function buildScrollCloser() {
          $(window).on('scroll', function() {
            $('.definition-holder').removeAttr('style');
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
              if(data.scrollDirection === "FORWARD") {
                toggleScene('1','add');
              }
          })
          .on('leave', function(data) {
              if (data.scrollDirection === 'REVERSE') {
                toggleScene('1','remove');
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
            }
          })
      }

      function buildScene1() {
          window.blockchain.scene1Timeline = new TimelineMax({
              useFrames: true,
              ease: Linear.easeNone
          });
          window.blockchain.scene1Timeline
          .to('#animate1 *', 1, {
            clearProps: 'all'
          })
          .to('#scene1', 1, {
              display: 'block',
              delay: 0,
          })
          .to('.nav-selector', 0, {
              display: 'block',
              delay: 0,
          })
          .to('.blockchain-wrapper', 0, {
              position: "fixed",
              delay: 0
          })
          .to('#scene1 .bc-header.chapter-1', 0, {
              display: 'block',
          })
          .to('#scene1 .bc-header.chapter-1', 10, {
              opacity: 1,
              delay: 0
          })
          .to('#scene1 .chapter-title', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene1 .chapter-title h3', 100, {
              color: '#FFFFFF',
              delay: 0
          })
          .to('#scene1 .chapter-title .fly-ins', 500, {
              z: titleFlyinZTranslation,
              delay: -100
          })
          .to('#scene1 .chapter-title h3', 100, {
              color: '#FFFFFF',
              delay: 0
          })
          .to('#scene1 .ctt-1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene1 .ctt-1', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1 .ctt-2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene1 .ctt-2', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1 .ctt-1', 1000, {
              delay: 400,
              z: 1000
          })
          .to('#scene1 .ctt-2', 1000, {
              delay: -1000,
            z: 1000
          })
          .to('#scene1 .chapter-title .fly-ins', 400, {
              transform: 'translateZ(1000px)',
              delay: -900
          })
          .to('#scene1 .chapter-title', 0, {
              display: 'none',
              delay: 0
          })
          .to('#scene1 .chapter-text', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene1 .ct-1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene1 .ct-1', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1 .ct-1', 500, {
              delay: 400,
              z: 1000
          })
          .to('#scene1 .tb-1', 0, {
             display: 'block',
             delay: 0
         })
          .to('#scene1 .tb-1__title', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene1 .tb-1__title', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1 .tb-1__copy', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene1 .tb-1__copy', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1 .d1', 0, {
             display: 'block',
             delay: 0
         })
         .to('#scene1 .d1 div', 200, {
             delay: 0,
             borderColor: "rgb(255,255,255)"
         })
         .to('#scene1 .d1 span', 200, {
             delay: -200,
             color: "rgb(255,255,255)"
         })
         .to('#scene1 .d1', 500, {
             delay: -200,
             z: (window.isTablet) ? 0 : -800
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
             },100),
             onUpdateParams: ["{self}"]
         })

         .to('#scene1 .d2', 0, {
             display: 'block',
             delay: 0
         })
         .to('#scene1 .d2 div', 200, {
             delay: 0,
             borderColor: "rgb(215,215,215)"
         })
         .to('#scene1 .d2 span', 200, {
             delay: -200,
             color: "rgb(215,215,215)"
         })
         .to('#scene1 .d2', 500, {
             delay: -200,
             z: (window.isTablet) ? -200 : -1100
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
             z: (window.isTablet) ? -400 : -1400
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
             z: (window.isTablet) ? -600 : -1600
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



         .to('#scene1 .block-building-info', 500, {
             delay: 0,
             width: 0
         })
         .to('#scene1 .block-building-info', 300, {
             delay: -500,
             onUpdate: _.throttle(function(e) {
                 printTextController('#scene1 .block-building-info .cat-0', e.time(), e.totalDuration(), 'reverse');
                 printTextController('#scene1 .block-building-info .cat-1', e.time(), e.totalDuration(), 'reverse');
                 printTextController('#scene1 .block-building-info .cat-2', e.time(), e.totalDuration(), 'reverse');
                 printTextController('#scene1 .block-building-info .cat-3', e.time(), e.totalDuration(), 'reverse');
                 printTextController('#scene1 .block-building-info .cat-4', e.time(), e.totalDuration(), 'reverse');
             },100),
             onUpdateParams: ["{self}"]
         })
         .to('#scene1 .tb-1', 1000, {
             delay: 0,
             z: 1000
         })
         .to('#scene1 .diamond-transaction-wrapper', 1000, {
             delay: -1000,
             z: 1000
         })
         .to('#scene1 .cube-wrapper', 1000, {
             delay: -1000,
             z: 1000
         })
         .to('#scene1 .cube-wrapper', 0, {
             delay: 0,
             display: 'none'
         })
         .to('#scene1 .diamond-transaction-wrapper', 0, {
             delay: 0,
             display: 'none'
         })
         .to('#scene1 .block-building-info', 0, {
             delay: 0,
             display: 'none'
         })



        .to('#scene1 .tb-2', 0, {
          delay: 0,
          display: 'block'
        })
       .to('#scene1 .tb-2__title', 400, {
           delay: 0,
           onUpdate: _.throttle(function(e) {
               printTextController('#scene1 .tb-2__title', e.time(), e.totalDuration());
           },100),
           onUpdateParams: ["{self}"]
       })
       .to('#scene1 .tb-2__copy', 400, {
           delay: 0,
           onUpdate: _.throttle(function(e) {
               printTextController('#scene1 .tb-2__copy', e.time(), e.totalDuration());
           },100),
           onUpdateParams: ["{self}"]
       })
       .to('#scene1 .secure-image', 0, {
         delay: 0,
         display: 'block'
       })
       .to('#scene1 .secure-image', 1000, {
         delay: 0,
         opacity: 1,
         z: 0
       })
       .to('#scene1 .tb-2', 1000, {
           delay: 300,
           z: 1000
       })
       .to('#scene1 .secure-image', 1000, {
         delay: -1000,
         opacity: 0,
         z: 1000
       })
        .to('#scene1 .tb-3', 0, {
          delay: 0,
          display: 'block'
        })
         .to('#scene1 .tb-3__title', 400, {
             delay: 0,
             onUpdate: _.throttle(function(e) {
                 printTextController('#scene1 .tb-3__title', e.time(), e.totalDuration());
             },100),
             onUpdateParams: ["{self}"]
         })
         .to('#scene1 .tb-3__copy', 400, {
             delay: 0,
             onUpdate: _.throttle(function(e) {
                 printTextController('#scene1 .tb-3__copy', e.time(), e.totalDuration());
             },100),
             onUpdateParams: ["{self}"]
         })
          .to('#scene1', 700, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                centralizeAnimation(e.ratio, true);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1', 400, {
              delay: 500,
              onUpdate: _.throttle(function(e) {
                centralizeAnimation(1-e.ratio);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1', 500, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                decentralizeAnimation(e.ratio);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene1 .tb-3', 1000, {
              delay: 300,
              z: 1000
          })
          .to('#scene1 .people-container', 1000, {
            transform: 'translateZ(1000px)',
            delay: -1000
          })
          .to('#scene1 .people-container', 0, {
            display: 'none'
          })
          .to('#scene1', 300, {
              delay: 0,
              display: 'none'
          })

          window.blockchain.scene1 = new ScrollMagic.Scene({
              triggerHook: 0,
              duration: window.blockchain.scene1Timeline.duration(),
              offset: window.blockchain.windowHeight + 300
          })
          .on('enter', function(data) {
            $('#scene1').css('display','block');
            initPeopleCanvas();
            spawnStars(100, window.blockchain.scene1Timeline, '1');
            window.blockchain.BlockChain.introTimeline.pause();
            chapterChangeUpdate(1);
            if(data.scrollDirection === "FORWARD") {
              toggleScene('2','add');
            }
          })
          .on('leave', function(data) {
            $('#scene1').css('display','none');
            clearCanvas();
            //console.log('DATA: ', data);
            if(data.scrollDirection === "REVERSE" && data.type === "leave") {
                window.blockchain.BlockChain.introTimeline.restart();
            }
            if(data.scrollDirection === "REVERSE") {
              toggleScene('3','add');
            }
          })
          .on('progress', function(data) {
              trackSceneProgress('01 What is BlockChain', data.progress);
          })
          .setTween(window.blockchain.scene1Timeline)
          .addTo(window.blockchain.blockchainController);
      }

      function buildScene2() {
        window.blockchain.scene2Timeline = new TimelineMax({
            useFrames: true,
            ease: Linear.easeNone
        });

        window.blockchain.scene2Timeline
        .to('#animate2 *', 1, {
            clearProps: 'all'
        })
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
        .to('#scene2 .bc-header.chapter-2', 0, {
            display: 'block',
        })
        .to('#scene2 .bc-header.chapter-2', 100, {
            opacity: 1,
            delay: 0
        })
        .to('#scene2 .chapter-title .fly-ins', 500, {
            z: titleFlyinZTranslation,
            delay: -100
        })
        .to('#scene2 .ctt-1', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .ctt-1', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .ctt-2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .ctt-2', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .ctt-1', 1000, {
            delay: 400,
            z: 1000
        })
        .to('#scene2 .ctt-2', 1000, {
            delay: -1000,
            z: 1000
        })
        .set('#scene2 .ctt-1', {
            display: 'none'
        })
        .set('#scene2 .ctt-2', {
            display: 'none'
        })
        .to('#scene2 .chapter-title .fly-ins', 400, {
            transform: 'translateZ(1000px)',
            delay: -900
        })

        .to('#scene2 .chapter-text', 0, {
            display: 'block',
            delay: -300
        })
        .to('#scene2 .ct-1', 400, {
            delay: -300,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .ct-1', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .chapter-title', 0, {
            display: 'none',
            delay: 0
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
            delay: 0
        })
        .to('#scene2 .stt-1', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-1', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .stt-2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-2', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .stt-2', 1000, {
            delay: 500,
            z: 1000
        })
        .to('#scene2 .stt-1', 1000, {
            delay: -1000,
            z: 1000
        })
        .set('#scene2 .section-ttile', {
            display: 'none'
        })
        .to('#scene2 .tb-1', 0, {
           display: 'block',
           delay: 0
         })
        .to('#scene2 .tb-1', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-1', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .section-a .car-registration img', 100, {
            opacity: 1,
            delay: 0
        })
        .to('#scene2 .section-a .car-registration img', 500, {
            z: carRegistrationZ,
            y: '-50%',
            delay: -100
        })
        .to('#scene2 .section-a .bc-people', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene2 .section-a .bc-people .buyer', 100, {
            opacity: 1,
            delay: 0
        })
        .to('#scene2 .section-a .bc-people .buyer', 500, {
            transform: 'translateZ(-600px)',
            delay: -100
        })
        .to('#scene2 .section-a .bc-people .seller', 100, {
            opacity: 1,
            delay: -500
        })
        .to('#scene2 .section-a .bc-people .seller', 500, {
            transform: 'translateZ(-600px)',
            delay: -500
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
            height: '319px',
            delay: 0
        })
        .to('#scene2 .section-a .draw-diamond .tr', 500, {
            height: '324px',
            delay: 0
        })

        .to('#scene2 .tb-1', 1000, {
           z: 1000,
           delay: 400
         })
        // .to('#scene2 .tb-1', 400, {
        //     delay: 500,
        //     onUpdate: _.throttle(function(e) {
        //         printTextController('#scene2 .tb-1', e.time(), e.totalDuration(), 'reverse');
        //     },100),
        //     onUpdateParams: ["{self}"]
        // })
        .to('#scene2 .section-a .car-registration img', 400, {
            opacity: 0,
            delay: -500
        })
        .to('#scene2 .registration-info', 500, {
            delay: 0,
            width: '300px'
        })
        .to('#scene2 .registration-info', 300, {
            delay: -300,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .registration-info .cat-0', e.time(), e.totalDuration());
                printTextController('#scene2 .registration-info .cat-1', e.time(), e.totalDuration());
                printTextController('#scene2 .registration-info .cat-2', e.time(), e.totalDuration());
                printTextController('#scene2 .registration-info .cat-3', e.time(), e.totalDuration());
                printTextController('#scene2 .registration-info .cat-4', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-2', 0, {
           display: 'block',
           delay: 0
         })
        .to('#scene2 .tb-2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-2', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .registration-info-wrapper', 500, {
            transform: 'translateZ(1000px) translateY(-50%) translateX(-50%)',
            delay: 500
        })
        .set('#scene2 .registration-info-wrapper', {css:{display:'none'}})
        .to('#scene2 .draw-diamond', 500, {
            z: 1000,
            delay: -500
        })
        .to('#scene2 .section-a .car-registration', 500, {
            transform: 'translateZ(1000px)',
            delay: -500
        })
        .set('#scene2 .draw-diamond', {css:{display:'none'}})
        .set('#scene2 .car-registration', {css:{display:'none'}})

        .to('#scene2 .section-a .bc-people .buyer', 500, {
            opacity: 0,
            delay: -500
        })
        .to('#scene2 .section-a .bc-people .seller', 500, {
            opacity: 0,
            delay: -500
        })
        .to('#scene2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              scene2PeopleIntro(e.ratio);
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              scene2DrawLinesAndPeople(e.ratio, true);
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              animateDiamond(e.ratio, [{start: scene2Pt3, target: scene2Pt5}]);
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              animateDiamond(e.ratio, [{start: scene2Pt5, target: scene2Pt13}, {start: scene2Pt5, target: scene2Pt2},{start: scene2Pt5, target: scene2Pt10}]);
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              animateDiamond(e.ratio, [{start: scene2Pt2, target: scene2Pt8}, {start: scene2Pt2, target: scene2Pt1}, {start: scene2Pt10, target: scene2Pt11}]);
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 200, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              animateDiamond(e.ratio, [{start: scene2Pt11, target: scene2Pt6}]);
            },100),
            onUpdateParams: ["{self}"]
        })

        .to('#scene2 .people-container', 200, {
          transform: 'translateZ(1000px)',
          delay: 400
        })
        .to('#scene2 .tb-2', 1000, {
           z: 1000,
           delay: -200
         })
        .to('#scene2 .people-container', 0, {
          display: 'none'
        })
        .to('#scene2 .section-a', 0, {
            display: 'none',
            delay: 0
        })
        .to('#scene2 .section-b', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene2 .stt-3', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-3', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .stt-4', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-4', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })

        .to('#scene2 .stt-3', 1000, {
           z: 1000,
           delay: 0
         })
       .to('#scene2 .stt-4', 1000, {
          z: 1000,
          delay: -1000
        })
        .to('#scene2 .tb-3', 0, {
           display: 'block',
           delay: 0
         })
        .to('#scene2 .tb-3', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-3', e.time(), e.totalDuration(), 'forward', 'block');
            },100),
            onUpdateParams: ["{self}"]
        })


        .to('#scene2 .block-building .d1', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene2 .block-building .d1 div', 200, {
            delay: 0,
            borderColor: "rgb(255,255,255)"
        })
        .to('#scene2 .block-building .d1 span', 200, {
            delay: -200,
            color: "rgb(255,255,255)"
        })
        .to('#scene2 .block-building .d1', 500, {
            delay: -200,
            z: (window.isTablet) ? 0 : -800
        })

        .to('#scene2 .block-building-info', 500, {
            delay: 0,
            width: '300px'
        })
        .to('#scene2 .block-building-info', 400, {
            delay: -450,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .block-building-info .cat-0', e.time(), e.totalDuration());
                printTextController('#scene2 .block-building-info .cat-1', e.time(), e.totalDuration());
                printTextController('#scene2 .block-building-info .cat-2', e.time(), e.totalDuration());
                printTextController('#scene2 .block-building-info .cat-3', e.time(), e.totalDuration());
                printTextController('#scene2 .block-building-info .cat-4', e.time(), e.totalDuration());
            },100),
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
            z: (window.isTablet) ? -200 : -800
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
            },100),
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
            z: (window.isTablet) ? -400 : -1000
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
            z: (window.isTablet) ? -600 : -1200
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
            z: (window.isTablet) ? -800 : -1400
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
            z: (window.isTablet) ? -1000 : -1600
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
            z: -1800
        })
        .to('#scene2 .draw-cube .left', 500, {
            delay: -50,
            opacity: 1
        })
        .to('#scene2 .draw-cube .right', 500, {
            delay: -500,
            opacity: 1
        })

        .to('#scene2 .tb-2', 1000, {
           z: 1000,
           delay: 0
         })
        .to('#scene2 .section-b .timestamp', 500, {
            width: 275,
            delay: 0
        })
        .to('#scene2 .tb-3', 1000, {
           z: 1000,
           delay: 0
         })
        .to('#scene2 .tb-3', 0, {
           display: 'none',
           delay: 0
         })
        .to('#scene2 .tb-4', 0, {
           display: 'block',
           delay: 0
         })
        .to('#scene2 .tb-4', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-4', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })


        .to('#scene2 .tb-4', 500, {
           z: 1000,
           delay: 500
         })
        .to('#scene2 .draw-cube', 500, {
            delay: -500,
            z: 3400
        })
        .to('#scene2 .timestamp-wrapper', 500, {
            delay: -500,
            z: 3200
        })
        .to('#scene2 .block-building .d1', 500, {
            delay: -500,
            z: 3000
        })
        .to('#scene2 .block-building .d2', 500, {
            delay: -500,
            z: 2800
        })
        .to('#scene2 .block-building .d3', 500, {
            delay: -500,
            z: 2600
        })
        .to('#scene2 .block-building .d4', 500, {
            delay: -500,
            z: 2400
        })
        .to('#scene2 .block-building .d5', 500, {
            delay: -500,
            z: 2200
        })
        .to('#scene2 .block-building .d6', 500, {
            delay: -500,
            z: 2000
        })
        .to('#scene2 .tb-3', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-3', e.time(), e.totalDuration(), 'reverse');
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .section-b', 0, {
            display: 'none',
            delay: 0
        })
        .to('#scene2 .section-c', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene2 .stt-5', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene2 .stt-5', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-5', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .stt-6', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-6', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .stt-6', 400, {
            delay: 500,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-6', e.time(), e.totalDuration(), 'reverse');
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .stt-5', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .stt-5', e.time(), e.totalDuration(), 'reverse');
            },100),
            onUpdateParams: ["{self}"]
        })

        .to('#scene2 .tb-5', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene2 .tb-5__title', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-5__title', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-5__copy', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-5__copy', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 1, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              clearCanvas();
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .people-container', 0, {
          transform: 'translateZ(0)',
          delay: 0
        })
        .to('#scene2 .people-container', 0, {
          display: 'block'
        })
        .to('#scene2 .network-container', 0, {
          display: 'block'
        })
        .to('#scene2', 10, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                clearCanvas();
                initNetworkCanvas();
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2', 2000, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              intoNetworkAnimation(e.ratio);
            },window.blockchain.mobileTickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-5', 0, {
            delay: 0,
            display: 'none'
        })

            .to('#scene2 .tb-6', 0, {
                delay: 0,
                display: 'block'
            })
            .to('#scene2 .tb-6__title', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene2 .tb-6__title', e.time(), e.totalDuration());
                },window.blockchain.tickRate),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2 .tb-6__copy_1', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene2 .tb-6__copy_1', e.time(), e.totalDuration());
                },window.blockchain.tickRate),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2 .tb-6__copy_2', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene2 .tb-6__copy_2', e.time(), e.totalDuration());
                },window.blockchain.tickRate),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2', 1000, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                  intoNetworkAnimation(1, e.ratio, true);
                },window.blockchain.mobileTickRate),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2 .tb-6', 1000, {
                delay: 400,
                z: 1000
            })
            .to('#scene2 .network-container', 500, {
              transform: 'translateZ(1000px)',
              delay: -1000
            })
            .to('#scene2 .tb-6', 0, {
              delay: 0,
              display: 'none'
            })
            .to('#scene2', 1, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                  clearCanvas();
                },100),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2 .network-container', 0, {
              delay: 0,
              display: 'none'
            })
            .to('#scene2 .secure-image.scene2', 0, {
              delay: 0,
              display: 'block'
            })
            .to('#scene2 .tb-7', 0, {
                delay: 0,
                display: 'block'
            })
            .to('#scene2 .tb-7__title', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene2 .tb-7__title', e.time(), e.totalDuration());
                },window.blockchain.tickRate),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2 .secure-image.scene2', 1000, {
              delay: 0,
              opacity: 1,
              z: 0
            })
            .to('#scene2 .tb-7__copy_1', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene2 .tb-7__copy_1', e.time(), e.totalDuration(), null, 'hash');
                },window.blockchain.tickRate),
                onUpdateParams: ["{self}"]
            })
            .to('#scene2 .tb-7__copy_1', 400, {
              delay: 100,
              display: 'none'
            })
            .to('#scene2 .tb-7__copy_2', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene2 .tb-7__copy_2', e.time(), e.totalDuration(), null, 'hash function');
                },window.blockchain.tickRate),
                onUpdateParams: ["{self}"]
            })

            .to('#scene2 .tb-7', 1000, {
                delay: 500,
                z: 1000
            })

            .to('#scene2 .secure-image.scene2', 500, {
              delay: -1000,
              opacity: 0,
              z: 1000
            })
            .to('#scene2 .secure-image.scene2', 0, {
              delay: 0,
              display: 'none'
            })
            .to('#scene2 .lockdown-images', 200, {
              delay: 0,
              display: 'block'
            })
            .to('#scene2 .lockdown-images', 200, {
              delay: 0,
              opacity: 1,
              z: 0
            })


        .to('#scene2 .lockdown-images', 200, {
          delay: 0,
          opacity: 1,
          z: 0
        })

        .to('#scene2 .tb-8', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene2 .tb-8__title', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-8__title', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-8__copy_1', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-8__copy_1', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-8__copy_2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-8__copy_2', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-8__copy_3', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-8__copy_3', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-8', 0, {
            delay: 300,
            display: 'none'
        })
        .to('#scene2 .tb-9', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene2 .tb-9__title', 400, {
              delay: -500,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene2 .tb-9__title', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene2 .tb-9__copy_1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene2 .tb-9__copy_1', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene2 .tb-9__copy_2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene2 .tb-9__copy_2', e.time(), e.totalDuration(), 'forwards');
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })

        //.set('#scene2 .lockdown-image1', {css:{className:'+=activated'}})
        //.set('#scene2 .lockdown-image2', {css:{className:'+=activated'}})

        .to('#scene2 .lockdown-image.image1a', 1, {
            delay: 0,
            opacity: 0
        })
        .to('#scene2 .lockdown-image.image1b', 1, {
            delay: -1,
            opacity: 1
        })
        .to('#scene2 .lockdown-image.image2a', 1, {
            delay: -1,
            opacity: 0
        })
        .to('#scene2 .lockdown-image.image2b', 1, {
            delay: -1,
            opacity: 1
        })

        .to('#scene2 .tb-9', 1000, {
            delay: 500,
            z: 1000
        })

        .to('#scene2 .lockdown-images', 200, {
          delay: -1000,
          opacity: 0,
          z: 1000
        })
        .to('#scene2 .lockdown-images', 0, {
          delay: 0,
          display: 'none'
        })
        .to('#scene2 .sync-example', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene2 .tb-10', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene2 .tb-10__title', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-10__title', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-10__copy_1', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-10__copy_1', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene2 .tb-10__copy_2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene2 .tb-10__copy_2', e.time(), e.totalDuration());
            },window.blockchain.tickRate),
            onUpdateParams: ["{self}"]
        })
        .set('#scene2 .establish-trust-images', {css:{display:'block'}})
        .to('#scene2 .establish-trust-images', 400, {
          delay: 0,
          z: 0
        })
        .to('#scene2 .trust-image-1', 400, {
          delay: -400,
          opacity: 1
        })
        .to('#scene2 .trust-image-2', 400, {
          delay: 200,
          opacity: 1
        })
        .to('#scene2 .establish-trust-images', 1000, {
          delay: 200,
          opacity: 0,
          z: 1000
        })
        .to('#scene2 .tb-10', 1000, {
            delay: -1000,
            z: 1000
        })
        .to('#scene2 ', 0, {
            delay: 0,
            display: 'none'
        })
        .set('#scene2 .establish-trust-images', {css:{display:'none'}})

        window.blockchain.scene2 = new ScrollMagic.Scene({
            triggerHook: 0,
            duration: window.blockchain.scene2Timeline.duration(),
            offset: window.blockchain.scene1Timeline.duration() + window.blockchain.windowHeight
        })
        .on('enter', function(data) {
          $('#scene2').css('display','block');
          spawnStars(100, window.blockchain.scene2Timeline, '2');
          chapterChangeUpdate(2);
          if(data.scrollDirection === 'FORWARD') {
              toggleScene('1','remove');
              toggleScene('3','add');
            }
        })
        .on('leave', function(data) {
          $('#scene2').css('display','none');
          clearCanvas();
          if(data.scrollDirection === 'REVERSE') {
              toggleScene('1','add');
              toggleScene('3','remove');
            }
        })
        .on('progress', function(data) {
            trackSceneProgress('02 How Does It Work', data.progress);
        })
        .setTween(window.blockchain.scene2Timeline)
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
        .to('#animate3 *', 1, {
            clearProps: 'all'
        })
        .to('#scene3', 1, {
            delay: 0,
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
          .to('#scene3 .bc-header.chapter-3', 0, {
              display: 'block',
          })
          .to('#scene3 .bc-header.chapter-3', 10, {
              opacity: 1,
              delay: 0
          })
          .to('#scene3 .chapter-title .fly-ins', 500, {
              z: titleFlyinZTranslation,
              delay: -100
          })

          .to('#scene3 .chapter-title h3', 100, {
              color: '#FFFFFF',
              delay: 0
          })
          .to('#scene3 .ctt-1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .ctt-1', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ctt-2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .ctt-2', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .chapter-title .ctt-1', 400, {
              transform: 'translateZ(1000px)',
              delay: 400
          })
          .to('#scene3 .chapter-title .ctt-2', 400, {
              transform: 'translateZ(1000px)',
              delay: -400
          })
          .to('#scene3 .chapter-title .fly-ins', 400, {
              transform: 'translateZ(1000px)',
              delay: -300
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
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ct-1', 400, {
              transform: 'translateZ(1000px)',
              delay: 400
          })

          .to('#scene3 .chapter-text', 0, {
              display: 'none',
              delay: 0
          })
          .to('#scene3 .section-a', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene3 .section-a .stt-1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .stt-1', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-a .stt-2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .stt-2', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .stt-2', 1000, {
              delay: 500,
              z: 1000
          })
          .to('#scene3 .stt-1', 1000, {
              delay: -1000,
              z: 1000
          })
          .set('#scene3 .section-a .section-title', {css:{display:'none'}})

          // .to('#scene3 .section-a .stt-2', 400, {
          //     delay: 500,
          //     onUpdate: _.throttle(function(e) {
          //         printTextController('#scene3 .stt-2', e.time(), e.totalDuration(), 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          // .to('#scene3 .section-a .stt-1', 400, {
          //     delay: 0,
          //     onUpdate: _.throttle(function(e) {
          //         printTextController('#scene3 .stt-1', e.time(), e.totalDuration(), 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .section-a .concert-tickets__ticket-1', 100, {
              opacity: 1,
              delay: -500
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
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-a .tb-1__copy', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-1__copy', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-a .tb-1', 1000, {
              delay: 500,
              z: 1000
          })
          .set('#scene3 .tb-1', {css:{display:'none'}})
          .to('#scene3 .section-a .concert-tickets__ticket-1', 500, {
              transform: 'translateZ(2000px)',
              delay: -100
          })
          .to('#scene3 .section-a .concert-tickets__ticket-2', 500, {
              transform: 'translateZ(150px) translateY(0) translateX(0)',
              top: '50%',

              delay: -500,
          })
          .to('#scene3 .tb-2', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .section-a .tb-2__title', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-2__title', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-a .tb-2__copy', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-2__copy', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-a .tb-2', 1000, {
              delay: 500,
              z: 1000
          })
          .set('#scene3 .tb-2', {css:{display:'none'}})
          .to('#scene3 .section-a .concert-tickets__ticket-2', 200, {
              opacity: 0,
              delay: 0
          })
          .set('#scene3 .section-a .concert-tickets__ticket-2', {css:{display:'none'}})
          .to('#scene3 .section-a .ticket-info', 0, {
              display: 'block',
              delay: 0
          })

          .to('#scene3 .section-a .ticket-info__ticket .cat-0', 400, {
              width: (window.isTablet) ? 335 : 172,
              delay: 0
          })
          .to('#scene3 .section-a .ticket-info__ticket .cat-1', 400, {
              width: (window.isTablet) ? 160 : 81,
              delay: -300
          })
          .to('#scene3 .section-a .ticket-info__ticket .cat-2', 266, {
              width: (window.isTablet) ? 225 : 112,
              delay: -350
          })
          .to('#scene3 .section-a .ticket-info__ticket .cat-3', 311, {
              width: (window.isTablet) ? 110 : 55,
              delay: -236
          })
          .to('#scene3 .section-a .ticket-info__ticket .cat-4', 170, {
              width: (window.isTablet) ? 250 : 96,
              delay: -281
          })
          .to('#scene3 .section-a .ticket-info__ticket .cat-5', 200, {
              width: (window.isTablet) ? 205 : 101,
              delay: -150
          })

          .to('#scene3 .tb-3', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .section-a .tb-3', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-3', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0,
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.ticket-info', 0, e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              delay: 0,
          })
          .to('#scene3 .ticket-info .cat-1', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.ticket-info', 1, e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-1', 50, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-2', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.ticket-info', 2, e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-2', 50, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-3', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.ticket-info', 3, e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-3', 50, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-4', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.ticket-info', 4, e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-4', 50, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-5', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0
          })
          .to('#scene3 .ticket-info .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.ticket-info', 5, e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticket-info .cat-5', 50, {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              delay: 0
          })

          .to('#scene3 .section-a .concert-tickets__ticket-2', 200, {
              transform: 'translateZ(1000px) translateY(-50%) translateX(-50%)',
              //top: '40%',
              delay: 0
          })

          .to('#scene3 .section-a .ticket-info .tl', 500, {
              height: (window.isTablet) ? 383 : 226,
              delay: 0
          })
          .to('#scene3 .section-a .ticket-info .bl', 500, {
              height: (window.isTablet) ? 381 : 225,
              delay: 0
          })
          .to('#scene3 .section-a .ticket-info .br', 500, {
              height: (window.isTablet) ? 377 : 222,
              delay: 0
          })
          .to('#scene3 .section-a .ticket-info .tr', 500, {
              height: (window.isTablet) ? 383 : 220,
              delay: 0
          })

          .to('#scene3 .section-a .ticket-transfer', 0, {
              display: 'block',
              delay: -500
          })
          .to('#scene3 .section-a .ticket-transfer .seller', 500, {
              z: 0,
              opacity: 1,
              delay: 0
          })
          .to('#scene3 .section-a .ticket-transfer .buyer', 500, {
              z: 0,
              opacity: 1,
              delay: -500
          })
          .to('#scene3 .section-a .ticket-transfer .address', 500, {
              width: '496px',
              delay: 0,
          })
          .to('#scene3 .section-a .ticket-transfer', 1000, {
              delay: 0,
              onStart: function(e) {
                  clearInterval(window.blockchain.printInterval);
              },
              onStartParams: ["{self}"]
          })
          .to('#scene3 .section-a .ticket-transfer', 100, {
              delay: -900,
              onStart: function() {
                  preShowRandomText('address');
              },
              onUpdate: _.throttle(function(e) {
                  showRandomText('address', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .section-a .ticket-transfer', 1000, {
              delay: -900,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .address-wrapper', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-a .ticket-info .ticket', 100, {
              delay: -500,
              onStart: function(e) {
                  clearInterval(window.blockchain.printInterval);
              },
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .section-a .tb-3', 0, {
          //     delay: 100,
          //     display: 'none'
          // })
          .to('#scene3 .section-a .tb-3', 1000, {
              delay: 300,
              z: 1000
          })
          .to('#scene3 .tb-4', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .section-a .tb-4', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-4', e.time(), e.totalDuration(), 'forwards', 'address');
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .section-a .draw-diamond .seller', 500, {
              z: (window.isTablet) ? -300 : -350,
              opacity: 1,
              delay: -200
          })
          .to('#scene3 .section-a .draw-diamond .buyer', 500, {
              z: -300,
              opacity: 1,
              delay: -500
          })


          .to('#scene3 .section-a .tb-4', 1000, {
              delay: 300,
              z: 1000
          })
          .to('#scene3 .ticket-info', 300, {
              delay: -1000,
              opacity: 0
          })
          .to('#scene3 .section-a .ticket-info .ticket-info__ticket', 100, {
              delay: -1000,
              opacity: 0,
          })

          .to('#scene3 .key-mobile', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .section-a .address', 500, {
              delay: -200,
              opacity: 0,
          })

          .to('#scene3 .key-mobile', 300, {
              delay: -300,
              opacity: 1
          })

          .to('#scene3 .tb-5', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .section-a .tb-5', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-5', e.time(), e.totalDuration(), 'forwards', 'private key');
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .encryption-cover .fades', 500, {
          //     delay: 0,
          //     opacity: .2,
          // })
          // .to('#scene3 .encryption-cover .fades', 0, {
          //     delay: 0,
          //     opacity: 0,
          // })
          // .to('#scene3 .encryption-cover .bit', 0, {
          //     delay: 0,
          //     background: 'transparent',
          // })
          // .to('#scene3 .section-a .ticket-info .draw-diamond', 200, {
          //     delay: 0,
          //     opacity: 1,
          // })
          // .to('#scene3 .ticket-transfer .buyer', 200, {
          //     delay: -200,
          //     left: '80%',
          //     top: '75%'
          // })


          .to('#scene3 .key-mobile', 300, {
              x: 190,
              delay: -300
          })
          .to('#scene3 .keyhole-wrapper', 200, {
              delay: 0,
              opacity: 1,
          })

          .to('#scene3 .keyhole-wrapper', 500, {
              delay: 0,
              z: 0,
          })
          .to('#scene3 .key-mobile', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .key-mobile', 200, {
              delay: 0,
              opacity: 1,
          })
          // .to('#scene3 .section-a .tb-5', 400, {
          //     delay: 0,
          //     onUpdate: _.throttle(function(e) {
          //         printTextController('#scene3 .tb-5', e.time(), e.totalDuration(), 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .key-mask', 500, {
              delay: 0,
              display: 'block',
          })
          // .to('#scene3 .address', 500, {
          //     delay: 0,
          //     x: 25,
          //     y: -80
          // })
          .to('#scene3 .tb-5', 0, {
              delay: 0,
              display: 'none'
          })
          .to('#scene3 .tb-6', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .tb-6__copy_1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-6__copy_1', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .tb-6__copy_2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-6__copy_2', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .key-mobile', 500, {
              delay: 0,
              x: 0
          })

          .to('#scene3 .mask-mask', 0, {
              delay: 0,
              zIndex: 9999,
          })
          .to('#scene3 .keyhole__ticket', 0, {
              transformOrigin: 'bottom center',
              delay: 0
          })
          .to('#scene3 .mask-mask', 500, {
              delay: 10,
              top: -240,
              left: -240
          })
          .to('#scene3 .keyhole__ticket', 273, {
              delay: -358,
              top: (window.isTablet) ? -40 : 50,
              height: '340px',
          })

          .to('#scene3 .key-mobile', 0, {
              delay: 0,
              display: 'none'
          })

          .to('#scene3 .tb-6', 0, {
              delay: 0,
              display: 'none'
          })
          .to('#scene3 .tb-6_b', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .tb-6_b__copy_1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-6_b__copy_1', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .tb-6_b__copy_2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-6_b__copy_2', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })


          .to('#scene3 .address', 0, {
              delay: 0,
              display: 'none',
          })

          .to('#scene3 .key-mask', 0, {
              delay: 0,
              display: 'none',
          })
          .to('#scene3 .keyhole-wrapper', 500, {
              delay: 0,
              z: 2000
          })
          .to('#scene3 .ticket-transfer .buyer', 500, {
              delay: -500,
              z: 2000
          })
          .to('#scene3 .ticket-masker', 500, {
              delay: -500,
              z: 2000
          })
          .to('#scene3 .reveal-mask', 500, {
              delay: -500,
              z: 2000
          })
          .to('#scene3 .keyhole__ticket-wrapper', 500, {
              delay: -500,
              z: 2000
          })
          .to('#scene3 .tb-6_b', 500, {
            delay: -500,
            z: 1000
          })
          .to('#scene3 .section-a', 0, {
              display: 'none',
              delay: 0
          })
          .to('#scene3 .section-b', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene3 .section-b .stt-3', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .stt-3', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .section-b .stt-4', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .section-b .stt-4', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .section-b .stt-4', 400, {
          //     delay: 500,
          //     onUpdate: _.throttle(function(e) {
          //         printTextController('#scene3 .section-b .stt-4', e.time(), e.totalDuration(), 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          // .to('#scene3 .section-b .stt-3', 400, {
          //     delay: 0,
          //     onUpdate: _.throttle(function(e) {
          //         printTextController('#scene3 .section-b .stt-3', e.time(), e.totalDuration(), 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .stt-3', 1000, {
              delay: 500,
              z: 1000
          })
          .to('#scene3 .stt-4', 1000, {
              delay: -1000,
              z: 1000
          })
          .set('#scene3 .section-b .section-title', {css:{display:'none'}})

          .to('#scene3 .tb-7', 0, {
            delay: 0,
            display: 'block'
          })
          .to('#scene3 .section-b .tb-7__title', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-7__title', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-b .tb-7__copy', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-7__copy', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
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
              right: 0,
              top: 0,
              z: 0
          })
          .to('#scene3 .ticker-4', 500, {
              delay: -500,
              left: 0,
              top: 35,
              z: 0
          })
          .to('#scene3 .ticker-5', 500, {
              delay: -500,
              right: 0,
              top: 35,
              z: 0
          })
          .to('#scene3 .ticker-7', 500, {
              delay: -500,
              left: 0,
              top: 70,
              z: 0
          })
          .to('#scene3 .ticker-8', 500, {
              delay: -500,
              right: 0,
              top: 70,
              z: 0
          })
          .to('#scene3 .ticker-10', 500, {
              delay: -500,
              left: 0,
              top: 105,
              z: 0
          })
          .to('#scene3 .ticker-11', 500, {
              delay: -500,
              right: 0,
              top: 105,
              z: 0
          })
          .to('#scene3 .ticker-13', 500, {
              delay: -500,
              left: 0,
              top: 140,
              z: 0
          })
          .to('#scene3 .ticker-14', 500, {
              delay: -500,
              right: 0,
              top: 140,
              z: 0
          })
          // .to('#scene3 .ticker-15', 500, {
          //     delay: -500,
          //     left: 400,
          //     top: 140,
          //     z: 0
          // })
          .to('#scene3 .ticker-16', 500, {
              delay: -500,
              left: 0,
              top: 175,
              z: 0
          })
          .to('#scene3 .ticker-17', 500, {
              delay: -500,
              right: 0,
              top: 175,
              z: 0
          })
          // .to('#scene3 .ticker-18', 500, {
          //     delay: -500,
          //     left: 400,
          //     top: 175,
          //     z: 0
          // })
          .to('#scene3 .ticker-19', 500, {
              delay: -500,
              left: 0,
              top: 210,
              z: 0
          })
          .to('#scene3 .ticker-20', 500, {
              delay: -500,
              right: 0,
              top: 210,
              z: 0
          })
          // .to('#scene3 .ticker-21', 500, {
          //     delay: -500,
          //     left: 400,
          //     top: 210,
          //     z: 0
          // })

          .to('#scene3 .ticker-wrapper', 500, {
              delay: -500,
              top: '50%'
          })

          .to('#scene3 .ticker-4', 200, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-4', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-18', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-18', e.time(), e.totalDuration(), 1, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-7', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-7', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-9', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-9', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-16', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-16', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-2', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-2', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-6', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-6', e.time(), e.totalDuration(), 1, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-8', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-8', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-20', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-20', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-1', 200, {
              delay: -100,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-1', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-19', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-19', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-3', 200, {
          //     delay: -150,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-3', e.time(), e.totalDuration(), 1, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-17', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-17', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-5', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-5', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-11', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-11', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-10', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-10', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-12', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-12', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-13', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-13', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-21', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-21', e.time(), e.totalDuration(), 1, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-14', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-14', e.time(), e.totalDuration(), 1, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-15', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-15', e.time(), e.totalDuration(), 1, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-4', 200, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-4', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-18', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-18', e.time(), e.totalDuration(), 2);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-7', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-7', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-9', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-9', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-16', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-16', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-2', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-2', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-6', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-6', e.time(), e.totalDuration(), 2);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-8', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-8', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-20', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-20', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-1', 200, {
              delay: -100,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-1', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-19', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-19', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-3', 200, {
          //     delay: -150,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-3', e.time(), e.totalDuration(), 2);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-17', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-17', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-5', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-5', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-11', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-11', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-10', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-10', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-12', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-12', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-13', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-13', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-21', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-21', e.time(), e.totalDuration(), 2);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-14', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-14', e.time(), e.totalDuration(), 2);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-15', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-15', e.time(), e.totalDuration(), 2);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-4', 200, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-4', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-18', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-18', e.time(), e.totalDuration(), 2, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-7', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-7', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-9', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-9', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-16', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-16', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-2', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-2', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-6', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-6', e.time(), e.totalDuration(), 2, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-8', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-8', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-20', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-20', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-1', 200, {
              delay: -100,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-1', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-19', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-19', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-3', 200, {
          //     delay: -150,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-3', e.time(), e.totalDuration(), 2, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-17', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-17', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-5', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-5', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-11', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-11', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-10', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-10', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-12', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-12', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-13', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-13', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-21', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-21', e.time(), e.totalDuration(), 2, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-14', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-14', e.time(), e.totalDuration(), 2, 'reverse');
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-15', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-15', e.time(), e.totalDuration(), 2, 'reverse');
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-4', 200, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-4', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-18', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-18', e.time(), e.totalDuration(), 1);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-7', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-7', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-9', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-9', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-16', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-16', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-2', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-2', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-6', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-6', e.time(), e.totalDuration(), 1);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-8', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-8', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-20', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-20', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-1', 200, {
              delay: -100,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-1', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-19', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-19', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-3', 200, {
          //     delay: -150,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-3', e.time(), e.totalDuration(), 1);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-17', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-17', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-5', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-5', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-11', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-11', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-10', 200, {
              delay: -150,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-10', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-12', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-12', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .ticker-13', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-13', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })
          // .to('#scene3 .ticker-21', 200, {
          //     delay: -200,
          //     onUpdate: _.throttle(function(e) {
          //         typeTickerText('ticker-21', e.time(), e.totalDuration(), 1);
          //     },100),
          //     onUpdateParams: ["{self}"]
          // })
          .to('#scene3 .ticker-14', 200, {
              delay: -200,
              onUpdate: _.throttle(function(e) {
                  typeTickerText('ticker-14', e.time(), e.totalDuration(), 1);
              },100),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .ticker-wrapper', 500, {
              z: 1000,
              delay: 0
          })
          .to('#scene3 .tb-7', 1000, {
              delay: -500,
              z: 1000
          })
          .to('#scene3 .tb-7', 0, {
            delay: 0,
            display: 'none'
          })
          .to('#scene3 .ticker-wrapper', 0, {
              display: 'none',
              delay: 0
          })


          .to('#scene3 .tb-8', 400, {
            delay: 0,
            display: 'block'
          })
          .to('#scene3 .section-b .tb-8__title', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-8__title', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-b .tb-8__copy', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-8__copy', e.time(), e.totalDuration(), 'forwards', 'smart contract');
              },100),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .sc-1', 0, {
              delay: 0,
              display: 'block',
          })
          .to('#scene3 .sc-1 .left', 200, {
              delay: 0,
              backgroundColor: "rgba(185,169,82,.4)"
          })
          .to('#scene3 .sc-1 .right', 200, {
              delay: -200,
              backgroundColor: "rgba(255,249,162,.4)"
          })
          .to('#scene3 .sc-1 .top', 200, {
              delay: -200,
              backgroundColor: "rgba(255,209,122,.4)"
          })
          .to('#scene3 .sc-1 .bottom', 200, {
              delay: -200,
              backgroundColor: "rgba(185,169,82,.4)"
          })
          .to('#scene3 .sc-1 .front', 200, {
              delay: -200,
              backgroundColor: "rgba(255,209,122,.4)"
          })
          .to('#scene3 .sc-1 .back', 200, {
              delay: -200,
              backgroundColor: "rgba(255,209,122,.4)"
          })
          .to('#scene3 .sc-1 p', 200, {
              delay: -200,
              opacity: 1
          })
          .to('#scene3 .sc-1 .cube', 500, {
              delay: -200,
              z: -800,
              x: '-50%',
              y: '30%'
          })
          .to('#scene3 .sc-1 .smart-contract-type', 500, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .smart-contract-type', e.time(), e.totalDuration());
              },100),
              onUpdateParams: ["{self}"]
          })


          .to('#scene3 .sc-1 .cube', 500, {
              delay: 0,
              z: 2000
          })
          .to('#scene3 .tb-8', 1000, {
              delay: -500,
              z: 1000
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
              z: (window.isTablet) ? 0 : -600
          })
          .to('#scene3 .buyer-example .ticker', 500, {
              delay: -500,
              z: (window.isTablet) ? 0 : -200
          })
          .to('#scene3 .bc-people .broker', 200, {
              delay: 0,
              opacity: 1
          })
          .to('#scene3 .bc-people .broker', 500, {
              delay: -200,
              z: (window.isTablet) ? 0 : -700
          })
          .to('#scene3 .bc-people .seller', 200, {
              delay: -400,
              opacity: 1
          })
          .to('#scene3 .bc-people .seller', 500, {
              delay: -200,
              z: (window.isTablet) ? 0 : -950
          })
          .to('#scene3 .bc-people .buyer', 200, {
              delay: -400,
              opacity: 1
          })
          .to('#scene3 .bc-people .buyer', 500, {
              delay: -200,
              z: (window.isTablet) ? 0 : -1000
          })
          .to('#scene3 .tb-9', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .tb-9__copy_1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-9__copy_1', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .tb-9__copy_2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-9__copy_2', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .tb-9', 1000, {
              delay: 500,
              z: 1000
          })
          .to('#scene3 .buyer-example .diamond-wrapper', 500, {
              delay: -1000,
              z: 1000
          })

          .to('#scene3 .buyer-example .ticker', 500, {
              delay: -1000,
              z: 1000
          })
          .to('#scene3 .bc-people .broker', 500, {
              delay: -1000,
              z: 1000
          })
          .to('#scene3 .bc-people .seller', 500, {
              delay: -1000,
              z: 1000
          })
          .to('#scene3 .bc-people .buyer', 500, {
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
          .to('#scene3 .smart-contract-mobile', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .smart-contract-mobile', 0, {
              delay: 0,
              scale: .1
          })
          .to('#scene3 .smart-contract-mobile', 1000, {
              delay: 0,
              scale: 1,
              top: (window.isTablet) ? '40%' : '16%'
          })
          .to('#scene3 .element__label.cl1', 500, {
              opacity: 1,
              delay: 0
          })
          .to('#scene3 .element__label.cl2', 500, {
              opacity: 1,
              delay: -500
          })
          .to('#scene3 .tb-10', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene3 .tb-10__1', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-10__1', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .tb-10__2', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-10__2', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .tb-10__3', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .tb-10__3', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .tb-10', 1000, {
              z: 1000,
              delay: 500
          })
          .to('#scene3 .smart-contract-mobile', 1000, {
              delay: -1000,
              z: 1000
          })
          .to('#scene3 .element__label.cl1', 500, {
              opacity: 0,
              delay: -1000
          })
          .to('#scene3 .element__label.cl2', 500, {
              opacity: 0,
              delay: -1000
          })
          .to('#scene3 .smart-contract-mobile', 0, {
              delay: 0,
              display: 'none'
          })
          .to('#scene3 #section-b', 0, {
              delay: 0,
              display: 'none',
          })
          .to('#scene3 .section-c', 0, {
              delay: 0,
              display: 'block',
          })
          // .to('#scene3 .bc-header.sub-b.chapter-3', 0, {
          //     display: 'none',
          //     delay: 0
          // })
          // .to('#scene3 .bc-header.sub-c.chapter-3', 0, {
          //     display: 'block',
          //     delay: 0
          // })
          .to('#scene3 .stt-5', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .stt-5', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .stt-6', 400, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController('#scene3 .stt-6', e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
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
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .id-card', 100, {
              delay: 0,
              opacity: 1
          })
          .to('#scene3 .section-c .id-card', 400, {
              delay: -100,
              z: (window.isTablet) ? 0 : -400
          })
          .to('#scene3 .section-c .id-card .id-1', 200, {
              delay: 200,
              opacity: 0
          })
          .to('#scene3 .section-c .id-card', 1000, {
              delay: 400,
              z: 1000
          })
          // .to('#scene3 .tb-11__title', 1000, {
          //     z: 1000,
          //     delay: -1000
          // })
          // .to('#scene3 .tb-11__copy', 1000, {
          //     z: 1000,
          //     delay: -1000
          // })
          .to('#scene3 .tb-11', 1000, {
              delay: -1000,
              z: 1000
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
          .to('#scene3 .section-c .map', 0, {
              delay: 0,
              opacity: 1
          })
          .to('#scene3 .section-c .map', 500, {
              delay: 0,
              z: (window.isTablet) ? 0 : -800
          })
          .to('#scene3 .section-c .map', 50, {
              delay: 0,
              onUpdate: function(e) {
                  initMapCanvas();
              },
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .tb-12__copy', 400, {
              delay: 0,
              onUpdate: function(e) {
                  printTextController('#scene3 .tb-12__copy', e.time(), e.totalDuration());
              },
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .map', 500, {
              delay: 0,
              onUpdate: function(e) {
                  animateMapCanvas([{city1: belem, city2: boston}], e.ratio);
              },
              onUpdateParams: ["{self}"]
          })

          .to('#scene3 .section-c .map', 200, {
              delay: 0,
              onUpdate: function(e) {
                  animateMapCanvas([{city1: boston, city2: halifax}], e.ratio);
              },
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .map', 500, {
              delay: 0,
              onUpdate: function(e) {
                  animateMapCanvas([{city1: halifax, city2: belem}, {city1: halifax, city2: frankfurt}, {city1: halifax, city2: fez}], e.ratio);
              },
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .map', 500, {
              delay: 0,
              onUpdate: function(e) {
                  animateMapCanvas([{city1: belem, city2: beirut}, {city1: fez, city2: frankfurt}, {city1: fez, city2: beirut},{city1: fez, city2: belem},{city1: frankfurt, city2: beirut}], e.ratio);
              },
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .map', 100, {
              delay: 0,
              onUpdate: function(e) {
                  animateMapCanvas([], e.ratio);
              },
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .map', 1000 , {
              delay: 0,
              transform: 'translateZ(1000px)'
          })
          .to('#scene3 .tb-12', 1000 , {
              delay: -1000 ,
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



          // .to('#scene3 .section-c .fingerprints', 500, {
          //     delay: 0,
          //     opacity: 1
          // })
          .to('#scene3 .section-c .fingerprint', 500, {
              delay: 0,
              opacity: 1
          })
          // .to('#scene3 .section-c .fingerprint', 400, {
          //     delay: -400,
          //     z: -800
          // })


          .to('#scene3 .section-c .fingerprint', 400, {
              delay: 0,
              top: (window.isTablet) ? '25%' : '20%',
              left: (window.isTablet) ? '0%' : '-40%'
          })
          .to('#scene3 .tb-13', 0 , {
              delay: 0 ,
              display: 'none'
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
          .to('#scene3 .section-c .fingerprint', 0, {
              zIndex: 9999
          })
          .to('#scene3 .section-c .draw-diamond .tl', 500, {
              height: '429px',
              delay: -400
          })
          .to('#scene3 .section-c .draw-diamond .bl', 500, {
              height: '426px',
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
          .set('#scene3 .section-c .registration-info-wrapper', {css:{'z-index':10000}})
          .to('#scene3 .section-c .registration-info', 500, {
              delay: 0,
              width: '300px'
          })
          .to('#scene3 .section-c .cat-1', 50, {
              backgroundColor: 'rgba(255,209,122,1)',
              delay: 0
          })
          .to('#scene3 .section-c .cat-0', 50, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  typeFormFields('.section-c', 1, e.time(), e.totalDuration());
              },window.blockchain.tickRate),
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
              },window.blockchain.tickRate),
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
              },window.blockchain.tickRate),
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
              },window.blockchain.tickRate),
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
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          .to('#scene3 .section-c .cat-5', 50, {
              backgroundColor: 'rgba(255,255,255,1)',
              delay: 0
          })

          .to('#scene3 .section-c .fingerprint .print-1', 400, {
              delay: 0,
              opacity: 0
          })
          .to('#scene3 .section-c .refugee', 400, {
              delay: -400,
              opacity: 0
          })

          .set('#scene3 .section-c .registration-info-wrapper', {css:{'z-index':1000}})
          .set('#scene3 .section-c .fingerprint', {css:{'left': (window.isTablet) ? '38%' : '25%', 'top': (window.isTablet) ? '40%' : '50%'}})


          .to('#scene3 .section-c .diamond-mask', 400, {
              transform: "rotate(-45deg) translateY(-120px)"
          })
          .to('#scene3 .registration-info-wrapper', 200, {
              delay: -400,
              opacity: 0
          })

          // .to('#scene3 .section-c .fingerprint', 1000, {
          //     delay: 0,
          //     z: 800
          // })

          // .to('#scene3 .tb-14', 1000, {
          //     delay: -1000,
          //     z: 1000
          // })
          .to('#scene3 .tb-14', 0, {
              delay: 0,
              display: 'none'
          })
          // .to('#scene3 .section-c .fingerprint', 100, {
          //     delay: 0,
          //     opacity: 1
          // })
          // .to('#scene3 .section-c .fingerprint', 400, {
          //     delay: -100,
          //     z: -800
          // })
          .to('#scene3 .section-c .fingerprint .print-1', 0, {
              delay: 0,
              display: 'none'
          })
          .to('#scene3 .tb-15', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene3 .tb-15__copy', 400, {
              delay: 0,
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
              delay: -25
          })
          .to('#scene3 .section-c .fingerprint .print-2-mask', 100, {
              delay: -350,
              height: '0'
          })

          .to('#scene3 .section-c .fingerprint .print-3-mask', 100, {
              delay: -350,
              height: '0'
          })
          .to('#scene3 .section-c .draw-diamond', 1000, {
              z: 1000,
              delay: 0
          })
          // .to('#scene3 .section-c .refugee', 1000, {
          //     z: 1000,
          //     delay: -1000
          // })
          .to('#scene3 .section-c .registration-info-wrapper', 1000, {
              z: 1000,
              delay: -1000
          })
          .to('#scene3 .tb-15', 1000, {
              delay: -1000,
              z: 1000
          })
          .to('#scene3 .fingerprints', 1000, {
              delay: -1000,
              z: 1000
          })
          .to('#scene3', 0, {
              delay: 200,
              display: 'none'
          })

          window.blockchain.scene3 = new ScrollMagic.Scene({
            triggerHook: 0,
            duration: window.blockchain.scene3Timeline.duration(),
            offset: window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.windowHeight
        })
          .on('enter', function(data) {
            $('#scene3').css('display','block');
              spawnStars(100, window.blockchain.scene3Timeline, '3');
              chapterChangeUpdate(3);
              if(data.scrollDirection === 'FORWARD') {
                //toggleScene('2','remove');
                toggleScene('4','add');
              }
          })
          .on('leave', function(data) {
            $('#scene3').css('display','none');
            if(data.scrollDirection === 'REVERSE') {
                toggleScene('2','add');
              }
          })
          .on('progress', function(data) {
              trackSceneProgress('03 BlockChain in Action', data.progress);
          })
          .setTween(window.blockchain.scene3Timeline)
      }

      function buildScene4() {

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

        window.blockchain.scene4Timeline = new TimelineMax({
            useFrames: true,
            ease: Linear.easeNone
        });

        window.blockchain.scene4Timeline
        .to('#animate4 *', 1, {
            clearProps: 'all'
        })
        .to('#scene4', 1, {
            delay: 0,
            display: 'block'
        })
        .to('#scene4 .chapter-title', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene4 .bc-header.chapter-4', 0, {
            display: 'block',
        })
        .to('#scene4 .bc-header.chapter-4', 10, {
            opacity: 1,
            delay: 0
        })
        .to('#scene4 .chapter-title h3', 100, {
            color: '#FFFFFF',
            delay: 0
        })
        .to('#scene4 .chapter-title .fly-ins', 500, {
            z: titleFlyinZTranslation,
            delay: -100
        })
        .to('#scene4 .ctt-1', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .ctt-1', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4 .ctt-2', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .ctt-2', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4 .ctt-2', 1000, {
            delay: 500,
            z: 2000
        })
        .to('#scene4 .ctt-1', 1000, {
            delay: -1000,
            z: 1000
        })
        .to('#scene4 .chapter-title .fly-ins', 400, {
            transform: 'translateZ(1000px)',
            delay: 0
        })
        .to('#scene4 .bc-header.chapter-4', 100, {
            opacity: 1,
            delay: 0
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
            },100),
            onUpdateParams: ["{self}"]
        })
        //start of change
        .to('#scene4 .ct-1', 400, {
            delay: 500,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .ct-1', e.time(), e.totalDuration(), 'reverse');
            },100),
            onUpdateParams: ["{self}"]
        })
        // end of change
        .to('#scene4 .ct-1', 1000, {
            delay: 0,
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
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4 .tb-1__copy', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .tb-1__copy', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })

        .to('#scene4 .timeline', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene4 .disclaimer-mobile', 0, {
                display: 'block',
                delay: 0
          })
          .to('#scene4 .disclaimer-mobile', 100, {
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
          // .to(ts1, 1000, {
          //     transform: 'translateZ(0) rotateY(90deg)',
          //     delay: 0
          // })
          .to(ts1__text, 1000, {
              transform: 'translateZ(0)',
              delay: 0
          })
          // .to(ts2, 1000, {
          //     transform: 'translateZ(-800px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts2__text, 1000, {
              transform: 'translateZ(-800px)',
              delay: -1000
          })
          // .to(ts3, 1000, {
          //     transform: 'translateZ(-1600px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts3__text, 1000, {
              transform: 'translateZ(-1600px)',
              delay: -1000
          })
          // .to(ts4, 1000, {
          //     transform: 'translateZ(-2400px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts4__text, 1000, {
              transform: 'translateZ(-2400px)',
              delay: -1000
          })
          // .to(ts14, 250, {
          //     transform: 'translateZ(-3200px) rotateY(90deg)',
          //     delay: -250
          // })
          .to(ts14__text, 1000, {
              transform: 'translateZ(-3200px)',
              delay: -1000
          })
          .to(ts1__text, 1000, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController(ts1__text, e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          // .to(ts1, 1000, {
          //     transform: 'translateZ(800px) rotateY(90deg)',
          //     delay: 500
          // })
          .to(ts1__text, 0, {
              display: 'none',
              delay: 100
          })
          // .to(ts2, 1000, {
          //     transform: 'translateZ(0) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts2__text, 1000, {
              transform: 'translateZ(0)',
              delay: 0
          })
          // .to(ts3, 1000, {
          //     transform: 'translateZ(-800px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts3__text, 1000, {
              transform: 'translateZ(-800px)',
              delay: -1000
          })
          // .to(ts4, 1000, {
          //     transform: 'translateZ(-1600px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts4__text, 1000, {
              transform: 'translateZ(-1600px)',
              delay: -1000
          })
          // .to(ts14, 1000, {
          //     transform: 'translateZ(-2400px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts14__text, 1000, {
              transform: 'translateZ(-2400px)',
              delay: -1000
          })
          .to(ts2__text, 1000, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController(ts2__text, e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          // .to(ts1, 0, {
          //     display: 'none',
          //     delay: 500
          // })
          // .to(ts1__text, 0, {
          //     display: 'none',
          //     delay: 0
          // })
          // .to(ts2, 1000, {
          //     transform: 'translateZ(800px) rotateY(90deg)',
          //     delay: 0
          // })
          .to(ts2__text, 0, {
              display: 'none',
              delay: 100
          })
          // .to(ts3, 1000, {
          //     transform: 'translateZ(0) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts3__text, 1000, {
              transform: 'translateZ(0)',
              delay: 0
          })
          // .to(ts4, 1000, {
          //     transform: 'translateZ(-800px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts4__text, 1000, {
              transform: 'translateZ(-800px)',
              delay: -1000
          })
          // .to(ts14, 1000, {
          //     transform: 'translateZ(-1600px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts14__text, 1000, {
              transform: 'translateZ(-1600px)',
              delay: -1000
          })
          .to(ts3__text, 1000, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController(ts3__text, e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          // .to(ts2, 0, {
          //     display: 'none',
          //     delay: 500
          // })
          // .to(ts2__text, 0, {
          //     display: 'none',
          //     delay: 0
          // })
          // .to(ts3, 1000, {
          //     transform: 'translateZ(800px) rotateY(90deg)',
          //     delay: 0
          // })
          .to(ts3__text, 0, {
              display: 'none',
              delay: 100
          })
          // .to(ts4, 1000, {
          //     transform: 'translateZ(0) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts4__text, 1000, {
              transform: 'translateZ(0)',
              delay: 0
          })
          // .to(ts14, 1000, {
          //     transform: 'translateZ(-800px) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts14__text, 1000, {
              transform: 'translateZ(-800px)',
              delay: -1000
          })
          .to(ts4__text, 1000, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController(ts4__text, e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          // .to(ts3, 0, {
          //     display: 'none',
          //     delay: 0
          // })
          // .to(ts3__text, 0, {
          //     display: 'none',
          //     delay: 0
          // })
          // .to(ts14, 0, {
          //     display: 'block',
          //     delay: 0
          // })
          // .to(ts14__text, 0, {
          //     display: 'block',
          //     delay: 0
          // })
          // .to(ts4, 1000, {
          //     transform: 'translateZ(800px) rotateY(90deg)',
          //     delay: 0
          // })
          .to(ts4__text, 0, {
              display: 'none',
              delay: 100
          })
          // .to(ts14, 1000, {
          //     transform: 'translateZ(0) rotateY(90deg)',
          //     delay: -1000
          // })
          .to(ts14__text, 1000, {
              transform: 'translateZ(0)',
              delay: 0
          })
          .to(ts14__text, 1000, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  printTextController(ts14__text, e.time(), e.totalDuration());
              },window.blockchain.tickRate),
              onUpdateParams: ["{self}"]
          })
          // .to(ts14, 1000, {
          //     transform: 'translateZ(800px) rotateY(90deg)',
          //     delay: 0
          // })
          .to(ts14__text, 0, {
              display: 'none',
              delay: 100
          })
          .to('#scene4 .tb-1', 1000, {
              delay: 0,
              z: 1000
          })
          .to('#scene4 .tb-1', 0, {
              delay: 0,
              display: 'none'
          })
          // .to('#scene4 .tb-1__title', 1000, {
          //     delay: -1000,
          //     z: 1000
          // })
          .to('#scene4 .timeline', 0, {
              delay: 0,
              display: 'none'
          })
          .to('#scene4 .disclaimer-mobile', 100, {
                opacity: 0,
                delay: 0
          })
          .to('#scene4 .disclaimer-mobile', 0, {
                display: 'none',
                delay: 0
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
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4 .tb-2__copy', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .tb-2__copy', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        // .to('#scene4 .tb-2__copy-2', 400, {
        //     delay: 0,
        //     onUpdate: _.throttle(function(e) {
        //         printTextController('#scene4 .tb-2__copy-2', e.time(), e.totalDuration());
        //     },100),
        //     onUpdateParams: ["{self}"]
        // })
        //receipt-source-mobile
        .to('#scene4 .receipts .receipt-source-mobile', 200, {
              opacity: 1,
              delay: 0
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
          .to('#scene4 .receipts .cube-wrapper', 100, {
            opacity: 1,
            delay: 0
          })
          .to('#scene4 .receipts .r1', 8000, {
              delay: -400,
              transform: 'translateZ(14200px)'
          })
          // .to('#scene4 .receipts .r2', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(13800px)'
          // })
          .to('#scene4 .receipts .r3', 8000, {
              delay: -8000,
              transform: 'translateZ(13400px)'
          })
          // .to('#scene4 .receipts .r4', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(13000px)'
          // })
          .to('#scene4 .receipts .r5', 8000, {
              delay: -8000,
              transform: 'translateZ(12600px)'
          })
          // .to('#scene4 .receipts .r6', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(12200px)'
          // })
          .to('#scene4 .receipts .r7', 8000, {
              delay: -8000,
              transform: 'translateZ(11800px)'
          })
          // .to('#scene4 .receipts .r8', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(11400px)'
          // })
          .to('#scene4 .receipts .r9', 8000, {
              delay: -8000,
              transform: 'translateZ(11000px)'
          })
          // .to('#scene4 .receipts .r10', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(10600px)'
          // })
          .to('#scene4 .receipts .r11', 8000, {
              delay: -8000,
              transform: 'translateZ(10200px)'
          })
          // .to('#scene4 .receipts .r12', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(9800px)'
          // })
          .to('#scene4 .receipts .r13', 8000, {
              delay: -8000,
              transform: 'translateZ(9400px)'
          })
          // .to('#scene4 .receipts .r14', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(9000px)'
          // })
          .to('#scene4 .receipts .r15', 8000, {
              delay: -8000,
              transform: 'translateZ(8600px)'
          })
          // .to('#scene4 .receipts .r16', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(8200px)'
          // })
          .to('#scene4 .receipts .r17', 8000, {
              delay: -8000,
              transform: 'translateZ(7800px)'
          })
          // .to('#scene4 .receipts .r18', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(7400px)'
          // })
          .to('#scene4 .receipts .r19', 8000, {
              delay: -8000,
              transform: 'translateZ(7000px)'
          })
          // .to('#scene4 .receipts .r20', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(6600px)'
          // })
          .to('#scene4 .receipts .r21', 8000, {
              delay: -8000,
              transform: 'translateZ(6200px)'
          })
          // .to('#scene4 .receipts .r22', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(5800px)'
          // })
          .to('#scene4 .receipts .r23', 8000, {
              delay: -8000,
              transform: 'translateZ(5400px)'
          })
          // .to('#scene4 .receipts .r24', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(5000px)'
          // })
          .to('#scene4 .receipts .r25', 8000, {
              delay: -8000,
              transform: 'translateZ(4600px)'
          })
          // .to('#scene4 .receipts .r26', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(4200px)'
          // })
          .to('#scene4 .receipts .r27', 8000, {
              delay: -8000,
              transform: 'translateZ(3800px)'
          })
          // .to('#scene4 .receipts .r28', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(3400px)'
          // })
          .to('#scene4 .receipts .r29', 8000, {
              delay: -8000,
              transform: 'translateZ(3000px)'
          })
          // .to('#scene4 .receipts .r30', 8000, {
          //     delay: -8000,
          //     transform: 'translateZ(2600px)'
          // })

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
              opacity: 1
          })
          .to('#scene4 .receipts .bc-label', 200, {
              opacity: 0,
              delay: -2500
          })
          .to('#scene4 .receipts .rc-label', 200, {
              opacity: 0,
              delay: -2500
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
        .to('#scene4 .tb-2', 1000, {
            delay: 0,
            z: 1000
        })
        .to('#scene4 .receipts .receipt-source-mobile', 200, {
              opacity: 0,
              delay: -1000
        })
        .to('#scene4 .tb-2', 0, {
            delay: 0,
            display: 'none'
        })
        .to('#scene4 .boundaries', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene4 .tb-3', 0, {
            delay: 0,
            display: 'block'
        })
        .to('#scene4 .tb-3__title', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .tb-3__title', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4 .tb-3__copy', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .tb-3__copy', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })

        .to('#scene4', 1, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                initBoundariesCanvas();
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4', 2500, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              boundariesAnimation(e.ratio, '');
            },window.blockchain.mobileTickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4', 2500, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              boundariesAnimation(e.ratio, '#f6a0a0');
            },window.blockchain.mobileTickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4', 2500, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              boundariesAnimation(e.ratio, '#a9acdb');
            },window.blockchain.mobileTickRate),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4', 2500, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
              boundariesAnimation(e.ratio, '#bef1e0');
            },window.blockchain.mobileTickRate),
            onUpdateParams: ["{self}"]
        })

        .to('#scene4 .tb-3', 1000, {
            delay: 0,
            z: 1000
        })
        .to('#scene4 .tb-3', 0, {
            delay: 0,
            display: 'none'
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
            delay: 0,
            display: 'block'
        })
        .to('#scene4 .tb-4__title', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .tb-4__title', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })
        .to('#scene4 .tb-4__copy', 400, {
            delay: 0,
            onUpdate: _.throttle(function(e) {
                printTextController('#scene4 .tb-4__copy', e.time(), e.totalDuration());
            },100),
            onUpdateParams: ["{self}"]
        })

        .to('#scene4 .new-threats-images', 500, {
            delay: 100,
            z: 0,
            opacity: 1
        })
        .to('#scene4 .threats-image-1', 300, {
            delay: 400,
            opacity: 0
        })
        .to('#scene4 .threats-image-2', 300, {
            delay: -300,
            opacity: 1
        })
        .to('#scene4 .tb-4', 1000, {
            delay: 400,
            z: 1000
        })
        .to('#scene4 .tb-4', 0, {
            delay: 0,
            display: 'none'
        })
        .to('#scene4 .new-threats-images', 400, {
            delay: -900,
            opacity: 0,
            z: 1000
        })
        .to('#scene4 .bc-header.chapter-4', 0, {
            display: 'block',
            delay: 0
        })
        .to('#scene4', 0, {
            delay: 200,
            display: 'none'
        })


          window.blockchain.scene4 = new ScrollMagic.Scene({
            triggerHook: 0,
            duration: window.blockchain.scene4Timeline.duration(),
            offset: window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.windowHeight
        })
        .on('enter', function(data) {
          $('#scene4').css('display','block');
            spawnStars(100, window.blockchain.scene3Timeline, '3');
            chapterChangeUpdate(4);
            if(data.scrollDirection === 'FORWARD') {
                toggleScene('5','add');
                toggleScene('3','remove');
              }
        })
        .on('leave', function(data) {
          $('#scene4').css('display','none');
          $('#scene5').css('display','none');
            if(data.scrollDirection === 'REVERSE') {
                toggleScene('3','add');
                toggleScene('5','remove');
              }
        })
        .on('progress', function(data) {
            trackSceneProgress('04 Beyond the First Steps', data.progress);
        })
        .setTween(window.blockchain.scene4Timeline)


      }

      function buildScene5() {

          window.blockchain.scene5Timeline = new TimelineMax({
              useFrames: true,
              ease: Linear.easeNone
          });
          window.blockchain.scene5Timeline
          .to('#animate5 *', 1, {
            clearProps: 'all'
          })
            .to('#scene5', 1, {
                delay: 0,
                display: 'block'
            })
            .to('#scene5 .bc-header.chapter-5', 0, {
                display: 'block',
            })
            .to('#scene5 .bc-header.chapter-5', 10, {
                opacity: 1,
                delay: 0
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
                z: titleFlyinZTranslation,
                delay: -100
            })
            .to('#scene5 .ctt-1', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene5 .ctt-1', e.time(), e.totalDuration());
                },100),
                onUpdateParams: ["{self}"]
            })
            .to('#scene5 .ctt-2', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene5 .ctt-2', e.time(), e.totalDuration());
                },100),
                onUpdateParams: ["{self}"]
            })
            .to('#scene5 .ctt-2', 1000, {
                delay: 500,
                z: 1000
            })
            .to('#scene5 .ctt-1', 1000, {
                delay: -1000,
                z: 1000
            })
            .to('#scene5 .chapter-title .fly-ins', 400, {
                transform: 'translateZ(1000px)',
                delay: -1000
            })
            .to('#scene5 .ct-1', 0, {
                display: 'block'
            })
            .to('#scene5 .ct-1', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene5 .ct-1', e.time(), e.totalDuration());
                },100),
                onUpdateParams: ["{self}"]
            })
            .to('#scene5 .ct-1', 500, {
                delay: 400,
                z: 1000
            })
          .to('#scene5 .chapter-title', 0, {
              display: 'none',
              delay: 1000
          })
          .to('#scene5 .takeaway-container', 0, {
              display: 'block',
              delay: 0
          })
          .to('#scene5', 1, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                  initTakeawayCanvas();
              },100),
              onUpdateParams: ["{self}"]
          })
          .to('#scene5', 3000, {
              delay: 0,
              onUpdate: _.throttle(function(e) {
                takeawayAnimation(e.ratio);
              },window.blockchain.mobileTickRate),
              onUpdateParams: ["{self}"]
          })

          .to('#scene5 .outro__lockup img', 1000, {
              delay: -500,
              z: 0
          })
          .to('#scene5 .outro__lockup img', 1000, {
              delay: -1000,
              opacity: 1
          })
          .to('#scene5', 0, {
              delay: 500,
              display: 'block'
          })

          .to('#scene5 .tb-1', 0, {
              delay: 0,
              display: 'block'
          })
          .to('#scene5 .tb-1__1', 0, {
              onUpdate: _.throttle(function(e) {
                  finishExperience(false);
              },100),
          })
          .to('#scene5 .tb-1__1', 0, {
                display: 'block',
                onUpdate: _.throttle(function(e) {
                  finishExperience(true);
              },100),
          })
          .to('#scene5 .tb-1__1', 400, {
                delay: 0,
                onUpdate: _.throttle(function(e) {
                    printTextController('#scene5 .tb-1__1', e.time(), e.totalDuration());
                },100),
                onUpdateParams: ["{self}"]
          })
          .to('#scene5 .tb-1__2', 1000, {
              delay: 0,
              opacity: 0.7
          })
          .set('.mobile-bottom-share', {css:{className:'+=active'}})
          .to('#scene5', 0, {
              delay: 1000,
              display: 'block'
          })


            window.blockchain.scene5 = new ScrollMagic.Scene({
              triggerHook: 0,
              duration: window.blockchain.scene5Timeline.duration(),
              offset: window.blockchain.scene1Timeline.duration() + window.blockchain.scene2Timeline.duration() + window.blockchain.scene3Timeline.duration() + window.blockchain.scene4Timeline.duration() + window.blockchain.windowHeight
          })
          .on('enter', function(data) {

            $('#scene5').css('display','block');
              //toggleScene('4','add');
              chapterChangeUpdate(5);
              spawnStars(100, window.blockchain.scene3Timeline, '3');

              if(data.scrollDirection === 'FORWARD') {
                toggleScene('3','remove');
              }
          })
          .on('leave', function(data) {
              //$('#scene5').css('display','none');
              if(data.scrollDirection === 'REVERSE') {
                toggleScene('3','add');
              }
          })
          .on('progress', function(data) {
              trackSceneProgress('05 The Takeaway', data.progress);
          })
          .setTween(window.blockchain.scene5Timeline)
      }

      function buildNav() {
        $('.mobile-nav a').on('click', function(e) {
            $('.definition-holder').removeAttr('style');
            // window.blockchain.letSceneToggle = true;
            // console.log('-- SCENE REMOVAL UNLOCKED --');
            e.preventDefault();
            //$('.mobile-bottom-share').hide();
            window.blockchain.navOpen = false;
            $('.nav-selector').removeClass('active');
            $('.mobile-nav').removeClass('active');
            $('.bc-header').show();
            $(this).removeClass('active');
            $('.mobile-bottom-share').removeClass('active');

            var scenes = [1,2,3,4,5];
            var chapter = $(this).data('chapter') - 1;
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
                while(x < chapter) {
                    scrollPoint += window.blockchain.scenes[x];
                    x++;
                }
            }
            // if (chapter === 2) {
            //   scrollPoint = scrollPoint - 800;
            // }
            // toggleScene('1','remove');
            // toggleScene('2','remove');
            // toggleScene('3','remove');
            // toggleScene('4','remove');
            // toggleScene('5','remove');
            scrollPoint += 500;
            // if (chapter === 0) {
            //   scrollPoint = scrollPoint - 200;
            // }
            // if (chapter === 2) {
            //   if (window.isTablet) {
            //     scrollPoint = scrollPoint - 1150;
            //   } else {
            //     scrollPoint = scrollPoint - 650;
            //   }
            // }
            //var preScrollPoint = scrollPoint - 500;
            window.scroll(0, scrollPoint);
            // window.setTimeout(function() {
              var actualChapter = chapter + 1;
              scenes.forEach(function(value) {

                if (value == actualChapter - 1 || value == actualChapter || value == actualChapter + 1 ) {
                  // window.blockchain.letSceneToggle = true;
                  // console.log('-- SCENE REMOVAL UNLOCKED --');
                  toggleScene(value, 'add')
                  // window.blockchain.letSceneToggle = false;
                  // console.log('-- SCENE REMOVAL LOCKED --');
                }
              });
              window.setTimeout(function() {
                $('#scene1').css('display','none')
                $('#scene2').css('display','none')
                $('#scene3').css('display','none')
                $('#scene4').css('display','none')
                $('#scene5').css('display','none')
                $('#scene'+actualChapter).css('display','block');
              }, 2000);
            //   $('body').animate({
            //     scrollTop: scrollPoint
            //   }, 2000)
            //   // window.blockchain.letSceneToggle = true;
            //   // console.log('-- SCENE REMOVAL UNLOCKED --');
            // }, 3000)
            //console.log('scroll-point : ' + scrollPoint);
            //window.scroll(0, scrollPoint);
            if(window.blockChainAnalyticsEmitter) {
              window.blockChainAnalyticsEmitter.emit('navigation_menu', {to: ('scene'+actualChapter), from: document.querySelector('[id*="scene"][style*="block"]')['id']});
            }

        });
      }

      function toggleScene(sceneNum, method) {
        //if (window.blockchain.letSceneToggle === true) {
          if(method === 'remove') {
            if ($('#animate'+sceneNum).length > 0) {
              window.blockchain['scene'+sceneNum+'markup'] = $('#animate'+sceneNum).detach();
              window.blockchain.blockchainController.removeScene(window.blockchain['scene'+sceneNum]);
              //$('#scene'+sceneNum).css('display', 'none');
            }
            if(window.blockChainAnalyticsEmitter) {
              window.blockChainAnalyticsEmitter.emit('toggle_scene_remove', {scene: sceneNum});
            }
          } else {
            if ($('#animate'+sceneNum).length <= 0) {
              $('#scene'+sceneNum).append(window.blockchain['scene'+sceneNum+'markup']);
              window.blockchain.blockchainController.addScene(window.blockchain['scene'+sceneNum]);
              //$('#scene'+sceneNum).css('display', 'block');
            }
            if(window.blockChainAnalyticsEmitter) {
              window.blockChainAnalyticsEmitter.emit('toggle_scene_add', {scene: sceneNum});
            }
          }
        //}
      }

      function typeFormFields(parentWrapper, field, progress, length) {
          var percent = progress/length
          var allFields = $(parentWrapper+'__category');
          allFields.each(function(index) {
              if (index < field) {
                  $(this).find('.content').each(function(){
                      $(this).html($(this).data('text'));
                  })
                  // console.log('print '+ index + ' full');
              } else if (index > field) {
                  $(this).find('.content').html('');
                  // console.log('print '+ index + ' blank');
              }
          });
          $(parentWrapper + ' .cat-'+field+' .content').each(function() {
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

      function makeDefinition(container, phrase) {
        var spacelessPhrase = phrase.replace(' ','');
        $(container+" .type-ins:contains("+phrase+")").html(function(_, html) {
          return html.split(phrase).join("<span class='definition' data-word='"+spacelessPhrase+"'>"+phrase+"</span>");
        });
      }

      function killDefinition(container, phrase) {
        $(container+":contains("+phrase+")").html(function(_, html) {
          return html.split(phrase).join(phrase);
        });
      }

      function printText(container, percentageComplete) {
          var content = container.find('.type-ins-holder');
          if(content.html() === undefined) {
            console.log('ERROR : ', container );
          }
          var arContent = content.html().split('');
          var currentSpot = Math.round(arContent.length * percentageComplete);
          container.find('.type-ins').html(content.html().substring(0, currentSpot));
      }

      function typeTextAndTitle(containerClass, progress, length, direction) {
              var textContainer = $('.'+containerClass);
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
              var textContainer = $('.'+containerClass);
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
              var textContainer = $('.'+containerClass);
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
          var textContainer = $('.'+containerClass);
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
          var nodes = $('.address .char');
          var percentageComplete = progress/length;
          var nodeToShow = Math.round(percentageComplete * nodes.length);
          nodes.each(function(index) {
              if (index <= nodeToShow) {
                  $(this).css('display', 'inline');
              } else {
                  $(this).css('display', 'none');
              }
          });
      }

      function preShowRandomText(containerClass) {
          var nodes = $('.address .char');
          nodes.css('display','none');
          window.blockchain.printInterval = window.setInterval( function() {
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
          var text = container.find('.h-'+target);
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
          var percentageComplete = progress/length;
          var container = $('.address .encryption-cover');
          var rows = $('.encrypt-row').length;
          var cols = $('.row-1 .bit').length;
          if(direction === 'reverse') {
              percentageComplete = 1-percentageComplete;
          }
          spawnEncryptionCubes('.row-1', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-2', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-3', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 100) / (length - 100);
          spawnEncryptionCubes('.row-4', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-5', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-6', Math.round(percentageComplete * cols));
          percentageComplete = (progress) / (length);
          spawnEncryptionCubes('.row-7', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 200) / (length - 200);
          spawnEncryptionCubes('.row-8', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-9', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-10', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 300) / (length - 300);
          spawnEncryptionCubes('.row-11', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-12', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-13', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-14', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 200) / (length - 200);
          spawnEncryptionCubes('.row-15', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 500) / (length - 500);
          spawnEncryptionCubes('.row-16', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-17', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-18', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-19', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-20', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 650) / (length - 650);
          spawnEncryptionCubes('.row-21', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-22', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-23', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 700) / (length - 700);
          spawnEncryptionCubes('.row-24', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-25', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 675) / (length - 675);
          spawnEncryptionCubes('.row-26', Math.round(percentageComplete * cols));
          percentageComplete = (progress - 725) / (length - 725);
          spawnEncryptionCubes('.row-27', Math.round(percentageComplete * cols));
          spawnEncryptionCubes('.row-28', Math.round(percentageComplete * cols));
      }

      function preEncryptLine(parentClass, rowClass, progress, length, direction) {
        //console.log('fire');
          var percentageComplete = progress/length;
          var container = $(parentClass);
          var letterHolders = container.find(rowClass + ' .char')
          var cols = container.find(rowClass + ' .char').length;
          spawnEncryptionLetters(rowClass, Math.round(percentageComplete * cols));
          letterHolders.each(function() {
              $(this).html(getRandomLetter());
          });
      }

      function encryptLine(parentClass, rowClass, progress, length, direction) {
          var percentageComplete = progress/length;
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

      function spawnEncryptionCubes(parentClass, rowClass, number, direction) {
          var x = 0;
          var rowBits = $(parentClass).find(rowClass + ' .bit');
          if (direction === 'reverse') {
              rowBits.each(function(index) {
                  if (index <= number) {
                      $(this).removeClass('show');
                  } else {
                      $(this).addClass('show');
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
          var x = 0;
          var rowBits = $(rowClass).find('.char');
          rowBits.each(function(index) {
              if (index <= number) {
                  $(this).addClass('show');
              } else {
                  $(this).removeClass('show');
              }
              x++;
          });
      }

      function spawnStars(amount, sceneTimeline, chapter) {
          if (!window.blockchain.isWebGL) {
              //console.log('spawning particles');
              var x = 1;
              var length = sceneTimeline.duration();
              var delay = length * -1;
              $('#scene'+chapter+' .particles').html('');
              console.log(length);
              while(x <= amount) {
                  var posX = getRandomPosition(-4000,4000);
                  var posZ = getRandomPosition(delay,0);
                  var new_posZ = posZ + length;
                  var particle = '<div class="particle p'+x+'" style="transform: translate3d('+posX+'px, 0, '+posZ+'px)">';
                  var $particle = $(particle);
                  $('#scene'+chapter+' .particles').append($particle);
                  sceneTimeline.to('#scene'+chapter+' .p'+x, length, {
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
              var cubeWrapper = $('<div class="cube-wrapper c'+cubeNumber+'" style="transform: translate3d(0, 0, '+startPos+'px)">');
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
              $('#animate'+scene).append(cubeWrapper);
              console.log('-- cube "#animate'+scene+' .c'+cubeNumber+'" spawned --');
              console.log('start: '+startPos+', end: '+endPos+', duration: '+scrollDuration+', delay: '+delay);
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
      }

      function finishExperience(isComplete) {
          if(isComplete) {
              $('.footer__share-container').show();
          } else {
              $('.footer__share-container').hide();
          }
      }

      var halifax = {x:200,y:150,complete:false};
      var boston = {x:180,y:177,complete:false};
      var belem = {x:246,y:295,complete:false};

      var frankfurt = {x:346,y:145,complete:false};
      var beirut = {x:400,y:190,complete:false};
      var fez = {x:310,y:217,complete:false};

      // var mapCities = [halifax, boston, belem, frankfurt, beirut, fez];
      var mapCityLines = [];


      function initMapCanvas() {

        if(!mapContext) {
            mapContext = mapCanvas.getContext('2d');
        }
        mapContext.canvas.width  = 800;
        mapContext.canvas.height = 400;
        context = mapContext;

        var color = 'white';

        drawCircle(halifax.x, halifax.y, 3, color);
        drawCircle(boston.x, boston.y,3, color);
        drawCircle(belem.x, belem.y, 3, color);
        drawCircle(frankfurt.x, frankfurt.y, 3, color);
        drawCircle(beirut.x, beirut.y, 3, color);
        drawCircle(fez.x, fez.y, 3, color);

      }

      function removeLine(city1, city2) {

        for(var i=0; i<mapCityLines.length; i++) {
          if(mapCityLines[i].city1.x === city1.x && mapCityLines[i].city2.x === city2.x) {
            mapCityLines.splice( i, 1 );
            //console.log('remove the line : ',mapCityLines.length);
          }
        }

      }

      function animateMapCanvas(citiesAry, amount) {

        if(!mapContext) {
            mapContext = mapCanvas.getContext('2d');
        }
        mapContext.canvas.width  = 800;
        mapContext.canvas.height = 400;
        context = mapContext;


        for(var j=0; j<citiesAry.length; j++) {

          var line = {city1: citiesAry[j].city1, city2: citiesAry[j].city2};

          if(amount === 1) {
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
        for(var i=0; i<mapCityLines.length; i++) {
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
        drawCircle(boston.x, boston.y,3, bostonColor);
        drawCircle(belem.x, belem.y, 3, 'yellow');
        drawCircle(frankfurt.x, frankfurt.y, 3, frankfurtColor);
        drawCircle(beirut.x, beirut.y, 3, beirutColor);
        drawCircle(fez.x, fez.y, 3, fezColor);

      }

      function chapterChangeUpdate(chapterNum) {
        window.blockchain.currentChapter = chapterNum;
      }
    }
});
