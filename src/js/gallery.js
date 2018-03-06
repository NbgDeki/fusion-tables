const options = {
    nav: true,
    // rewind: true,
    navText: [
        _getArrow('left'), 
        _getArrow('right')
    ],
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 4
        },
        992: {
            items: 5
        }
    }
};

function _getArrow (dir) {
    return `<img class="carousel-controls carousel-controls--${dir}" src="https://www.fusiontables.rs/img/blue-${dir}-arrow.jpg">`;
}

$(document).ready(function () {
    // cache dom
    const $imageGallery = $('#jsImageGallery'),
        $imageBox = $('#jsImageBox');

    // bind events
    $imageGallery.on('click', _handleThumbnailClicks);

    // inti carousel
    $imageGallery.owlCarousel(options);

    // click handler
    function _handleThumbnailClicks (evt) {
        let src,
            $target = $(evt.target);

        if (!$target.is('[data-is-thumbnail]')) return;

        src = $target.attr('src');
        $imageBox.attr('src', src);
    }
});