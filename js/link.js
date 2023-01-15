const menuLink = document.querySelector('.header__link');
let menuMob = document.querySelector('.header__nav');


menuLink.onclick = () => {
if (menuMob.classList.toggle('active')) {
    menuMob.classList.style.display = "none";
}
};
