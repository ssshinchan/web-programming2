const menu = ['ハンバーグ', 'カレーライス', 'ラーメン', 'パスタ', 'ピザ', '寿司', '天ぷら'];
const orders = [];
const orderedDishes = [];

document.querySelector('#menu').textContent = menu.join(', ');

function displayOrders() {
    document.querySelector('#orders').textContent = orders.join(', ');
}

document.querySelector('#orderBtn').addEventListener('click', orderDish);
document.querySelector('#serveBtn').addEventListener('click', serveDish);

function orderDish() {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const dish = menu[randomIndex];
    orders.push(dish);
    displayOrders();
}

function serveDish() {
    if (orders.length > 0) {
        orderedDishes.push(orders.shift());
        document.querySelector('#served').textContent = orderedDishes.join(', ');
        displayOrders();
    }
}

displayOrders();