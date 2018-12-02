$(document).ready(function() {

    //слайдер календаря в новостях
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


//слайдер новостей
  $(document).ready(function() {
    $('.bxslider7').bxSlider();
  })

  var date = new Date();
  var currentMonth = date.getMonth() + 1,
  currentYear = date.getFullYear(),
  currentDate = currentMonth+''+currentYear;
  var calendarItems = $('.news-calendar-item');
  var currentItem = calendarItems.index($('.news-calendar-item[id='+currentDate+']'));

  var slider7 = $('.bxslider7').bxSlider({
      mode: 'horizontal',
      startSlide: currentItem
  });

  $('.calendar-arrow-right.news-arrow').click(function(){
    slider7.goToNextSlide();
  });

  $('.calendar-arrow-left.news-arrow').click(function(){
    slider7.goToPrevSlide();
  });

  //переход от одного слайдера к другому (новости) (страница всех новостей)
  $('.hide-calendar__more').click(function(ev) {

    var linkCalendar = $(this).attr('id');
    $('.hide-calendar').css('visibility','hidden');

    var newsItems = $('.news-calendar-item');
    var newsItem = newsItems.index($('.news-calendar-item[id='+linkCalendar+']'));
    slider7.goToSlide(newsItem-1);
  })

  //переход от одного слайдера к другому (новости) (со страницы подробной новости)
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    if (sPageURL !== '') {
      var sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : sParameterName[1];
          }
      }
    }
  };

  var linkID = getUrlParameter('id');
  if (linkID !== undefined) {
    var newsItems = $('.news-calendar-item');
    var newsItem = newsItems.index($('.news-calendar-item[id='+linkID+']'));
    slider7.goToSlide(newsItem-1);
  }
  else {
    slider7.goToSlide(currentItem);
  }
});