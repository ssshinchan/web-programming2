let cart = {};

function addCart() {
    const nameEl = document.querySelector('input[name="item"]');
    const qtyEl = document.querySelector('input[name="qty"]');
    const name = nameEl.value.trim();
    const qty = parseInt(qtyEl.value, 10);
    if (!name || isNaN(qty) || qty <= 0) {
        return;
    }
    if (cart[name]) {
        cart[name] += qty;
    } else {
        cart[name] = qty;
    }
    nameEl.value = '';
    qtyEl.value = '';
}

function showCart() {
    let rows = '<tr><th scope="col">品名</th><th scope="col">個数</th></tr>';
    for (const key in cart) {
        rows += '<tr><td>' + key + '</td><td>' + cart[key] + '</td></tr>';
    }
    document.querySelector('table.cart').innerHTML = rows;
}

const addBtn = document.querySelector('button[type="button"]');
const showBtn = document.querySelectorAll('button[type="button"]')[1];
addBtn.addEventListener('click', addCart);
showBtn.addEventListener('click', showCart);
