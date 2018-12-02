$(document).ready(function() {
  $(document).ready(function() {
    $('.bxslider').bxSlider();
  })

  $('.right-arrow').click(function(){
  slider.goToNextSlide();
  });

  $('.left-arrow').click(function(){
    slider.goToPrevSlide();
  });

  $(document).ready(function() {
    $('.bxslider2').bxSlider();
  })

  $('.train-arrow-right.about').click(function(){
    slider2.goToNextSlide();
  });

  $('.train-arrow-left.about').click(function(){
    slider2.goToPrevSlide();
  });
  


  $(document).ready(function() {
    $('.bxslider3').bxSlider();
  })

  $(document).ready(function() {
    $('.bxslider5').bxSlider();
  })

  $(document).ready(function() {
    $('.bxslider6').bxSlider();
  })

  $(document).ready(function() {
    $('.bxslider7').bxSlider();
  })

  var slider = $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true,
      speed: 1200
  });

  var slider2 = $('.bxslider2').bxSlider({
      mode: 'horizontal',
      touchEnabled: false
  });

  var date = new Date();
  var currentMonth = date.getMonth() + 1,
  currentYear = date.getFullYear(),
  currentDate = currentMonth+''+currentYear;
  var calendarItems = $('.news-calendar-item');
  var currentItem = calendarItems.index($('.news-calendar-item[id='+currentDate+']'));

  var slider3 = $('.bxslider3').bxSlider({
      mode: 'horizontal',
      startSlide: currentItem
  });

  var slider5 = $('.bxslider5').bxSlider({
      mode: 'horizontal'
  });

  var slider6 = $('.bxslider6').bxSlider({
      mode: 'horizontal'
  });

  $('.day__arrows_right').click(function(){
    slider6.goToNextSlide();
  });

  $('.day__arrows_left').click(function(){
    slider6.goToPrevSlide();
  });




  
 
  var carousel = $("#carousel");
  carousel.owlCarousel({
    loop: true,
    responsive: { 
      0: {
          items:1
      },
      550: {
          items:2
      },
      1030: {
          items:4
      }
    }
  });
  $('#js-prev').click(function () {
    carousel.trigger('owl.prev');
    return false;
  });
  $('#js-next').click(function () {
    carousel.trigger('owl.next');
    return false;
  });


  var date = new Date();
  var currentMonth = date.getMonth() + 1,
  currentYear = date.getFullYear(),
  currentDate = currentMonth+''+currentYear;

  var calendarItems = $('.calendar-item');
  var currentItem = calendarItems.index($('.calendar-item[id='+currentDate+']'));

  var slideNow = 1,
  slideCount = $('.listslider').children().length,
  translateWidth = 0,
  slideInterval = 2000;

  if (currentItem != -1) {
    translateWidth = -$('#slider').width()*(currentItem);
    $('.listslider').css({
      'transform':'translate('+translateWidth + 'px, 0)',
      '-webkit-transform':'translate('+translateWidth + 'px, 0)',
      '-ms-transform':'translate('+translateWidth + 'px, 0)',
    });
    slideNow = currentItem + 1;
    translateWidth = 0;
  }
  else {
    currentItem = $(calendarItems[calendarItems.length-1]).index();
    translateWidth = -$('#slider').width()*(currentItem);
    $('.listslider').css({
      'transform':'translate('+translateWidth + 'px, 0)',
      '-webkit-transform':'translate('+translateWidth + 'px, 0)',
      '-ms-transform':'translate('+translateWidth + 'px, 0)',
    });
    slideNow = currentItem + 1;
    translateWidth = 0;
  }

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.listslider').css('transform', 'translate(0,0)');
      slideNow = 1;
    } else {
      translateWidth = -$('#slider').width()*(slideNow);
      $('.listslider').css({
        'transform':'translate('+translateWidth + 'px, 0)',
        '-webkit-transform':'translate('+translateWidth + 'px, 0)',
        '-ms-transform':'translate('+translateWidth + 'px, 0)',
      });
      slideNow++;
    }
  }
  function prevSlide() {
      if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#slider').width() * (slideCount - 1);
        $('.listslider').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
      } else {
        translateWidth = -$('#slider').width() * (slideNow - 2);
        $('.listslider').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
  }


  $('.calendar-arrow-right').click(function() {
        nextSlide();
  });
  $('.calendar-arrow-left').click(function() {
        prevSlide();
  });

  
  //слайдер новостей 
  if ($(window).width() >= 551) {
    $('#example5').sliderPro({
        orientation: 'vertical',
        loop: false,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: true,
        autoplay: false,
    });
  }
})

$(window).resize(function() {
    var date = new Date();
    var currentMonth = date.getMonth() + 1,
    currentYear = date.getFullYear(),
    currentDate = currentMonth+''+currentYear;

    var calendarItems = $('.calendar-item');
    var currentItem = calendarItems.index($('.calendar-item[id='+currentDate+']'));

    var slideNow = 1,
    slideCount = $('.listslider').children().length,
    translateWidth = 0,
    slideInterval = 2000;

    if (currentItem != -1) {
      translateWidth = -$('#slider').width()*(currentItem);
      $('.listslider').css({
        'transform':'translate('+translateWidth + 'px, 0)',
        '-webkit-transform':'translate('+translateWidth + 'px, 0)',
        '-ms-transform':'translate('+translateWidth + 'px, 0)',
      });
      slideNow = currentItem + 1;
      translateWidth = 0;
    }
    else {
      currentItem = $(calendarItems[calendarItems.length-1]).index();
      translateWidth = -$('#slider').width()*(currentItem);
      $('.listslider').css({
        'transform':'translate('+translateWidth + 'px, 0)',
        '-webkit-transform':'translate('+translateWidth + 'px, 0)',
        '-ms-transform':'translate('+translateWidth + 'px, 0)',
      });
      slideNow = currentItem + 1;
      translateWidth = 0;
    }

    function nextSlide() {
      if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.listslider').css('transform', 'translate(0,0)');
        slideNow = 1;
      } else {
        translateWidth = -$('#slider').width()*(slideNow);
        $('.listslider').css({
          'transform':'translate('+translateWidth + 'px, 0)',
          '-webkit-transform':'translate('+translateWidth + 'px, 0)',
          '-ms-transform':'translate('+translateWidth + 'px, 0)',
        });
        slideNow++;
      }
    }
    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
          translateWidth = -$('#slider').width() * (slideCount - 1);
          $('.listslider').css({
              'transform': 'translate(' + translateWidth + 'px, 0)',
              '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
              '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
          });
          slideNow = slideCount;
        } else {
          translateWidth = -$('#slider').width() * (slideNow - 2);
          $('.listslider').css({
              'transform': 'translate(' + translateWidth + 'px, 0)',
              '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
              '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
          });
          slideNow--;
      }
    }
});