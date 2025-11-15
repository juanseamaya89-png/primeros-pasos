import { tarotQuestions } from './questions_tarot.js';
import { numerologyQuestions } from './questions_numerologia.js';
import { astrologyQuestions } from './questions_astrologia.js';

let selectedCategory = '';
let questionPool = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsSelected = [];

const startScreen = document.getElementById("start-screen");
const examScreen = document.getElementById("exam-screen");
const resultScreen = document.getElementById("result-screen");
const categoryTitle = document.getElementById("category-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const resultText = document.getElementById("result-text");

export function startExam(category) {
    selectedCategory = category;
    if (category === "tarot") {
        questionPool = tarotQuestions;
        categoryTitle.textContent = "Examen de Tarot";
    } else if (category === "numerologia") {
        questionPool = numerologyQuestions;
        categoryTitle.textContent = "Examen de Numerología";
    } else if (category === "astrologia") {
        questionPool = astrologyQuestions;
        categoryTitle.textContent = "Examen de Astrología";
    }
    questionsSelected = shuffleArray([...questionPool]).slice(0,20);
    score = 0;
    currentQuestionIndex = 0;
    showScreen("exam-screen");
    loadQuestion();
}

function loadQuestion() {
    const qData = questionsSelected[currentQuestionIndex];
    questionText.textContent = qData.q || qData.question;

    const mixedOptions = shuffleArray(
        qData.options.map((opt, idx) => ({ text: opt, index: idx }))
    );

    optionsContainer.innerHTML = "";

    mixedOptions.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = opt.text;
        btn.onclick = () => checkAnswer(opt.index);
        optionsContainer.appendChild(btn);
    });

    updateProgress();
}

function checkAnswer(selectedIndex) {
    const qData = questionsSelected[currentQuestionIndex];
    const correct = qData.answer;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {
        const optionIndex = qData.options.indexOf(btn.textContent);
        if(optionIndex === correct) btn.style.background = "rgba(0,255,0,0.4)";
        if(optionIndex === selectedIndex && selectedIndex !== correct) btn.style.background = "rgba(255,0,0,0.4)";
        btn.disabled = true;
    });

    if(selectedIndex === correct) score++;

    setTimeout(() => {
        currentQuestionIndex++;
        if(currentQuestionIndex >= 20) endExam();
        else loadQuestion();
    }, 900);
}

function endExam() {
    showScreen("result-screen");
    resultText.textContent = `Tu puntuación: ${score} / 20`;
}

function updateProgress() {
    const percent = (currentQuestionIndex / 20) * 100;
    progressBar.style.width = percent + "%";
}

function showScreen(screen) {
    startScreen.style.display = "none";
    examScreen.style.display = "none";
    resultScreen.style.display = "none";
    document.getElementById(screen).style.display = "block";
}

export function goHome() {
    showScreen("start-screen");
}

function shuffleArray(arr) {
    return arr
        .map(x => ({ sort: Math.random(), value: x }))
        .sort((a,b) => a.sort - b.sort)
        .map(x => x.value);
}

window.startExam = startExam;
window.goHome = goHome;
