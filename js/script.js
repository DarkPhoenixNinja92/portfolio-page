const mobileMenu = document.querySelector('.nav-list');
const mobileMenuOpen = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
let main = document.querySelector('main');
const body = document.querySelector('body');
const allBtn = document.querySelector('.all');
const personalBtn = document.querySelector('.personal');
const educationBtn = document.querySelector('.educational');
const personal = document.querySelector('.personal-projects');
const educational = document.querySelector('.educational-projects');
let visibleProjects = 'all';

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
});

allBtn.addEventListener('click', () => {
    if(visibleProjects != 'all') {
        visibleProjects = 'all';
        personal.style.display = 'initial';
        educational.style.display = 'initial';
    }
});
personalBtn.addEventListener('click', () => {
    if(visibleProjects != 'personal') {
        visibleProjects = 'personal';
        personal.style.display = 'initial';
        educational.style.display = 'none';
    }
});

educationBtn.addEventListener('click', () => {
    if(visibleProjects != 'educational') {
        visibleProjects = 'educational';
        educational.style.display = 'initial';
        personal.style.display = 'none';
    }
})