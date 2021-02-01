document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page'),
    logo = document.querySelector('.logo'),
    nav = document.querySelector('.menu'),
    modal = document.querySelector('.modal'),
    burgerMenu = document.querySelector('.burger-menu'),
    slider = document.querySelector('.slider');

  const bodyWidth = document.body.offsetWidth,
    windowWidth = window.innerWidth,
    scrollWidth = windowWidth - bodyWidth;

  const mq = window.matchMedia('(max-width: 992px)');

  const widthChange = (mq) => {
    if (mq.matches) {
      modal.insertAdjacentElement('beforeend', nav);
    } else {
      logo.insertAdjacentElement('afterend', nav);
      burgerMenu.classList.remove('burger-menu--active');
      modal.classList.remove('modal--active');
    }
  };

  widthChange(mq);

  mq.addEventListener('change', widthChange);

  burgerMenu.addEventListener('click', () => {
    page.classList.add('page--lock');
    burgerMenu.classList.toggle('burger-menu--active');
    modal.classList.toggle('modal--active');

    if (modal.classList.contains('modal--active')) {
      slider.classList.add('slider--hide');
      page.style.paddingRight = `${scrollWidth}px`;
      modal.style.paddingRight = `${scrollWidth}px`;
    } else {
      page.classList.remove('page--lock');
      slider.classList.remove('slider--hide');
      page.style.paddingRight = ``;
      modal.style.paddingRight = ``;
    }
  });
});

const scrollBtn = document.querySelector('.scroll-btn');
scrollBtn.addEventListener('click', () => {
  document.documentElement.scroll({ top: 0, behavior: 'smooth' });
});


// SLIDER
var swiper1 = new Swiper('.slider', {
  loop: true,
  navigation: {
    nextEl: '.slider__btn--prev',
    prevEl: '.slider__btn--next',
  },
});