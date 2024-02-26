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
    const swiper = new Swiper('#mainBanner', {
      loop: true,
      // loopAdditionalSlides: 4,
      // slidesPerView: 1,
      centeredSlides : true,
      // initialSlide: 0,
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      // watchOverflow: true,
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
    // const swiper = new Swiper("#mySwiper", {
    //   slidesPerView: 4,
    //   slidesPerGroup: 1,
    //   centeredSlides: false,
    //   loop: true,
    //   slideToClickedSlide: true,
    //   spaceBetween: 10,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //     // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });
  },
  otherInit: () => {
    console.log('other');
  }
}

document.querySelector('#mainBanner') ? indexFunction.mainBannerInit() : '';
