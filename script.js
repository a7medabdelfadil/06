let circles = document.querySelectorAll('.circle'),
    greenCircle = document.getElementById('green'),
    yellowCircle = document.getElementById('yellow'),
    redCircle = document.getElementById('red'),
    checker = 0,
    time = 3000;

function checkLed() {
    if (checker % 3 === 0) {
        greenCircle.classList.remove('hidden');
        yellowCircle.classList.add('hidden');
        redCircle.classList.add('hidden');
        checker++;
        time = 6000;
    } else if (checker % 3 === 1) {
        redCircle.classList.remove('hidden');
        yellowCircle.classList.add('hidden');
        greenCircle.classList.add('hidden');
        checker++;
        time = 6000;
    } else {
        yellowCircle.classList.remove('hidden');
        greenCircle.classList.add('hidden');
        redCircle.classList.add('hidden');
        checker++;
        time = 2000;
    }
}

checkLed();

function updateInterval() {
    clearInterval(timer);
    timer = setInterval(() => {
        checkLed();
        updateInterval();
    }, time);
}

let timer = setInterval(() => {
    checkLed();
    updateInterval();
}, time);



