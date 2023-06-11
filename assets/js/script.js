import questions from './questions.js';

const questionCountElement = document.getElementById("question-count");
const scoreElement = document.getElementById("score");
const questionContainer = document.getElementById("question-container");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");



let currentQuestion = 0;
let score = 0;

function contquestion() {

    // Atualizar o texto do contador de perguntas e pontuação
    questionCountElement.textContent = `Pergunta ${currentQuestion + 1}/${questions.length}`;
    scoreElement.textContent = `Score: ${score}`;
}



function contentClear() {
    questionContainer.innerHTML = "";
    optionsList.innerHTML = "";

}

function optionsResponse() {
    const currentQuestionData = questions[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.classList.add("card-body");
    questionElement.textContent = currentQuestionData.question;
    questionContainer.appendChild(questionElement);

    currentQuestionData.options.forEach((option, index) => {
        const optionItem = document.createElement("li");
        optionItem.classList.add("list-group-item", "mb-3");

        const input = document.createElement("input");
        input.classList.add("form-check-input", "me-1");
        input.type = "radio";
        input.name = "listGroupRadio";
        input.value = option;
        const label = document.createElement("label");
        label.classList.add("form-check-label");
        label.for = `option-${index}`;
        label.textContent = option;

        optionItem.appendChild(input);
        optionItem.appendChild(label);

        optionsList.appendChild(optionItem);
    });

}

function showNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    currentQuestion++;

    if (!selectedOption) {
        alert("Selecione uma opção!");
        return;
    }

    if (currentQuestion <= questions.length) {
        if (selectedOption.value === questions[currentQuestion - 1].answer) {
            score++;
        }

        showQuestion();
    } else {
        alert("Você terminou o quiz!");
    }
}

function showPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}


function showQuestion() {

    contquestion();
    contentClear();
    optionsResponse();

}
nextButton.addEventListener("click", showNextQuestion);
prevButton.addEventListener("click", showPrevQuestion);
document.addEventListener("DOMContentLoaded", showQuestion);