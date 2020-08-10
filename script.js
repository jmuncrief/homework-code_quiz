// Const variables for HTML elements
const title = document.getElementById("title");
const questionTxt = document.getElementById("questionTxt");
const start = document.getElementById("start");
const ansButtons = [
    document.getElementById("ans1"),
    document.getElementById("ans2"),
    document.getElementById("ans3"),
    document.getElementById("ans4"),
];
const timer = document.getElementById("time");
let score = "";

// Timer
let secondsLeft = 30;
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining.";
        console.log(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}

// Code executed when timer expires
function timesUp() {
    title.textContent = "Game Over";
    timer.style.display = "none";
    questionTxt.textContent = "You ran out of time. No points for you!"
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

    start.style.display = "none";
    ansButtons.style.display = "block";

    setTime();

    questions.forEach(obj => {
        let q = obj.question;
        let f = obj.falseAnswers;
        let t = obj.trueAnswers;

        writeQuestion(q, f, t);



    });


}

start.addEventListener("click", function(event) {
    event.preventDefault();
    game();
})