window.addEventListener('scroll', () => {
  const scrollTopPosition = document.documentElement.scrollTop;
  const tableTopPosittion = document.querySelector('.footer').offsetTop;
  const getImage = document.querySelector('.overview__img');

  const mediaQuery = window.matchMedia('(max-width: 650px)');

  if (scrollTopPosition < tableTopPosittion) {
    const speed = getImage.getAttribute('speed');
    const movement = (scrollTopPosition * speed / 100);
    getImage.style = `transform: translateY(-${movement}px)`;

    if (mediaQuery.matches) {
      getImage.style = `transform: ${tableTopPosittion}`;
    }
  }
});