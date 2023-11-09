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

let up_texts = ["Hello !", "Sandesh", "and", "Never", "give", "up", "gonna", "you", "Never", "run", "and", "you", "gonna", "you", "Never", "say", "Never", "tell", "lie", "hurt"];
let down_texts = ["I'm", "Bhantana", "I'm", "gonna", "you", "Never", "let", "down", "gonna", "around", "desert", "Never", "make", "cry", "gonna", "goodbye", "gonna", "a", "and", "you"];


let counter = 0;

function changeText() {
    let wordTop = document.querySelector(".word_top h3");
    let wordBottom = document.querySelector(".word_bottom h3");
    if (counter % 2 === 0) {
        wordTop.innerText = up_texts[Math.floor(counter / 2)];
        wordTop.style.display = "block";
        wordBottom.style.display = "none";
    }
    else {
        wordBottom.innerText = down_texts[Math.floor(counter / 2)];
        wordBottom.style.display = "block";
        wordTop.style.display = "none";
    }
    counter++;

    if (counter === up_texts.length || counter === down_texts.length) {
        counter = 0;
    }
}

function j() {
    setTimeout(f, 0);
    document.getElementById("fan").style.animation = "animate 2s infinite";
}
function f() {
    changeText();
    setTimeout(f, 1000);
}
// setInterval(changeText, 1500);
document.addEventListener("DOMContentLoaded", j)