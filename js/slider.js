$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$(document).ready(function(){
  $('.bxslider2').bxSlider();
});

$(document).ready(function(){
  $('.bxslider3').bxSlider();
});

$(document).ready(function(){
  $('.bxslider4').bxSlider();
});

$(document).ready(function(){
  $('.bxslider5').bxSlider();
});


var slider = $('.bxslider').bxSlider({
    mode: 'horizontal'
});

var slider2 = $('.bxslider2').bxSlider({
    mode: 'horizontal',
    touchEnabled: false
});

var slider3 = $('.bxslider3').bxSlider({
    mode: 'horizontal'
});

var slider4 = $('.bxslider4').bxSlider({
    mode: 'horizontal'
});

var slider5 = $('.bxslider5').bxSlider({
    mode: 'horizontal'
});

$('.right-arrow').click(function(){
  slider.goToNextSlide();
});

$('.left-arrow').click(function(){
  slider.goToPrevSlide();
});

$('.train-arrow-right').click(function(){
  slider2.goToNextSlide();
});

$('.train-arrow-left').click(function(){
  slider2.goToPrevSlide();
});

// $('.calendar-arrow-right').click(function(){
//   slider3.goToNextSlide();
// });

// $('.calendar-arrow-left').click(function(){
//   slider3.goToPrevSlide();
// });


$('.hide-calendar__next-month').click(function(){
  slider4.goToNextSlide();
});

$('.hide-calendar__prev-month').click(function(){
  slider4.goToPrevSlide();
});




var slideNow = 1,
slideCount = $('.listslider').children().length,
translateWidth = 0,
slideInterval = 2000;

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

$(document).ready(function() {
  // setInterval(nextSlide, slideInterval);
  $('.calendar-arrow-right').click(function() {
        nextSlide();
  });

  $('.calendar-arrow-left').click(function() {
        prevSlide();
  });

})





