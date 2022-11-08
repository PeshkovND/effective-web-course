if (!localStorage.getItem('step')) {
    localStorage.setItem('step', '0')
}

let images = document.querySelectorAll('.slider_elem')

function changeClass() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0')
    }
    images[Number(localStorage.getItem('step'))].classList.remove('opacity0')
}

changeClass()
let timeout = setTimeout(() => step(1), 4000)

function step(increment) {
    clearTimeout(timeout)
    timeout = setTimeout(() => step(1), 4000)
    let current = Number(localStorage.getItem('step'))
    current += increment;

    if (current === images.length) {
        current = 0;
    }

    if (current === -1) {
        current = images.length - 1;
    }
    localStorage.setItem('step', String(current));
    changeClass()
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === "ArrowRight" || key === " ") { step(1); }
    if (key === "ArrowLeft") { step(-1); }
}, false);

