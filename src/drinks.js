import pageLoader from './pageLoad';


function createDrinks() {
    const newDiv = document.createElement('div');
    newDiv.className = 'food-divs';
    newDiv.innerHTML = `
    <h2>Drinks: <h2>
    <h4>Coca Cola Zero</h4>
    <h4>Vodka with Red Bull</h4>
    <h4>Vodka Serving</h4>
    `;

    pageLoader(newDiv);
}

export default createDrinks;