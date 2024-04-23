// Función para convertir de Celsius a otras escalas
function celsiusToOthers(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    let kelvin = celsius + 273.15;
    let rankine = (celsius + 273.15) * 9/5;
    let reaumur = celsius * 4/5;
    let delisle = (100 - celsius) * 3/2;
    let newton = celsius * 33/100;
    let gasq = celsius * 11/50 + 12;
    let galileo = celsius * 11/50 + 7.5;

    return {
        Fahrenheit: fahrenheit,
        Kelvin: kelvin,
        Rankine: rankine,
        Réaumur: reaumur,
        Delisle: delisle,
        Newton: newton,
        Gasq: gasq,
        Galileo: galileo
    };
}

function convertirTemperaturas() {
    let inputTemperaturas = document.getElementById('temperaturas').value;
    let temperaturas = inputTemperaturas.split(',').map(temp => parseFloat(temp.trim()));

    let resultadosHTML = '';

    temperaturas.forEach(celsius => {
        let resultado = celsiusToOthers(celsius);
        resultadosHTML += `<p class="fw-bold">${celsius}°C equivale a los siguientes grados en las diferentes escalas:</p>`;
        resultadosHTML += `<ul class="list-group">`;
        for (let escala in resultado) {
            resultadosHTML += `<li class="list-group-item">${resultado[escala]} ${escala}</li>`;
        }
        resultadosHTML += `</ul>`;
    });

    document.getElementById('resultados').innerHTML = resultadosHTML;
}
