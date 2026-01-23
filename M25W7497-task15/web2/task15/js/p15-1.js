let circles = [];
let timerId = null;
let directionX = 0;
let directionY = 0;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const drawBtn = document.querySelector('#drawBtn');
const leftBtn = document.querySelector('#leftBtn');
const upBtn = document.querySelector('#upBtn');
const downBtn = document.querySelector('#downBtn');
const rightBtn = document.querySelector('#rightBtn');

function drawCircles() {
    ctx.clearRect(0, 0, 640, 480);

    for (let i = 0; i < circles.length; i++) {
        circles[i].x += directionX;
        circles[i].y += directionY;

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(circles[i].x, circles[i].y, 50, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function startAnimation() {
    if (timerId === null) {
        timerId = setInterval(drawCircles, 50);
    }
}

drawBtn.addEventListener('click', () => {
    const x = parseInt(Math.random() * 640);
    const y = parseInt(Math.random() * 480);

    const circle = {x: x, y: y};
    circles.push(circle);

    drawCircles();
});

leftBtn.addEventListener('click', () => {
    directionX = -2;
    directionY = 0;
    startAnimation();
});

upBtn.addEventListener('click', () => {
    directionX = 0;
    directionY = -2;
    startAnimation();
});

downBtn.addEventListener('click', () => {
    directionX = 0;
    directionY = 2;
    startAnimation();
});

rightBtn.addEventListener('click', () => {
    directionX = 2;
    directionY = 0;
    startAnimation();
});
