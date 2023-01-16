const menuLink = document.querySelector('.header__link');
let menuMob = document.querySelector('.burger__menu');
const popupMen = document.querySelector('.header__nav');


menuLink.addEventListener('click', menuLinkHandler);

function menuLinkHandler(l) {
    l.preventDefault();
    menuMob.classList.toggle('active');
    popupMen.classList.toggle('active');
}
