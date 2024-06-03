const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startbtnEl = document.querySelector("#startbtn")
const pausebtnEl = document.querySelector("#pausebtn")
const resumebtnEl = document.querySelector("#resumebtn")
const resetbtnEl = document.querySelector("#resetbtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startbtn.addEventListener("click", startTimer); //Evendo do botao INICIAR//
pausebtn.addEventListener("click", pauseTimer);  //evento do botao PAUSAR//
resumebtn.addEventListener("click", resumeTimer); //Evento do botão CONTINUAR//
resetbtn.addEventListener("click", resetTimer);  //Evento do botão RESETAR//

function startTimer() {    //Comeca a funcionar o millisegundo e o segundo//
    interval = setInterval(() => {

        if(!isPaused) {

            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formalTime(minutes);
            secondsEl.textContent = formalTime(seconds);
            millisecondsEl.textContent = formatmilliseconds(milliseconds);
        }

    }, 10);

    //Faz com que ao apertar INICIAR o botao fique para pausar//
    startbtn.style.display = "none";
    pausebtn.style.display = "block";
}

function pauseTimer() { //Faz com que apos iniciado, o botão pause//
    isPaused = true;
    pausebtn.style.display = "none";
    resumebtn.style.display = "block";
    //Linha 16//
}

function resumeTimer() { //Faz com que quando pausado, ele possa Continuar//
    isPaused = false;
    pausebtn.style.display = "block";
    resumebtn.style.display = "none";
    //Linha 17//
}

function resetTimer() {
    //Limpa o intervalo (zera os minutos,segundos e millisegundos)//
    clearInterval(interval); 
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    //abaixo são os textos exibidos após resetar//
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    //Abaixo é escondido os botões PAUSA e CONTINUAR, mantendo apenas ou iniciar e reiniciar//
    startbtn.style.display = "block";
    pausebtn.style.display = "none";
    resumebtn.style.display = "none";

    //Linha 18//
}


function formalTime(time) {   //Funcao que deixa os minutos, segundos e minutos com a formatacao certa = 00:00 //
    return time < 10 ? `0${time}` : time;
    //Linha 37 e 38//
}

function formatmilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
    //Linha 39//
}
