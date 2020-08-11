// Const variables for HTML elements
const title = document.getElementById("title");
const questionTxt = document.getElementById("questionTxt");
const questionCont = document.getElementById("questionCont");
const start = document.getElementById("start");
const buttons = document.getElementById("buttons");
const timerCont = document.querySelector(".timer-container");
const timer = document.getElementById("time");

let score = "";
let currentQuestion = 0;

// Timer
let secondsLeft = 30;
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}

// Code executed when timer expires
function timesUp() {
    clearInterval(timer);
    title.textContent = "Game Over";
    timer.style.display = "none";
    questionTxt.textContent = "You ran out of time. No points for you!"
    // buttons.style.display = "none";
    buttons.innerHTML = "";
}

function winner() {
    let playerScore = secondsLeft;
    title.textContent = "You're Winner!";
    clearInterval(timer);
    // buttons.style.display = "none";
    buttons.innerHTML = "";
    timerCont.style.display = "none";
    timer.style.display = "none";
    questionTxt.textContent = "Scores:";
    let playerName = prompt("Enter your initials/name.");
    let x = document.createElement("p")
    x.textContent = playerName + " - " + playerScore
    buttons.append(x);
}


function writeQuestion(obj) {
    buttons.innerHTML = "";
    let q = obj.question;
    let f = obj.falseAnswers;
    let t = obj.trueAnswer;
    questionTxt.textContent = q
    for (let i = 0; i < f.length; i++) {
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

function parseAnswer(x) {
    const ans = questions[currentQuestion].trueAnswer
    if(x === ans) {
        currentQuestion++;
    } else {
        secondsLeft = secondsLeft - 10;
        currentQuestion++;
    }
    if (currentQuestion >= questions.length) {
        winner();
    } else {
        writeQuestion(questions[currentQuestion]);
    }
}

// Main Q&A Game function
function game() {

    start.style.display = "none";
    timerCont.style.display = "block";
    buttons.style.display = "block";

    // let currentQuestion = 0;

    setTime();
    writeQuestion(questions[currentQuestion]);

}

start.addEventListener("click", function (event) {
    event.preventDefault();
    game();
})

buttons.addEventListener("click", function(e) {
    e.preventDefault();
    if(e.target.matches("button")) {
        let x = e.target.textContent;
        console.log(x);
        parseAnswer(x);
    }
})