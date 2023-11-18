// const up = document.getElementsByClassName("word_top");
// const down = document.getElementsByClassName("word_bottom");

// var up_texts = ["Sandesh", "and", "Never", "give", "up", "gonna", "you"];
// var down_texts = ["Bhantana", "I'm", "Gonna", "you", "Never", "let", "down"];


// function changeTextonKeyframe(event) {
//     const keyframePercentage = 50;
//     const keyframeAtTime = (5 * keyframePercentage) / 100;

//     if (event.elapsedTime >= keyframeAtTime) {
//         for (let i = 0; i < up.length; i++) {
//             up[i].textContent = up_texts[i];
//             down[i].textContent = down_texts[i];
//         }
//     }
// }

// document.addEventListener("animationiteration", changeTextonKeyframe)

// var elements = [
//     { element: document.getElementsByClassName("word_top")[0], texts: ["Sandesh", "and", "Never", "give", "up", "gonna", "you"] },
//     { element: document.getElementsByClassName("word_bottom")[0], texts: ["Bhantana", "I'm", "Gonna", "you", "Never", "let", "down"] }
// ];

// elements.forEach(({ element, texts }) => {
//     element.addEventListener("animationiteration", (event) => {
//         const keyframe = Math.floor((event.elapsedTime / event.target.style.animationDuration) * texts.length);
//         element.textContent = texts[keyframe % texts.length];
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     let wordsTop = ["word1", "word2", "word3"];
//     let wordsBottom = ["word4", "word5", "word6"];
//     let elementTop = document.querySelector(".word_top h3");
//     let elementBottom = document.querySelector(".word_bottom h3");
//     let counterTop = 0;
//     let counterBottom = 0;

//     elementTop.addEventListener("animationiteration", function (event) {
//         if (event.animationName === "animate" && event.elapsedTime === event.totalTime / 2) {
//             elementTop.textContent = wordsTop[counterTop % wordsTop.length];
//             counterTop++;
//         }
//     });

//     elementBottom.addEventListener("animationiteration", function (event) {
//         if (event.animationName === "animate" && event.elapsedTime === event.totalTime / 2) {
//             elementBottom.textContent = wordsBottom[counterBottom % wordsBottom.length];
//             counterBottom++;
//         }
//     });
// });


let x = [];

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