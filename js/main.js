const swiper5 = new Swiper('.swiper-5', {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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