$(document).ready(() => {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        nav: true,
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // portfolio-slider
  $("#portfolio-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items:2,
        center:true
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  $("#reviews").owlCarousel({
    loop: true,
    margin:10,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    items:1
  });
});
