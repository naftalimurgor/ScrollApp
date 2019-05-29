jQuery(function($){
    if (!$('body[data-view*=mobile]').length > 0) {
         'use strict';


    var possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()<>/?;:[]{}|+=-_~'.split('');
    var totalCharacters = possibleCharacters.length;
    var cursor = $('.cursor');
    var charToUseID = 0;
    var charToUse = '';
    window.setInterval( function() {
        charToUseID = Math.floor(Math.random() * totalCharacters);
        charToUse = possibleCharacters[charToUseID];
        cursor.html(charToUse);
    }, 100);
    }
});
