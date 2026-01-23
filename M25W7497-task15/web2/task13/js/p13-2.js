let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let timerId = null;
let isRunning = false;
let dx = 1;
let dy = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if (x < 30) x = 30;
    if (x > canvas.width - 30) x = canvas.width - 30;
    if (y < 30) y = 30;
    if (y > canvas.height - 30) y = canvas.height - 30;
}

document.querySelector('#btn').addEventListener('click', function () {
    if (isRunning) {
        clearInterval(timerId);
        isRunning = false;
        this.textContent = '開始';
    } else {
        timerId = setInterval(draw, 20);
        isRunning = true;
        this.textContent = '停止';
    }
});

document.querySelector('#btn1').addEventListener('click', function () {
    dx = -1;
    dy = 0;
});

document.querySelector('#btn2').addEventListener('click', function () {
    dx = 0;
    dy = -1;
});

document.querySelector('#btn3').addEventListener('click', function () {
    dx = 0;
    dy = 1;
});

document.querySelector('#btn4').addEventListener('click', function () {
    dx = 1;
    dy = 0;
});
