function findMin() {
    const inputEl = document.querySelector('input[name="nums"]');
    const outEl = document.querySelector('span[data-role="min"]');
    const raw = inputEl.value.trim();
    if (!raw) {
        outEl.textContent = '';
        return;
    }
    const parts = raw.split(',');
    let min = null;
    for (let i = 0; i < parts.length; i++) {
        const v = Number(parts[i].trim());
        if (!Number.isFinite(v)) continue;
        if (min === null || v < min) min = v;
    }
    outEl.textContent = min === null ? '' : String(min);
}

const btn = document.querySelector('button[type="button"]');
btn.addEventListener('click', findMin);
