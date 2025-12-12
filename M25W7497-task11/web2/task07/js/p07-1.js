let ofuda = ["大吉", "吉", "小吉", "凶"];

document.querySelector("#btn").addEventListener("click", omikuji);

function omikuji() {
    let randomIndex = parseInt(Math.random() * ofuda.length);
    let result = ofuda[randomIndex];
    document.querySelector("#result").innerHTML = "あなたの運勢は" + result + "です<br>お札：" + ofuda.join("と");
}