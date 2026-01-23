let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let timerId = null;
let isRunning = false;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    x += 2;
    y += 1.5;

    if (x > canvas.width - 30 || y > canvas.height - 30) {
        x = 50;
        y = 50;
    }
}

document.querySelector('#btn').addEventListener('click', function() {
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
