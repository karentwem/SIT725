$(document).ready(function(){

    $('.modal').modal();
    let originalColour = $('#modalbutton').css('background-color');

    $('#modalbutton').click(function() {
        $(this).css('background-color', 'blue'); 
    });

    $('#agreebutton').click(function() {
        $('#modalbutton').css('background-color', originalColour); 
    });

});
