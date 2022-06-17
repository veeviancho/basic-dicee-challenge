function randomNo(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

var randomNumber1 = randomNo(1,6)
var randomNumber2 = randomNo(1,6)

var image1 = "images/dice" + randomNumber1 + ".png"
var image2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img1").setAttribute("src", image1)
document.querySelector(".img2").setAttribute("src", image2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩"
} else {
    document.querySelector("h1").textContent = "Draw!"
}