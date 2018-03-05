$(document).ready(function () {
    // cache dom
    const $imageGallery = $('#jsImageGallery'),
        $imageBox = $('#jsImageBox');

    // bind events
    $imageGallery.on('click', _handleThumbnailClicks);

    // inti carousel
    // TODO Add responsive brakepoints
    $imageGallery.owlCarousel({
        // autoWidth: true,
        items: 5,
        nav: true,
        // rewind: true,
        navText: [
            '<img class="carousel-controls carousel-controls--left" src="https://www.fusiontables.rs/img/blue-left-arrow.jpg">', 
            '<img class="carousel-controls carousel-controls--right" src="https://www.fusiontables.rs/img/blue-right-arrow.jpg">'
        ],
        margin: 10
    });

    // click handler
    function _handleThumbnailClicks (evt) {
        let src,
            $target = $(evt.target);

        if (!$target.is('[data-is-thumbnail]')) return;

        src = $target.attr('src');
        $imageBox.attr('src', src);
    }
});