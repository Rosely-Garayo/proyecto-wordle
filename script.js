let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

window.addEventListener('load', init);

function init() {
    const button = document.getElementById("guess-button");
    button.addEventListener("click", intentar);
}

function intentar() {
    const intento = leerIntento();
    if (intento === palabra) {
        terminar("<h1>GANASTE:)</h1>");
        return;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (intento[i] === palabra[i]) { // VERDE
            SPAN.textContent = intento[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(intento[i])) { // AMARILLO
            SPAN.textContent = intento[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else { // GRIS
            SPAN.textContent = intento[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

    intentos--;
    if (intentos === 0) {
        terminar("<h1>PERDISTE:(</h1>");
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    const contenedor = document.getElementById('guesses');
    contenedor.innerHTML += mensaje;
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value.toUpperCase();
    return intento;
}
