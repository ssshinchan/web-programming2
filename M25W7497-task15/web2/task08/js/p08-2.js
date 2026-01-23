const mInput = document.querySelector('input[name="m"]');
const nInput = document.querySelector('input[name="n"]');
const resultSpan = document.querySelector('span[data-name="result"]');
const btn = document.querySelector('button[name="calc"]');
btn.addEventListener('click', () => {
    const M = parseInt(mInput.value, 10);
    const N = parseInt(nInput.value, 10);
    if (Number.isNaN(M) || Number.isNaN(N)) {
        resultSpan.textContent = '整数を入力';
        return;
    }
    if (!(M < N)) {
        resultSpan.textContent = 'M < N を満たす整数を入力';
        return;
    }
    let sum = 0;
    let i = 0;
    while (M + i <= N) {
        sum = sum + (M + i);
        i = i + 1;
    }
    resultSpan.textContent = String(sum);
});