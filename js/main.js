const swiper5 = new Swiper('.swiper-5', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  }
});

const swiper1 = new Swiper('.swiper-1', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  nested: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});