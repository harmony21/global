$(document).ready(function() {
    if ($(window).width() < 551) {
        $(".team__item").removeAttr('data-fancybox'); 
        $(".team__item").removeAttr('data-src'); 
    }
    else {
        $(".team__item").fancybox();
        $(".team__name").removeAttr('href');
    }
});

$(window).resize(function() {
    if ($(window).width() < 551) {
        $(".team__item").removeAttr('data-fancybox'); 
        $(".team__item").removeAttr('data-src');
    }
    if ($(window).width() >= 551) {
        $(".team__item").attr('data-fancybox'); 
        $(".team__item").attr('data-src');
        $(".team__item").fancybox();
    }
});


    
$(document).ready(function() {
    $(".gallery").fancybox();
});


$(document).ready(function() {
  $('.hide-content-lesson__close').on('click', function (e) {
    e.preventDefault()
    $.fancybox.close();
  })
});