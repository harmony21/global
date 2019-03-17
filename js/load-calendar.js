$(document).ready(function() {
    if ($(window).width() <= 551) {
        $('#calendar-mobile').load("html/calendar-mobile.html");
    }    
    else 
    {
        $('#calendar-desktop').load("html/calendar-desktop.html");
    }     
});