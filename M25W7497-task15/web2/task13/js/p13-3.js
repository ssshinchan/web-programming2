const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const x = parseInt(Math.random() * 640);
    const y = parseInt(Math.random() * 480);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.stroke();
});
