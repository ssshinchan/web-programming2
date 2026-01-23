let circles = [];
let timerId = null;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const x = parseInt(Math.random() * 500) + 50;
    const y = parseInt(Math.random() * 400) + 50;

    const circle = {x: x, y: y, dx: -2, dy: 2};
    circles.push(circle);

    if (timerId === null) {
        timerId = setInterval(() => {
            ctx.clearRect(0, 0, 640, 480);

            for (let i = 0; i < circles.length; i++) {
                circles[i].x += circles[i].dx;
                circles[i].y += circles[i].dy;

                if (circles[i].x - 50 <= 0 || circles[i].x + 50 >= 640) {
                    circles[i].dx *= -1;
                }
                if (circles[i].y - 50 <= 0 || circles[i].y + 50 >= 480) {
                    circles[i].dy *= -1;
                }

                ctx.strokeStyle = 'red';
                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.arc(circles[i].x, circles[i].y, 50, 0, Math.PI * 2);
                ctx.stroke();
            }
        }, 50);
    }
});
