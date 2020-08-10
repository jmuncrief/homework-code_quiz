// Const variables for HTML elements
const questionTxt = document.getElementById("questionTxt");
const buttons = [
    document.getElementById("ans1"),
    document.getElementById("ans2"),
    document.getElementById("ans3"),
    document.getElementById("ans4"),
];
const timer = document.getElementById("time");

// Timer
let secondsLeft = 30;
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}

// Code executed when timer expires
function timesUp() {

}

// Select button at random
function randBtn(t) {
    let x = Math.ceil(Math.random() * 4);
    buttons[x].textContent = t;
}

// Write false answers to other buttons
function btnCycle() {
    // ?Subtract value from array and loop through remainder?
}

function writeQuestion(q, f, t) {
    questionTxt.textContent = q
    randBtn(t);
    btnCycle(f);
}

// Main Q&A Game function
function game() {
    import questions from "./questions.js";

    questions.forEach(obj => {
        let q = obj.question;
        let f = obj.falseAnswers;
        let t = obj.trueAnswers;

        writeQuestion(q, f, t);



    });


}

// Execute timer script on page load
setTime();