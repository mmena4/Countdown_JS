//*****CONECTAR CON EL CONTADOR QUE PARTE DE 0
let chronometer = document.getElementById("chronometer");

//*****CONECTAR CON LA BOTONERA
let start = document.getElementById("startButton");
let reset = document.getElementById("resetButton");
let rec = document.getElementById("recButton");
let store = document.getElementById("storeTimes");

//***** */
let time = 0, interval = 0;
let checker = false;

//****INICIAR - PARAR CONTADOR ****/
init();

function init() {
    start.addEventListener('click', startChrono);
    reset.addEventListener('click', resetChrono);
    rec.addEventListener('click', recChrono);
}

//****startChrono*****/
function startChrono() {
    if(checker==false){
        interval = setInterval(function() {
            time += 0.01;
            chronometer.innerHTML = time.toFixed(2);
        }, 10);
        checker = true;
    } else {
        checker = false;
        clearInterval(interval);
    }
};

//****resetChrono*****/

function resetChrono() {
    checker = false;
    time = 0;
    chronometer.innerHTML = time + '.00';
    clearInterval(interval);
    while(storeTimes.firstChild) {
        storeTimes.removeChild(storeTimes.firstChild);
    }
}


//****recChrono*****/
function recChrono() {
    let p = document.createElement('ul');
    p.innerHTML = `
        <li>Time : ${time.toFixed(2)}</li>
    `;
    storeTimes.appendChild(p);
}



