// import {
//     Howler
// } from "./howler.js";

import {
    renderOutput
} from "./output.js";

//

let isStarted = false;
let remaningTime = 0;

function timerOnValue() {
    let timerInput = document.getElementById("time");
    return parseInt(timerInput.value);
}

let myTik;

let stopTimer = function stopTimer() {

    if (!isStarted) {
        return;
    }
    isStarted = false;
    // Таймер удаляется
    window.clearInterval(myTik);
    let timerInput = document.getElementById("time");
    timerInput.value = remaningTime;

}

stop_timer.onclick = stopTimer;

function timerTik() {

    --remaningTime; // Уменьшаем таймер
    console.log(remaningTime);
    let seconds = Math.floor(remaningTime % 60) // Получаем секунды
    let minutes = Math.floor(remaningTime / 60) % 60 // Получаем минуты
    let hours = Math.floor(remaningTime / 3600) % 60 // Получаем часы
    // Условие если время закончилось то...
    if (remaningTime <= 0) {
        stopTimer();
        // Выводит сообщение что время закончилось
        renderOutput("Время закончилось");
        var sound = new Howl({
            src: ['assets/beep-02.mp3'],
            html5: true
        });

        sound.play();
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        renderOutput(strTimer);
    }

}

start_timer.onclick = function timer() {

    if (isStarted) {
        return;
    }
    isStarted = true;

    remaningTime = timerOnValue();

    myTik = window.setInterval(timerTik, 1000);

}