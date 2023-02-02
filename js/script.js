const topLink = document.querySelector('.top-link');

topLink.addEventListener('mouseover', () => {
    topLink.classList.add('text-danger');
    topLink.classList.add('bg-light');
    topLink.style.padding = '0.3em';
});

topLink.addEventListener('mouseout', () => {
    topLink.classList.remove('text-danger');
    topLink.classList.remove('bg-light');
});