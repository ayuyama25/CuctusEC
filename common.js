window.addEventListener('DOMContentLoaded', function() {

});

const helloSwiper = new Swiper(".hello-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },
  speed: 300,
  grabCursor: true,
});

const productSwiper = new Swiper(".product-swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    900: {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  },
  speed: 300,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
