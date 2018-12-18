$(document).ready(function() {
    var lightSlider = $("#lightSlider").lightSlider({
        item: 5,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:1000,
                settings: {
                    item:3,
                    slideMove:1,
                  }
            },
            {
                breakpoint: 760,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint: 550,
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
});