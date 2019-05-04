$(document).ready(function () {
  const $activeLinkEls = $('a.active');
  
  $activeLinkEls.each((i, element) => {
    const $collapseEl = $(element).closest('.collapse');

    if ($collapseEl.length < 1) {
      return;
    }

    $collapseEl.collapse();
  });
});