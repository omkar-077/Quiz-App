const questions = [
    { q: "Who is Greatest Captain In Indian Cricket History", options: ["Rohit Sharma", "MSD", "Virat Kohli", "Kapil Dev"], answer: 1},
    { q: "Who among the following is Most Handsome Guy?", options: ["Henry Cavil", "kim Taehyung", "Chris Hemsworth", "Jungkook"], answer: 2},
    { q: "What is real name of 'Jon Snow'", options: ["Robb Stark", "Aegon Targaryen", "Rhaegar Targaryen", "Ned Stark"], answer: 1 },
    { q: "Add question", options: ["option 1", "option 2", "option 3", "option 4"], answer: 0 },
    { q: "Add question?", options: ["option 1", "option 2", "option 3", "option 4"], answer: 2 },
];

let currentQuestion = 0;
let score = 0;

const startContainer = document.querySelector(".start-container");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container"); 
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next");
const card = document.querySelector(".card");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-button");

document.getElementById("start-button").onclick = () => {
    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
};

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.q;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const correct = selectedIndex === question.answer;

    feedbackElement.textContent = correct ? "Correct!" : `Wrong! The correct answer is ${question.options[question.answer]}.`;
    if (correct) score++;

    card.classList.add("flip");
}

nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        card.classList.remove("flip");
        loadQuestion();
    } else {
        quizContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        resultText.textContent = `You answered ${score} correctly and ${questions.length - score} incorrectly.`;
    }
};

restartButton.onclick = () => {
    score = 0;
    currentQuestion = 0;
    resultContainer.classList.add("hidden");
    startContainer.classList.remove("hidden");
};
