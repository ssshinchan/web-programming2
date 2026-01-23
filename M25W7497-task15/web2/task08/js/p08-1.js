let i = 0
let message = "起きてください";
while (i < 5) {
    message += "!";
    document.querySelector("p").innerHTML += message + "<br>";
    i += 1;
}