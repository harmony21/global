$(document).ready(function() {

    $('.btn__link--order').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper-order").fadeIn(400);
        $(".form-order").fadeIn(400);   
    });
    $('.parallax-left').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper-order").fadeIn(400);
        $(".form-order").fadeIn(400);   
    });
    $('.parallax-right').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper-order").fadeIn(400);
        $(".form-order").fadeIn(400);   
    });
    $('.order').on('click', function (ev) {
        ev.preventDefault;
        $(".mobile-menu").fadeOut(300);
        $(".wrapper-order").fadeIn(400);
        $(".form-order").fadeIn(400);   
    });


    $('.wrapper-order').on('click', function (ev) {
        $(".form-order").fadeOut(400);   
        $(".wrapper-order").fadeOut(500);
    });


    $('.btn__link').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper-more").fadeIn(400);
        $(".form-more").fadeIn(400);   
    });
    $('.wrapper-more').on('click', function (ev) {
        $(".form-more").fadeOut(400);   
        $(".wrapper-more").fadeOut(500);
    });

    $('.price__link').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper-price").fadeIn(400);
        $(".form-price").fadeIn(400);   
    });
    $('.wrapper-price').on('click', function (ev) {
        $(".form-price").fadeOut(400);   
        $(".wrapper-price").fadeOut(500);
    });
    $('.wrapper-price').on('click', function (ev) {
        $(".form-modal").fadeOut(400);   
        $(".wrapper-modal").fadeOut(500);
    });


    $('.btn').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper-modal").fadeIn(400);
        $(".form-modal").fadeIn(400);   
    });
    $('.wrapper-modal').on('click', function (ev) {
        $(".form-modal").fadeOut(400);   
        $(".wrapper-modal").fadeOut(500);
    });
    $('.wrapper-order').on('click', function (ev) {
        $(".form-modal").fadeOut(400);   
        $(".wrapper-modal").fadeOut(500);
    });
    $('.wrapper-more').on('click', function (ev) {
        $(".form-modal").fadeOut(400);   
        $(".wrapper-modal").fadeOut(500);
    });

});