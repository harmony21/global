$(document).ready(function() {
    $('.cards-btn__link1').on('click', function (ev) {
        ev.preventDefault();
        var element = $(ev.target);

        if ($(this).text() == 'Подробно') {
            $(this).text('Скрыть информацию');
        }
        else {
            $(this).text('Подробно');
        }

        element.toggleClass('active');
        $('.cards-more__content1').slideToggle(500);
    });

    $('.cards-btn__link2').on('click', function (ev) {
        ev.preventDefault();
        var element = $(ev.target);

        if ($(this).text() == 'Подробно') {
            $(this).text('Скрыть информацию');
        }
        else {
            $(this).text('Подробно');
        }

        element.toggleClass('active');
        $('.cards-more__content2').slideToggle(500);
    });

    $('.cards-btn__link3').on('click', function (ev) {
        ev.preventDefault();
        var element = $(ev.target);

        if ($(this).text() == 'Подробно') {
            $(this).text('Скрыть информацию');
        }
        else {
            $(this).text('Подробно');
        }

        element.toggleClass('active');
        $('.cards-more__content3').slideToggle(500);
    });

    $('.cards-btn__link4').on('click', function (ev) {
        ev.preventDefault();
        var element = $(ev.target);

        if ($(this).text() == 'Подробно') {
            $(this).text('Скрыть информацию');
        }
        else {
            $(this).text('Подробно');
        }
        
        element.toggleClass('active');
        $('.cards-more__content4').slideToggle(500);
    });
})