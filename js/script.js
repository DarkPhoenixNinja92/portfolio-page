const mobileMenu = document.querySelector('.nav-list');
const mobileMenuOpen = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const main = document.querySelector('main');
const body = document.querySelector('body');

mobileMenuOpen.addEventListener('click', () => {
    main.style.position = 'absolute';
    main.style.top = '0';
    body.style.overflow = 'hidden';
    mobileMenu
        .classList
        .add('nav-show');
    mobileMenuOpen.style.display = 'none';
    mobileMenuClose.style.display = 'initial';
});

mobileMenuClose.addEventListener('click', () => {
    main.style.position = 'initial';
    body.style.overflow = 'scroll';
    mobileMenu
        .classList
        .remove('nav-show');
    mobileMenuOpen.style.display = 'initial';
    mobileMenuClose.style.display = 'none';
})