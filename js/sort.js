$(document).ready(function() {
    //фильтр "Опытный уровень"
    $('.lesson-way__type--experience').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.experience'
        });
        $('.lesson-way__link.level').text('Опытный уровень');
    });
    //фильтр "Начинающий уровень"
    $('.lesson-way__type--beginner').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.beginner'
        });
        $('.lesson-way__link.level').text('Начинающий уровень');
    });
    //фильтр "Все тренировки"
    $('.lesson-way__type--all').click(function(e) {
        $('.day').isotope({ 
            filter: '*'
        });
        $('.lesson-way__link.all').text('Все тренировки');
        $('.lesson-way__link.level').text('Уровень подготовки');
    });
    //фильтр "Силовые тренировки"
    $('.lesson-way__type--power').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.power'
        });
        $('.lesson-way__link.all').text('Силовые');
    });
    //фильтр "Аэробные тренировки"
    $('.lesson-way__type--aerobic').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.aerobic'
        });
        $('.lesson-way__link.all').text('Аэробные');
    });
    //фильтр "Смешанные тренировки"
    $('.lesson-way__type--mixed').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.mixed'
        });
        $('.lesson-way__link.all').text('Смешанные');
    });
    //фильтр "Танцевальные тренировки"
    $('.lesson-way__type--dance').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.dance'
        });
        $('.lesson-way__link.all').text('Танцевальные');
    });
    //фильтр "Тренировки Body&Mind"
    $('.lesson-way__type--body-mind').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.body-mind'
        });
        $('.lesson-way__link.all').text('Body&Mind');
    });
    //фильтр "Программы в аква-зоне"
    $('.lesson-way__type--aqua').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.swimming'
        });
        $('.lesson-way__link.all').text('Аква-зона');
    });
    //фильтр "Авторские тренировки"
    $('.lesson-way__link--author').click(function(e) {
        $('.day').isotope({ 
            filter: '.day__lesson.author'
        })
    });

    //при мобильном разрешении
    if ($(window).width() < 551) {
        //фильтр "Опытный уровень"
        $('.lesson-way__type--experience').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.experience'
            });
        });
        //фильтр "Начинающий уровень"
        $('.lesson-way__type--beginner').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.beginner'
            })
        });
        //фильтр "Все тренировки"
        $('.lesson-way__type--all').click(function(e) {
            $('.days-training').isotope({ 
                filter: '*'
            })
        });
        //фильтр "Силовые тренировки"
        $('.lesson-way__type--power').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.power'
            })
        });
        //фильтр "Аэробные тренировки"
        $('.lesson-way__type--aerobic').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.aerobic'
            })
        });
        //фильтр "Смешанные тренировки"
        $('.lesson-way__type--mixed').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.mixed'
            })
        });
        //фильтр "Танцевальные тренировки"
        $('.lesson-way__type--dance').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.dance'
            })
        });
        //фильтр "Тренировки Body&Mind"
        $('.lesson-way__type--body-mind').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.body-mind'
            })
        });
        //фильтр "Программы в аква-зоне"
        $('.lesson-way__type--aqua').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.swimming'
            })
        });
        //фильтр "Авторские тренировки"
        $('.lesson-way__link--author').click(function(e) {
            $('.days-training').isotope({ 
                filter: '.day__lesson.author'
            })
        });
    }
})