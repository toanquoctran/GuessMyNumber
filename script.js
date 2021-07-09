"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "correct number";

document.querySelector(".number").textContent = 11;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 11;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

const x = function() {
    console.log(11);
};

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // when there is now input
    if (!guess) {
        // document.querySelector(".message").textContent = "no number";
        displayMessage("no number");

        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "correct number";
        displayMessage("correct number");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highestScore) {
            highestScore = score;
            document.querySelector(".highscore").textContent = highestScore;
        }
        // when player's guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            //     guess > secretNumber ? "too high" : "too low";
            displayMessage(guess > secretNumber ? "too high" : "too low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "you lost the game";
            displayMessage("you lost the game");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector(".message").textContent = "start guessing";
    displayMessage("start guessing");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});