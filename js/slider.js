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
      mode: 'horizontal',
      adaptiveHeight: true
  });

  $('.day__arrows_right').click(function(){
    slider6.goToNextSlide();
  });

  $('.day__arrows_left').click(function(){
    slider6.goToPrevSlide();
  });


  
 
  var carousel = $(".owl-carousel");
  carousel.owlCarousel({
    loop: true,
    dots: true,
    responsive: { 
      0: {
          items: 2,
          margin: 5
      },
      768: {
        items: 3
      },
      1030: {
          items: 4
      }
    }
  });
  $('#js-prev').click(function () {
    carousel.trigger('prev.owl.carousel');
    return false;
  });
  $('#js-next').click(function () {
    carousel.trigger('next.owl.carousel');
    return false;
  });


  var date = new Date();
  var currentMonth = date.getMonth() + 1,
  currentYear = date.getFullYear(),
  currentDate = currentMonth+''+currentYear;

  var calendarItems = $('.calendar-item');
  var currentItem = calendarItems.index($('.calendar-item[id='+currentDate+']'));  

  if ($(window).width() <= 551) {
    currentDate = currentYear + ', ' + currentMonth + ', ' + date.getDate();
    currentItem = calendarItems.index($('.calendar-item[data-date='+ "'" +currentDate+ "'" +']'));
  }

  var slideNow = 1,
  slideCount = $('.listslider').children().length,
  translateWidth = 0;

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

    if ($(window).width() <= 551) {
      var currentItems = [];
      for (var i = 0; i < slideCount; i++) {
        currentItems.push($(calendarItems[i]).data('date'));
      }

      var numCurrentItems = [];
      for (var i = 0; i < slideCount; i++) {
        numCurrentItems.push(new Date(currentItems[i]));
      }

      var numCurrentItem;
      for (var i = 0; i < slideCount; i++) {
        if (date < numCurrentItems[i]) {
          numCurrentItem = numCurrentItems[i];
          break;
        }
      }

      currentMonth = numCurrentItem.getMonth() + 1;
      currentDate = numCurrentItem.getFullYear() + ', ' + currentMonth + ', ' + numCurrentItem.getDate();
     
      currentItem = calendarItems.index($('.calendar-item[data-date='+ "'" +currentDate+ "'" +']'));  
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

  if ($(window).width() <= 551) {
    currentDate = currentYear + ', ' + currentMonth + ', ' + date.getDate();
    currentItem = calendarItems.index($('.calendar-item[data-date='+ "'" +currentDate+ "'" +']'));
  }

  var slideNow = 1,
  slideCount = $('.listslider').children().length,
  translateWidth = 0;

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

    if ($(window).width() <= 551) {
      var currentItems = [];
      for (var i = 0; i < slideCount; i++) {
        currentItems.push($(calendarItems[i]).data('date'));
      }

      var numCurrentItems = [];
      for (var i = 0; i < slideCount; i++) {
        numCurrentItems.push(new Date(currentItems[i]));
      }

      var numCurrentItem;
      for (var i = 0; i < slideCount; i++) {
        if (date < numCurrentItems[i]) {
          numCurrentItem = numCurrentItems[i];
          break;
        }
      }

      currentMonth = numCurrentItem.getMonth() + 1;
      currentDate = numCurrentItem.getFullYear() + ', ' + currentMonth + ', ' + numCurrentItem.getDate();
     
      currentItem = calendarItems.index($('.calendar-item[data-date='+ "'" +currentDate+ "'" +']'));  
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
  }
});