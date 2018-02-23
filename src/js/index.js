import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(function () {
    $('.home-slider').owlCarousel({
        items: 1,
        autoHeight: true,
        nav: true,
        navText: ['<img src="https://ministudio.rs/download/arrow-left.png">', '<img src="https://ministudio.rs/download/arrow-right.png">'],
        loop: true,
        autoplay: true,
        smartSpeed: 700,
    });

    var owl = $('.product-slider').owlCarousel({
        items: 1,
        autoHeight: true,
        nav: false,
        //navText: ['<img src="https://ministudio.rs/download/blue-left-arrow.jpg" class="blue-left-arrow">', '<img src="https://ministudio.rs/download/blue-right-arrow.jpg" class="blue-right-arrow">'],
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
});

