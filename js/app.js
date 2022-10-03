const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const open = document.getElementById('openAPIProj');
const openGameShow = document.getElementById('openGameShow');
const openMarkdownPreviewer = document.getElementById('openMarkdownPreviewer');
const modalContainer = document.getElementById('modal_container_reactapi');
const gameShowContainer = document.getElementById('modal_container_game_show');
const markdownContainer = document.getElementById('modal_container_reactmarkdown');
const close = document.getElementById('closeAPIProj');
const closeGameShow = document.getElementById('closeGameShowProj');
const closeMarkdownProj = document.getElementById('closeMarkdownProj');
const menuItm = document.querySelectorAll('.mainMenu li a');

openMenu.addEventListener('click', () => {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
});
closeMenu.addEventListener('click', () => {
    mainMenu.style.top = '-100%';
});

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

openGameShow.addEventListener('click', () => {
    gameShowContainer.classList.add('show');
});
closeGameShow.addEventListener('click', () => {
    gameShowContainer.classList.remove('show');
});

openMarkdownPreviewer.addEventListener('click', () => {
    markdownContainer.classList.add('show');
});

closeMarkdownProj.addEventListener('click', () => {
    markdownContainer.classList.remove('show');
})



menuItm.forEach((menuClose => {
    menuClose.addEventListener('click', () => {
        mainMenu.style.top = '-100%';
    });
}));