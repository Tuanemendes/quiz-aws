import questions from './questions.js';

const questionCountElement = document.getElementById("question-count");
const scoreElement = document.getElementById("score");
const questionContainer = document.getElementById("question-container");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const timeDisplay = document.getElementById("time");

let currentQuestion = 0;
let score = 0;
let selectedOptions = [];
let elapsedTime = 0;
let intervalId;
let answeredQuestions = [];

function updateQuestionCount() {
    questionCountElement.textContent = `Pergunta ${currentQuestion + 1}/${questions.length}`;
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function startTimer() {
    let startTime = new Date().getTime();

    intervalId = setInterval(function () {
        let currentTime = new Date().getTime();
        elapsedTime = currentTime - startTime;

        let minutes = Math.floor(elapsedTime / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds; 

        timeDisplay.textContent = minutes + ":" + seconds;

    }, 1000);
}


function showQuestion() {
    const currentQuestionData = questions[currentQuestion];

    questionContainer.textContent = currentQuestionData.question;

    optionsList.innerHTML = "";

    currentQuestionData.options.forEach((option, index) => {
        const optionItem = document.createElement("li");
        optionItem.classList.add("list-group-item", "mb-3");

        const input = document.createElement("input");
        input.classList.add("form-check-input", "me-1");
        input.type = "radio";
        input.name = "listGroupRadio";
        input.value = index;

        if (selectedOptions[currentQuestion] === index) {
            input.checked = true;

        }

        input.addEventListener("change", (event) => {
            const selectedOption = event.target.value;
            selectedOptions[currentQuestion] = Number(selectedOption);
            updateScore();

            optionsList.querySelectorAll(".list-group-item").forEach((item) => {
                item.classList.remove("bg-custom-success", "bg-danger");
            });

            if (index === currentQuestionData.answer) {
                optionItem.classList.add("bg-success");
                if (!answeredQuestions.includes(currentQuestion)) {
                    score++;
                    updateScore();
                    
                    answeredQuestions.push(currentQuestion);
                }else {
                    optionItem.classList.add("bg-custom-success", "text-white");
                    label.textContent += " (Pontuado)";
                }

            } else {
                optionItem.classList.add("bg-danger");
            }

        });

        const label = document.createElement("label");
        label.classList.add("form-check-label");
        label.htmlFor = `option-${index}`;
        label.textContent = option;

        optionItem.appendChild(input);
        optionItem.appendChild(label);
        optionsList.appendChild(optionItem);
    });

    updateQuestionCount();
    
}

function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}


function displayResults() {
    if (currentQuestion === questions.length) {
        clearInterval(intervalId); 
        const timeElapsed = formatTime(elapsedTime);
        const finalScore = score;
        const message = `Parabéns! Você terminou o quiz!\nTempo gasto: ${timeElapsed}\nPontuação final: ${finalScore}`;

        alert(message);
    }
}

function showNextQuestion() {

    const checkedOption = document.querySelector('input[name="listGroupRadio"]:checked');

    if (!checkedOption) {
        alert("Selecione uma opção!");
        return;
    }
    const selectedAnswer = parseInt(checkedOption.value);

    selectedOptions[currentQuestion] = selectedAnswer;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        displayResults();
    }
}

function showPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOptions = [];
    elapsedTime = 0;
    clearInterval(intervalId);
    timeDisplay.textContent = "00:00";
    updateScore();
    showQuestion();
    
}

nextButton.addEventListener("click", showNextQuestion);
prevButton.addEventListener("click", showPrevQuestion);

showQuestion();

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startTimer);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetQuiz);
