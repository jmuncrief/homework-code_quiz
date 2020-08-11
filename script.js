// Const variables for HTML elements
const title = document.getElementById("title");
const questionTxt = document.getElementById("questionTxt");
const questionCont = document.getElementById("questionCont");
const start = document.getElementById("start");
const buttons = document.getElementById("buttons");
const timerCont = document.querySelector(".timer-container");
const timer = document.getElementById("time");

// Global Variables
let score = "";
let currentQuestion = 0;

// Timer
let secondsLeft = 30;
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time Left: " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}

// Code executed when timer expires (loss-condition)
function timesUp() {
    clearInterval(timer);
    title.textContent = "Game Over";
    timer.style.display = "none";
    questionTxt.textContent = "You ran out of time. No points for you!"
    // buttons.style.display = "none";
    buttons.innerHTML = "";
}

// Function executed when player has exhausted all questions with time still remaining (win-condition)
function winner() {
    let playerScore = secondsLeft;
    title.textContent = "You're Winner!";
    clearInterval(timer);
    buttons.innerHTML = "";
    timerCont.style.display = "none";
    timer.style.display = "none";
    questionTxt.textContent = "Scores:";
    let playerName = prompt("Enter your initials/name.");
    let x = document.createElement("p")
    x.textContent = playerName + " - " + playerScore
    buttons.append(x);
}

// Loops through question object array and writes questions and answer(s) to page dynamically
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

// Processes user's answers, overwrites current question, triggers win-condition
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

// Starts timer and game when "Start" button is clicked
function game() {
    start.style.display = "none";
    timer.textContent = "Time Left: ";
    buttons.style.display = "block";
    setTime();
    writeQuestion(questions[currentQuestion]);
}

// Event listeners for start and answer buttons
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