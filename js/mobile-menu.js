$(document).ready(function() {
    $('.hamburg-menu').click(function(e) {
        e.preventDefault();
        $(".mobile-menu").fadeIn(300);
    });
    $('.close').click(function(e) {
        e.preventDefault();
        $(".mobile-menu").fadeOut(300);
    });
});