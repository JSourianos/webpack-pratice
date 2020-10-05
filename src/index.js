import pageLoader from './pageLoad.js';
import wipeContent from './wipeContent';
import createPizza from './pizza.js';
import createSpeciality from './polishSpecial';
import createDrinks from './drinks';


//Pizza tab
const pizzaBtn = document.getElementById('pizza-tab');
pizzaBtn.addEventListener('click', () => {
    wipeContent();
    createPizza();
});

//speciality tab
const specialityBtn = document.getElementById('speciality-tab');
specialityBtn.addEventListener('click', () => {
    wipeContent();
    createSpeciality();
});

//drinks tab
const drinksBtn = document.getElementById("drinks-tab");
drinksBtn.addEventListener('click', () => {
    wipeContent();
    createDrinks();
})


wipeContent();