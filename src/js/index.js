import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(function () {
  const carousels = [
    {
      name: '.home-slider',
      options: { dots: true }
    },
    {
      name: '.product-slider',
      options: {}
    }
  ];

  const defaultOptions = {
    items: 1,
    autoHeight: true,
    dots: false,
    nav: true,
    navText: [
      '<img class="ft-arrow ft-arrow--left" src="https://ministudio.rs/download/srelica-levo.png">',
      '<img class="ft-arrow ft-arrow--right" src="https://ministudio.rs/download/strelica-desno.png">'
    ],
    loop: true,
    autoplay: true,
    smartSpeed: 700
  };

  carousels.forEach(carousel => {
    let options = Object.assign({}, defaultOptions, carousel.options);
    $(carousel.name).owlCarousel(options);
  });
});

