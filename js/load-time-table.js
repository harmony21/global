$(document).ready(function() {
    if ($(window).width() <= 551) {
        $('#time-table-mobile').load("time-table-mobile.html");
    }    
    else {
        $('#time-table-desktop').load("time-table-desktop.html");
    }     
});