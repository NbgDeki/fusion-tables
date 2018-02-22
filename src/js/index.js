import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoHeight: true,
        nav: true,
        navText: ['<img src="https://ministudio.rs/download/srelica-levo.png">', '<img src="https://ministudio.rs/download/strelica-desno.png">'],
        loop: true,
        autoplay: true,
        smartSpeed: 700,
    });
});

