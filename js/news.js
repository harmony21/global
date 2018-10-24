$(document).ready(function() {
  $(document).ready(function() {
    $('.bxslider4').bxSlider();
  });

  var newsItems = $('.bxslider4__item'); 
  var news = $('.news-show');
  lastNews = news[news.length - 1],
  currentSlide = lastNews.closest('.bxslider4__item');
  currentSlideNumber = newsItems.index(currentSlide);

  var slider4 = $('.bxslider4').bxSlider({
      mode: 'horizontal',
      startSlide: currentSlideNumber
  });

  $('.hide-calendar__next-month').click(function(){
      slider4.goToNextSlide();
  });

  $('.hide-calendar__prev-month').click(function(){
      slider4.goToPrevSlide();
  });

  var newYears = $('.new-year'),
  currentYearSlide = newYears[0];
  newYearSlide = newYears[1];
  var newYearSlideIndex = newsItems.index(newYearSlide),
  currentYearSlideIndex = newsItems.index(currentYearSlide);

  $('.hide-calendar__next-year').click(function(){
      slider4.goToSlide(newYearSlideIndex);
  });

  $('.hide-calendar__prev-year').click(function(){
    slider4.goToSlide(currentYearSlideIndex);
  });
});