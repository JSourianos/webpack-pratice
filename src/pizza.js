import pageLoader from './pageLoad';

function createPizza()  {
    //create div elemeent
    const newDiv = document.createElement('div');
    newDiv.className = 'food-divs';
    newDiv.innerHTML = `
    <h2>Pizzas: <h2>
    <h4>Pepperoni Baked with Potato</h4>
    <h4>Hawaiian x Krakow Special</h4>
    <h4>Vodka Serving</h4>
    `;

    pageLoader(newDiv);
}

export default createPizza;