$(document).ready(function() {
    if ($(window).width() <= 551) {
        $('#time-table-mobile').load("time-table-mobile.html")
    }         
});
$(window).resize(function() {
    if ($(window).width() === 551) {
        $('#time-table-mobile').load("time-table-mobile.html")
    }         
});