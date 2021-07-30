(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      // center: true,
      margin: 0,
      autoplay : true,
      autoplayTimeout: 3000,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          // nav: true
        },
        680: {
          items: 2,
          autoplay : false,
          nav: false,
          loop: true,
        },
        1000: {
          items: 2,
          autoplay : false,
          nav: false,
          loop: true,
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel2").owlCarousel({
      loop: true,
      //   center: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        680: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 2,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
}

window.addEventListener('load', () => {
  aos_init();
  setTimeout(() => { AOS.refresh(); }, 500);
});

