const humb = document.querySelector('.burger__menu');
const popup = document.querySelector('.header__nav');

humb.addEventListener('click', humbHandler);

function humbHandler(e) {
    e.preventDefault();
    humb.classList.toggle('active');
    popup.classList.toggle('active');
}

