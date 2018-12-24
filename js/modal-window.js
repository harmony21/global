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
    $(".trainings__item").fancybox();
    $('.training__item').fancybox();
});


$(document).ready(function() {
  $('.hide-content-lesson__close').on('click', function (e) {
    e.preventDefault()
    $.fancybox.close();
  })

  $('.training-more__close').on('click', function (e) {
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

    $('.training__item').click(function(e) {
        var item_title = $(this).find('.training__link').data('item-title'),
        item_desc = $(this).data('item-desc'),
        item_subtitle1 = $(this).data('subtitle1'),
        item_subtitle2 = $(this).data('subtitle2'),
        item_subtitle2_desc = $(this).data('subtitle2-desc'),
        item_subtitle3 = $(this).data('subtitle3'),
        item_subtitle3_desc = $(this).data('subtitle3-desc'),
        item_subtitle4 = $(this).data('subtitle4'),
        item_subtitle4_desc = $(this).data('subtitle4-desc'),
        item_gallery1 = $(this).data('gallery1'),
        item_gallery2 = $(this).data('gallery2'),
        item_gallery3 = $(this).data('gallery3');
        $('.training-more__title').html(item_title);
        $('.training-more__text').html(item_desc);
        $('#subtitle1').html(item_subtitle1);
        $('#subtitle2').html(item_subtitle2);
        $('#subtitle2-text').html(item_subtitle2_desc);
        $('#subtitle3').html(item_subtitle3);
        $('#subtitle3-text').html(item_subtitle3_desc);
        $('#subtitle4').html(item_subtitle4);
        $('#subtitle4-text').html(item_subtitle4_desc);
        $('#gallery1').html(item_gallery1);
        $('#gallery2').html(item_gallery2);
        $('#gallery3').html(item_gallery3);

        var lightSlider = $("#lightSlider").lightSlider({
            item: 4,
            responsive : [
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1,
                      }
                },
                {
                    breakpoint: 550,
                    settings: {
                        item:2,
                        slideMove:1
                      }
                },
                {
                    breakpoint: 440,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
        }); 
        $('.left-arrow--trainings').click(function(){
            lightSlider.goToPrevSlide(); 
        });
        $('.right-arrow--trainings').click(function(){
            lightSlider.goToNextSlide(); 
        });
    
    
        var lightSlider2 = $("#lightSlider2").lightSlider({
            item: 4,
            responsive : [
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1,
                      }
                },
                {
                    breakpoint: 550,
                    settings: {
                        item:2,
                        slideMove:1
                      }
                },
                {
                    breakpoint: 440,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
        }); 
        $('.left-arrow--trainings-2').click(function(){
            lightSlider2.goToPrevSlide(); 
        });
        $('.right-arrow--trainings-2').click(function(){
            lightSlider2.goToNextSlide(); 
        });
    
    
        var lightSlider3 = $("#lightSlider3").lightSlider({
            item: 4,
            responsive : [
                {
                    breakpoint:860,
                    settings: {
                        item:3,
                        slideMove:1,
                      }
                },
                {
                    breakpoint: 550,
                    settings: {
                        item:2,
                        slideMove:1
                      }
                },
                {
                    breakpoint: 440,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
        }); 
        $('.left-arrow--trainings-3').click(function(){
            lightSlider3.goToPrevSlide(); 
        });
        $('.right-arrow--trainings-3').click(function(){
            lightSlider3.goToNextSlide(); 
        });
    })
});