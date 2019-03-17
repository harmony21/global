//действия при скроллинге
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if ($(window).width() <= 551) {
        if( scrolled > 107 ) {
        $('.header__bottom').addClass('scrolled');
    }   
    if( scrolled <= 107 ) {     
        $('.header__bottom').removeClass('scrolled');
    }
    }
});

$(window).resize(function() {
    if ($(window).width() > 550) {
        $('.header__bottom').removeClass('scrolled');
    }
});