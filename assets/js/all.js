import * as bootstrap from 'bootstrap';
import Swiper from 'swiper/bundle';

const menuBtn = document.querySelector('#menuBtn');
const menuCloseBtn = document.querySelector('#menuCloseBtn');
const bsOffcanvas = new bootstrap.Offcanvas('#mainMenu');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bsOffcanvas.show();
})

menuCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bsOffcanvas.hide();
})

const indexFunction = {
  mainBannerInit: () => {
    const mainBannerSwiper = new Swiper('#mainBanner', {
      loop: true,
      slidesPerView: 1,
      centeredSlides : true,
      speed: 1500,
      autoplay: {
        delay: 10000,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (idx, className) => {
          return `<span class="${className}">${idx + 1}</span>`
        }
      },
      navigation: {
        nextEl: '#mainBanner .swiper-button-next',
        prevEl: '#mainBanner .swiper-button-prev',
      },
    });
  },
  otherInit: () => {
    console.log('other');
  }
}

document.querySelector('#mainBanner') ? indexFunction.mainBannerInit() : '';
