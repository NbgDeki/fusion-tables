$(document).ready(function () {
    $('#jsImageGallery').owlCarousel({
        autoWidth: true,
        nav: true,
        rewind: true,
        navText: [
            '<img class="carousel-controls carousel-controls--left" src="https://www.fusiontables.rs/img/blue-left-arrow.jpg">', 
            '<img class="carousel-controls carousel-controls--right" src="https://www.fusiontables.rs/img/blue-right-arrow.jpg">'
        ],
        margin: 10
    });
});