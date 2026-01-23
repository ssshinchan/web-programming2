let circles = [];
let timerId = null;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const x = parseInt(Math.random() * 640);
    const y = parseInt(Math.random() * 480);

    const circle = {x: x, y: y};
    circles.push(circle);

    if (timerId === null) {
        timerId = setInterval(() => {
            ctx.clearRect(0, 0, 640, 480);

            for (let i = 0; i < circles.length; i++) {
                circles[i].x -= 2;
                circles[i].y += 2;

                ctx.strokeStyle = 'red';
                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.arc(circles[i].x, circles[i].y, 50, 0, Math.PI * 2);
                ctx.stroke();
            }
        }, 50);
    }
});
