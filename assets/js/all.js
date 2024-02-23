// import * as bootstrap from 'bootstrap';
// import Swiper from 'swiper/bundle';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'

// console.log(Swiper);

// const menuBtn = document.querySelector('#menuBtn');
// const menuCloseBtn = document.querySelector('#menuCloseBtn');
// const bsOffcanvas = new bootstrap.Offcanvas('#mainMenu');

// menuBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   bsOffcanvas.show();
// })

// menuCloseBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   bsOffcanvas.hide();
// })

const indexFunction = {
  mainBannerInit: () => {
    const swiper = new Swiper('#mainBanner', {
      loop: true,
      initialSlide: 0,
      slidesPerView: 3,
      slidesPerGroup: 1,
      centeredSlides: false,
      spaceBetween: 0,
      watchOverflow: true,
      // autoplay: {
      //   delay: 3000,
      //   pauseOnMouseEnter: true
      // },
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
