import 'jquery';
import 'bootstrap';
import '../css/main.scss';
require('./index');
import './gallery';
import './common';


import fontawesome from '@fortawesome/fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faPinterestSquare from '@fortawesome/fontawesome-free-brands/faPinterestSquare';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';




// Add the icon to the library so you can use it in your page
fontawesome.library.add(faPlus, faBars, faAngleRight, faFacebook, faInstagram, faMapMarkerAlt, faPhone, faEnvelope, faLinkedin, faPinterestSquare, faSortDown);


$(function () {
  $('.collapse').collapse('hide');

  $('#trigger').click(function () {
    $('#side-menu').toggleClass('active');

    if ($('#side-menu').hasClass('active')) {
      $('#site-content').append('<div id="hover-over"></div>');

      $('#hover-over').click(function () {
        $(this).remove();
        $('#side-menu').removeClass('active');
      });
    }
  });

  $('.trigger2').click(function () {
    $('#desktop-side-menu').toggleClass('active');
    $('.two-boxes').toggleClass('active');
  });


  //back to top button 
  if ($('#back-to-top').length) {
    var scrollTrigger = 20, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

});