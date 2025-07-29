let time = 0;
let timer = null;

function updateDisplay() {
    let ms = time % 1000;
    let sec = Math.floor(time / 1000) % 60;
    let min = Math.floor(time / 60000) % 60;
    let hr = Math.floor(time / 3600000);

    document.getElementById("display").textContent =
        `${String(hr).padStart(2, '0')} : ` +
        `${String(min).padStart(2, '0')} : ` +
        `${String(sec).padStart(2, '0')} : ` +
        `${String(ms).padStart(3, '0')}`;
}

document.getElementById("btn1").onclick = function () {
    if (timer) return;
    timer = setInterval(() => {
        time += 10;
        updateDisplay();
    }, 10);
};

document.getElementById("btn2").onclick = function () {
    clearInterval(timer);
    timer = null;
};

document.getElementById("btn3").onclick = function () {
    clearInterval(timer);
    timer = null;
    time = 0;
    updateDisplay();
};

updateDisplay();