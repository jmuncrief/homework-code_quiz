// Const variables for HTML elements
const title = document.getElementById("title");
const questionTxt = document.getElementById("questionTxt");
const start = document.getElementById("start");
const buttons = document.getElementById("buttons");
const timerCont = document.querySelector(".timer-container");
const timer = document.getElementById("time");
let score = "";

// Timer
let secondsLeft = 5;
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

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
    buttons.style.display = "none";
    clearInterval(timer);
}

function writeQuestion(q, f, t) {
    questionTxt.textContent = q
    for(let i = 0; i < f.length; i++) {
        let b = document.createElement("button");
        b.setAttribute("class", "btn");
        b.textContent = f[i];
        buttons.append(b);
    };
    let b = document.createElement("button");
    b.setAttribute("class", "btn");
    b.textContent = t;
    buttons.append(b);
}

// Main Q&A Game function
function game() {

    start.style.display = "none";
    timerCont.style.display = "block";
    buttons.style.display = "block";
    setTime();

    questions.forEach(obj => {
        let q = obj.question;
        let f = obj.falseAnswers;
        let t = obj.trueAnswer;

        writeQuestion(q, f, t);



    });
}

start.addEventListener("click", function (event) {
    event.preventDefault();
    game();
})