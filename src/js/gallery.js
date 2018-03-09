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

function _getArrow(dir) {
  return `<img class="carousel-controls carousel-controls--${dir}" src="https://www.fusiontables.rs/img/blue-${dir}-arrow.jpg">`;
}

$(document).ready(function () {
  // cache dom
  const $imageGallery = $('#jsImageGallery'),
    $image = $('#jsImageBox');

  // bind events
  $imageGallery.on('click', handleThumbnailClicks);

  // inti carousel
  $imageGallery.owlCarousel(options);

  // click handler
  function handleThumbnailClicks(evt) {
    let $target = $(evt.target);

    if (!$target.is('[data-is-thumbnail]')) return;

    replaceImageSrc($target.attr('src'));
  }

  function replaceImageSrc (oldSrc) {
    const newSrc = getBigSrc(oldSrc);
    const img = document.createElement('img');
    img.src = newSrc;

    $image.addClass('loading');
    
    img.onload = function () {
      $image.attr('src', newSrc);
      $image.removeClass('loading');
      $image.off('transitionend');
    }
  }

  function getBigSrc (src) {
    let srcBig = src.replace('small', 'big');
    srcBig = srcBig.replace('-S', '');
    return srcBig;
  }
});