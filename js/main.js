$(function(){

    $('.slider').slick({
        arrows: false,
        infinite: true,
        dots: true,
        fade: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.header-btn').on('click', function (){
       $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function (){
        $('.menu').removeClass('active');
    })



});
