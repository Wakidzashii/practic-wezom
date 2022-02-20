var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1040: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1460: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });