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

    $('.product-slider').owlCarousel({
        items: 1,
        autoHeight: true,
        nav: true,
        navText: ['<img src="https://ministudio.rs/download/blue-left-arrow.jpg">', '<img src="https://ministudio.rs/download/blue-right-arrow.jpg">'],
        loop: true,
        autoplay: true,
        smartSpeed: 700,
    });
});

