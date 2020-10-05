import pageLoader from './pageLoad'

function createSpeciality() {
    const newDiv = document.createElement('div');
    newDiv.className = 'food-divs';
    newDiv.innerHTML = `
    <h2>Polish Specialties:  <h2>
    <h4>Pierogi</h4>
    <h4>Oscypek</h4>
    <h4>Kielbasa</h4>
    `;

    pageLoader(newDiv);
}

export default createSpeciality;