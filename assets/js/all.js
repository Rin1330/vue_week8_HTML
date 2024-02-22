import * as bootstrap from 'bootstrap';
import Swiper from 'swiper/bundle';

// console.log(Swiper);

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
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (idx, className) => {
          return `<span class="${className}">${idx + 1}</span>`
        }
      },
    
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  otherInit: () => {
    console.log('other');
  }
}

document.querySelector('#mainBanner') ? indexFunction.mainBannerInit() : '';
