const input = document.querySelector('.count-input');
const btn = document.querySelector('.run-btn');
const result = document.querySelector('.result');
btn.addEventListener('click', () => {
    const times = parseInt(input.value, 10);
    if (isNaN(times) || times <= 0) {
        result.textContent = '回数を正しい数値で入力';
        return;
    }
    const rd = Array(times).fill(0);
    for (let i = 0; i < times; i++) {
        rd[i] = parseInt(Math.random() *1000);
    }
    let html = '<table style="border-collapse:collapse;"><tr><th style="border:1px solid #000;padding:4px;">数</th><th style="border:1px solid #000;padding:4px;">回数</th></tr>';
    for (let i = 0; i < times; i++) {
        html += '<tr><td style="border:1px solid #000;padding:4px;">' + i + '</td><td style="border:1px solid #000;padding:4px;">' + rd[i] + '</td></tr>';
    }
    html += '</table>';
    result.innerHTML = html;
});