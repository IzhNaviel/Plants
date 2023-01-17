const humb = document.querySelector('.burger__menu');
const popup = document.querySelector('.header__nav');
const menuLink = document.querySelector('.header__item')

humb.addEventListener('click', humbHandler);

function humbHandler(e) {
    e.preventDefault();
    humb.classList.toggle('active');
    popup.classList.toggle('active');
}

menuLink.addEventListener('click', menuLinkHandler);

function menuLinkHandler(l) {
    l.preventDefault();
    humb.classList.toggle('active');
    popup.classList.toggle('active');
}
