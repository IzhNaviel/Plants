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

// ==Service START== //

const serviceButton = document.querySelectorAll ('.service__button');
const sItemTitle = document.querySelectorAll ('.service__item-title');
const sItem = document.querySelectorAll ('.service__item')


    for ( let z = 0; z<sItemTitle.length; z++) {
        //console.log (sItemTitle[z].innerHTML.split(','))  
    }; 


for ( let i =0 ; i< serviceButton.length ; i++) {
    serviceButton[i].addEventListener ('click', (sB) => {
        if (serviceButton[i].innerHTML === "Gardens") {
            sItemTitleSearch ()
        };
    })

};

// ==Service END== //

// ==Prices Start== //

const accBtn = document.querySelectorAll ('.accordion__item');
const itWrap = document.querySelectorAll ('.accordion__item-wrapper');
const textWrap = document.querySelectorAll ('.accordion__item-text-wrapper');
let count = 0;

 for ( let i = 0; i<accBtn.length; i++) {
    accBtn[i].addEventListener ('click', (e) => { 
        if (e.target.classList == 'accordion-btn-title') {
                accBtn[i].classList.toggle ('item-active');
                textWrap[i].classList.toggle ('accordion__item-text-wrapper-active');           
            } 
    });
 }

// ==Prices END== //

// ==CONTACTS Start== //

const btnCity = document.querySelector ('.contacts__accordion-button');
const selectBtn = document.querySelector ('.contacts__accordion-cities-wrapper');
const citiList = document.querySelectorAll ('.cities');
const cardEl = document.querySelectorAll ('.city__card');

console.log(cardEl);

btnCity.addEventListener ('click', (clk) => {

    if (clk.target.classList == 'contacts__accordion-btn-title') {
        selectBtn.classList.toggle ('cities-wrapper-active');
        //citiesHandler();
    };    

    for (let k = 0; k< citiList.length; k++) {
        
            citiList[k].addEventListener ('click', (b) => {
            if (b.target.id == '#canand') {
                selectBtn.classList.remove ('cities-wrapper-active');
                
            }
    });
    }
});

// ==CONTACTS END== //