import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(function () {
    $('.home-slider').owlCarousel({
        items: 1,
        autoHeight: true,
        nav: true,
        navText: ['<img src="https://ministudio.rs/download/srelica-levo.png">', '<img src="https://ministudio.rs/download/strelica-desno.png">'],
        loop: true,
        autoplay: true,
        smartSpeed: 700,
    });

    var owl = $('.product-slider').owlCarousel({
        items: 1,
        autoHeight: true,
        nav: true,
        navText: [
          '<img src="https://www.fusiontables.rs/img/blue-left-arrow.jpg" class="blue-arrow blue-arrow--left">',
          '<img src="https://www.fusiontables.rs/img/blue-right-arrow.jpg" class="blue-arrow blue-arrow--right">'
        ],
        loop: true,
        autoplay: true,
        smartSpeed: 700,
    });

    $(".blue-left-arrow").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".blue-right-arrow").click(function () {
        owl.trigger('next.owl.carousel');
    });
        
    $('.slajder').mouseover(function(){
        $(this).find('.owl-nav').fadeIn(500);
    });
    $('.slajder').mouseleave(function(){
        $(this).find('.owl-nav').fadeOut(500);
    });
});

