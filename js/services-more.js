$(document).ready(function() {
    $('.services__more1').on('click', function (ev) {
        ev.preventDefault();
        $('.services__hide-content1').slideToggle(400);
    });

    $('.services__more2').on('click', function (ev) {
        ev.preventDefault();
        $('.services__hide-content2').slideToggle(400);
    });

     $('.services__more3').on('click', function (ev) {
        ev.preventDefault();
        $('.services__hide-content3').slideToggle(400);
    });
})