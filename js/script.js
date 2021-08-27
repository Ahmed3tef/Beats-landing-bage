const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const navMenu = document.querySelector('.nav__menu');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');

const scrollUpBtn = document.querySelector('.scrollup');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

navLinks.forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
);

function scrollUp() {
  if (this.scrollY >= 200) scrollUpBtn.classList.add('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// /*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__header, .section__title`, { delay: 600 });
sr.reveal(`.home__footer`, { delay: 700 });
sr.reveal(`.home__img`, { delay: 900, origin: 'top' });

sr.reveal(
  `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
  { origin: 'top', interval: 100 }
);
sr.reveal(`.specs__data, .discount__animate`, {
  origin: 'left',
  interval: 100,
});
sr.reveal(`.specs__img, .discount__img`, { origin: 'right' });
sr.reveal(`.case__img`, { origin: 'top' });
sr.reveal(`.case__data`);
