$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: 2000,
    navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })