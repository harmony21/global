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

$(document).ready(function() {
    $('.day__lesson').click(function(e) {
        var item_title = $(this).find('#day__lesson-name').data('item-title'),
        item_time = $(this).find('#day__lesson-time').data('item-time'),
        item_duration = $(this).find('#day__lesson-duration').data('item-duration'),
        item_hall = $(this).find('#day__lesson-hall').data('item-hall'),
        item_level = $(this).find('#day__lesson-level').data('item-level'),
        item_pic = $(this).data('img-trainer'),
        item_trainer = $(this).data('trainer'),
        item_desc = $(this).data('desc'),
        item_price = $(this).data('price');
        $('#item_title').html(item_title);
        $('#item_time').html(item_time);
        $('#item_duration').html(item_duration);
        $('#item_hall').html(item_hall);
        $('#item_level').html(item_level);
        $('#item_pic').attr('src', item_pic);
        $('#item_trainer').html(item_trainer);
        $('#item_desc').html(item_desc);
        $('#item_price').html(item_price);
    })
});
