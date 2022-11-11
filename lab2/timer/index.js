let timer;
const inputs = document.querySelectorAll(".input");
const timesButtons = document.querySelectorAll(".times_panel button");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const defaultColor = 'rgb(255, 255, 255)'
const finishColor = 'red';
const music = new Audio("./public/music.mp3");
music.loop = true;

const storageMinutes = localStorage.getItem('min')
const storageSeconds = localStorage.getItem('sec')
const state = localStorage.getItem('state');

inputs[0].addEventListener('input', () => {
    localStorage.setItem('min', inputs[0].value);
})
inputs[1].addEventListener('input', () => {
    localStorage.setItem('sec', inputs[1].value);
})

if (!storageMinutes && !storageSeconds) {
    setTime(0, 0);
} else {
    setTime(storageMinutes, storageSeconds);
    switch (state) {
        case "start": start();
            break;
        case "stop": stop();
            break;
        case "ring": ring();
            break
    }
}

function step() {
    const time = getTime();
    let seconds = toSeconds(time[0], time[1]);
    --seconds;
    if (seconds <= 0) {
        ring()
        return
    } 
    const remaingTime = toMinAndSeconds(seconds);
    setTime(remaingTime[0], remaingTime[1]);
    
}

function validateTime(min, sec) {
    if (Number(min) <= 0) {
        min = 0
    }
    if (Number(sec) <= 0 || Number(sec) > 59) {
        sec = 0
    }
    setTime(min, sec)
}

function start() {
    localStorage.setItem('state', 'start');
    music.currentTime = 0;
    validateTime(inputs[0].value, inputs[1].value)
    if (inputs[0].value === '0' && inputs[1].value === '0') {
        alert("Введите корректное время")
        return
    }
    lockInputs(true);
    lockTimesButtons(true);
    startButton.disabled = true;
    stopButton.disabled = false;
    timer = setInterval(() => step(), 1000);
}

function stop() {
    localStorage.setItem('state', 'stop');
    clearInterval(timer);
    lockInputs(true);
    lockTimesButtons(true);
    startButton.disabled = false
    stopButton.disabled = true
}

function reset() {
    localStorage.removeItem('state');
    music.pause()
    clearInterval(timer);
    lockTimesButtons(false);
    lockInputs(false);
    lockButtons(false);
    setTime(0, 0);
    document.body.style.backgroundColor = defaultColor;
}

function getTime() {
    return [Number(inputs[0].value), Number(inputs[1].value)]
}

function setTime(min, sec) {
    localStorage.setItem('min', min);
    localStorage.setItem('sec', sec);
    inputs[0].value = min;
    inputs[1].value = sec;
}

function toSeconds(min, sec) {
    return min * 60 + sec
}

function toMinAndSeconds(sec) {
    return [Math.floor(sec / 60), sec % 60]
}

function lockInputs(value) {
    inputs[0].disabled = value;
    inputs[1].disabled = value;
}

function lockButtons(value) {
    startButton.disabled = value;
    stopButton.disabled = value;
}

function lockTimesButtons(value) {
    timesButtons[0].disabled = value
    timesButtons[1].disabled = value
    timesButtons[2].disabled = value
}

function ring() {
    localStorage.setItem('state', 'ring');
    lockInputs(true);
    lockTimesButtons(true);
    music.play()
    document.body.style.backgroundColor = finishColor;
    clearInterval(timer);
    setTime(0, 0);
    lockButtons(true);
}