 var swiper = new Swiper(".scrollbar", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          780: {
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
          1640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
       
      });
     