const burger = document.getElementById('burger__menu');
const nav = document.getElementById('header__nav');

document.onclick = function (l) {
    if (l.target.id == 'header__link') {
        burger.classList.remove('active');
        nav.classList.remove('active');
    }
}

document.onclick = function (c) {
    if (c.target.id != 'header__nav' && c.target.id != 'burger__menu') {
        burger.classList.remove('active');
        nav.classList.remove('active');
    }
}

burger.onclick = function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
}


let serviceButton = document.querySelector('.service__buttons-wrapper');

/*document.querySelector('.service__button').addEventListener ('click', (e) => {
    if (e.target.innerText === 'Gardens') {
        console.log ('Gardens')
    } else if (e.target.innerText === 'Lawnn') {
        console.log ('Lawnn')
    } else {console.log ('Planting')}
})*/



//let serviceItem = document.querySelectorAll ('.service__item');

//serviceItem.forEach(item => {

//})

let priceButton = document.querySelectorAll ('.accordion__item');
let textWrapper = document.querySelectorAll ('.accordion__item-text-wrapper');

priceButton.forEach(item => {
    console.log(item);
    let btnEv = item.querySelector('.accordion-btn-title');
    
    btnEv.addEventListener('click', function (z) {
            console.log(z.target.classList == 'accordion-btn-title');
            console.log(item.querySelector('.accordion__item'))
        });
})

/*console.log(priceButton);
console.log(textWrapper);

priceButton.addEventListener('click', (z) => 

{ 

        if (z.target.classList == 'accordion-btn-title') {
            priceButton.classList.toggle ('item-active');
            textWrapper.classList.toggle ('accordion__item-text-wrapper-active');
        };


});*/



