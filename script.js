// Const variables for HTML elements
const questionTxt = document.getElementById("questionTxt");
const buttons = [
    document.getElementById("ans1"),
    document.getElementById("ans2"),
    document.getElementById("ans3"),
    document.getElementById("ans4"),
];
const timer = document.getElementById("time");

function randBtn() {
    let x = Math.ceil(Math.random() * 4);
    return buttons[x];
}

function writeQuestion(q, f, t) {
    questionTxt.textContent = q

}

// Main Q&A Game function
function game() {
    import questions from "./questions.js";

    questions.forEach(obj => {
        let q = obj.question;
        let f = obj.falseAnswers;
        let t = obj.trueAnswers;
    });


}