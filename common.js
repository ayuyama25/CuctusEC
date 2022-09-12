/* ナビゲーション固定 */
window.addEventListener('scroll', function() {
  let nav = document.querySelector('.header-bar');
  let humburger = document.querySelector('.navigation-humburger');
  if ('scrollingElement' in document) {
    scrollTop = document.scrollingElement.scrollTop;
  } else {
    scrollTop = document.body.scrollTop;
  }
  //40pxスクロールしたらアンカーリンクを固定
  if (scrollTop > 40) {
    nav.classList.add("header-bar-fixed");
    humburger.classList.add("navigation-humburger-adjust");
  } else {
    nav.classList.remove("header-bar-fixed");
    humburger.classList.remove("navigation-humburger-adjust");
  };
});

/* ハンバーガーメニュー */
  const humburgerButtons = document.querySelector('.header-bar-nav');
  const humburger = document.querySelector('.navigation-humburger');
  const humburgerIconOpen = document.querySelector('.navigation-icon-open');
  const humburgerIconClose = document.querySelector('.navigation-icon-close');
  function toggleClass() {
    humburger.classList.toggle("navigation-collapse");
    humburgerIconOpen.classList.toggle("navigation-closed");
    humburgerIconClose.classList.toggle("navigation-closed");
  };
humburgerButtons.addEventListener('click', toggleClass);

/* スライダー */
const helloSwiper = new Swiper(".hello-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  allowTouchMove: false,
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
  allowSlidePrev: false,
  allowSlideNext: false,
});

const productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  },
  speed: 300,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const itemsSwiper = new Swiper(".items-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
		el: '.swiper-items-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '<img src="../img/item3-' + (index + 1) + '.jpg" alt="">' + '</span>';
		},
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});