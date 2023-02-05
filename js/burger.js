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

/*const serviceButton = document.querySelectorAll ('.service__button');
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

};*/

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


btnCity.addEventListener ('click', (clk) => {

    if (clk.target.classList == 'contacts__accordion-btn-title') {
        selectBtn.classList.toggle ('cities-wrapper-active');
    };    

    for (let m = 0; m<cardEl.length; m++) {
        cardEl[m].classList.remove ('city__card-active');

        document.querySelector('#canand').addEventListener ('click', () => {
            selectBtn.classList.remove ('cities-wrapper-active');
            document.querySelector('#canandaigua').classList.add ('city__card-active');
        });

        document.querySelector('#ny').addEventListener ('click', () => {
            selectBtn.classList.remove ('cities-wrapper-active');
            document.querySelector('#nyc').classList.add ('city__card-active');
        });

        document.querySelector('#yonk').addEventListener ('click', () => {
            selectBtn.classList.remove ('cities-wrapper-active');
            document.querySelector('#yonkers').classList.add ('city__card-active');
        });

        document.querySelector('#sher').addEventListener ('click', () => {
            selectBtn.classList.remove ('cities-wrapper-active');
            document.querySelector('#sherrill').classList.add ('city__card-active');
        });
    }

});

// ==CONTACTS END== //