$(document).ready(function() {
    if ($(window).width() <= 551) {
        $('#calendar-mobile').load("calendar-mobile-child.html");
    }    
    else 
    {
        $('#calendar-desktop').load("calendar-desktop-child.html");
    }     
});