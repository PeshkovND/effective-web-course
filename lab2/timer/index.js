let timer;
let inputs = document.querySelectorAll(".input");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
const defaultColor = 'rgb(255, 255, 255)', finishColor = 'red';

function step() {
    const time = getTime();
    let seconds = toSeconds(time[0], time[1]);
    --seconds;
    if (seconds <= 0) {
        document.body.style.backgroundColor = finishColor;
        clearInterval(timer);
        setTime(0, 0);
        lockButtons(true);
    } else {
        const remaingTime = toMinAndSeconds(seconds);
        setTime(remaingTime[0], remaingTime[1]);
    }
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
    validateTime(inputs[0].value, inputs[1].value)
    if (inputs[0].value === '0' && inputs[1].value === '0') {
        alert("Введите корректное время")
        return
    }
    lockInputs(true)
    startButton.disabled = true;
    stopButton.disabled = false;
    timer = setInterval(() => step(), 1000);
}

function stop() {
    clearInterval(timer);
    startButton.disabled = false
    stopButton.disabled = true
}

function reset() {
    clearInterval(timer);
    lockInputs(false);
    lockButtons(false);
    setTime(0, 0);
    document.body.style.backgroundColor = defaultColor;
}

function getTime() {
    return [Number(inputs[0].value), Number(inputs[1].value)]
}

function setTime(min, sec) {
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
