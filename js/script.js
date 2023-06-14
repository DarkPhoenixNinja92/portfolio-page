const mobileMenu = document.querySelector('.nav-list');
const mobileMenuOpen = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

mobileMenuOpen.addEventListener('click', () => {
    mobileMenu
        .classList
        .add('nav-show');
    mobileMenuOpen.style.display = 'none';
    mobileMenuClose.style.display = 'initial';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu
        .classList
        .remove('nav-show');
    mobileMenuOpen.style.display = 'initial';
    mobileMenuClose.style.display = 'none';
})