let texts = [
    "Hello !",
    "I'm",
    "Sandesh",
    "Bhantana",
    "and",
    "I'm",
    "Never",
    "gonna",
    "give",
    "you",
    "up",
    "Never",
    "gonna",
    "let",
    "you",
    "down",
    "Never",
    "gonna",
    "run",
    "around",
    "and",
    "desert",
    "you",
    "Never",
    "gonna",
    "make",
    "you",
    "cry",
    "Never",
    "gonna",
    "say",
    "goodbye",
    "Never",
    "gonna",
    "tell",
    "a",
    "lie",
    "and",
    "hurt",
    "you"
]

let counter = 0;

function changeText() {
    let word = document.querySelector(".word>h3");
    word.innerText = texts[counter];
    word.style.display = "block";
    counter++;

    if (counter === texts.length) {
        counter = 0;
    }
}

function f() {
    changeText();
    setTimeout(f, 5000);
}
document.addEventListener("DOMContentLoaded", () => {
    let satellite = document.querySelector(".satellite_container>img");
    satellite.style.animation = "5s satellite infinite";
    setTimeout(f, 1200);
});