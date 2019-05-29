jQuery(function($){

    'use strict';

    var front = $('.front');
    var back = $('.back');
    var top = $('.top');
    var bottom = $('.bottom');
    var left = $('.left');
    var right = $('.right');

    var tester = $('.encryptor');

    function runEncrypt(container) {
        var nodes = container.find('span');
        var possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()<>/?;:[]{}'.split('');
        var totalNodes = nodes.length;
        var totalCharacters = possibleCharacters.length;

        window.setInterval( function() {
            var nodeToChangeID1 = Math.floor(Math.random() * totalNodes);
            var nodeToChangeID2 = Math.floor(Math.random() * totalNodes);
            var nodeToChangeID3 = Math.floor(Math.random() * totalNodes);

            var charToUseID1 = Math.floor(Math.random() * totalCharacters);
            var charToUseID2 = Math.floor(Math.random() * totalCharacters);
            var charToUseID3 = Math.floor(Math.random() * totalCharacters);

            var nodeToChange1 = nodes[nodeToChangeID1];
            var nodeToChange2 = nodes[nodeToChangeID2];
            var nodeToChange3 = nodes[nodeToChangeID3];

            var charToUse1 = possibleCharacters[charToUseID1];
            var charToUse2 = possibleCharacters[charToUseID2];
            var charToUse3 = possibleCharacters[charToUseID3];

            nodeToChange1.innerHTML = charToUse1;
            nodeToChange2.innerHTML = charToUse2;
            nodeToChange3.innerHTML = charToUse3;
        }, 1)
    }

});
