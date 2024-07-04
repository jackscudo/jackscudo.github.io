const questions = [
    // Prime 5 domande: "Che strumento sta suonando?"
    {
        question: "Che strumento sta suonando?",
        audio: "audio/violino.mp3",
        answers: [
            { text: "Violino", correct: true },
            { text: "Violoncello", correct: false },
            { text: "Clarinetto", correct: false },
            { text: "Tuba", correct: false }
        ]
    },
    {
        question: "Che strumento sta suonando?",
        audio: "audio/tromba.mp3",
        answers: [
            { text: "Trombone", correct: false },
            { text: "Tromba", correct: true },
            { text: "Viola", correct: false },
            { text: "Flauto", correct: false }
        ]
    },
    {
        question: "Che strumento sta suonando?",
        audio: "audio/flauto.mp3",
        answers: [
            { text: "Contrabbasso", correct: false },
            { text: "Corno francese", correct: false },
            { text: "Flauto", correct: true },
            { text: "Fagotto", correct: false }
        ]
    },
    {
        question: "Che strumento sta suonando?",
        audio: "audio/contrabbasso.mp3",
        answers: [
            { text: "Oboe", correct: false },
            { text: "Clarinetto", correct: false },
            { text: "Violino", correct: false },
            { text: "Contrabbasso", correct: true }
        ]
    },
    {
        question: "Che strumento sta suonando?",
        audio: "audio/fagotto.mp3",
        answers: [
            { text: "Fagotto", correct: true },
            { text: "Corno francese", correct: false },
            { text: "Violoncello", correct: false },
            { text: "Viola", correct: false }
        ]
    },
    // Ultime 3 domande: "Strumento ad arco, a fiato o a percussione?"
    {
        question: "Strumento ad arco, a fiato o a percussione?",
        audio: "audio/violoncello.mp3",
        answers: [
            { text: "Ad arco", correct: true },
            { text: "A fiato", correct: false },
            { text: "A percussione", correct: false }
        ]
    },
    {
        question: "Strumento ad arco, a fiato o a percussione?",
        audio: "audio/oboe.mp3",
        answers: [
            { text: "Ad arco", correct: false },
            { text: "A fiato", correct: true },
            { text: "A percussione", correct: false }
        ]
    },
    {
        question: "Strumento ad arco, a fiato o a percussione?",
        audio: "audio/timpani.mp3",
        answers: [
            { text: "Ad arco", correct: false },
            { text: "A fiato", correct: false },
            { text: "A percussione", correct: true }
        ]
    }
];

const resultImages = [
    { minScore: 0, maxScore: 2, imageUrl: 'images/quiz/low-score.png', altText: 'Low score' },
    { minScore: 3, maxScore: 5, imageUrl: 'images/quiz/medium-score.png', altText: 'Medium score' },
    { minScore: 6, maxScore: 7, imageUrl: 'images/quiz/high-score.png', altText: 'High score' },
    { minScore: 8, maxScore: 8, imageUrl: 'images/quiz/perfect-score.png', altText: 'Perfect score'}
];

const questionContainer = document.querySelector('.question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const audioElement = document.getElementById('audio');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    try {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.addEventListener('click', () => {
            try {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    resetState();
                    showQuestion(questions[currentQuestionIndex]);
                } else {
                    showResults();
                }
            } catch (error) {
                console.error("Errore durante il passaggio alla prossima domanda:", error);
            }
        });
    } catch (error) {
        console.error("Errore durante l'inizializzazione del quiz:", error);
    }
});

function showQuestion(question) {
    try {
        audioElement.src = question.audio;
        audioElement.style.display = 'block';
        questionElement.textContent = question.question;
        clearAnswerButtons();
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    } catch (error) {
        console.error("Errore durante la visualizzazione della domanda:", error);
    }
}

function selectAnswer(e) {
    try {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        setStatusClass(selectedButton, correct);
        if (correct) {
            score++;
        }
        disableAnswerButtons();
        nextButton.style.display = 'block';
    } catch (error) {
        console.error("Errore durante la selezione della risposta:", error);
    }
}

function setStatusClass(element, correct) {
    try {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    } catch (error) {
        console.error("Errore durante l'impostazione dello stato della risposta:", error);
    }
}

function clearStatusClass(element) {
    try {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    } catch (error) {
        console.error("Errore durante la pulizia delle classi di stato:", error);
    }
}

function clearAnswerButtons() {
    try {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    } catch (error) {
        console.error("Errore durante la pulizia dei pulsanti delle risposte:", error);
    }
}

function disableAnswerButtons() {
    try {
        const buttons = answerButtonsElement.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.removeEventListener('click', selectAnswer);
            button.disabled = true;
        });
    } catch (error) {
        console.error("Errore durante la disabilitazione dei pulsanti delle risposte:", error);
    }
}

function showResults() {
    try {
        questionContainer.style.display = 'none';
        quizContainer.style.display = 'none'; // Nascondi il contenitore del quiz
        
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }
        
        const scoreElement = document.createElement('p');
        scoreElement.textContent = `Hai risposto correttamente a ${score} domande su ${questions.length}.`;
        resultsContainer.appendChild(scoreElement);

        const resultImage = resultImages.find(img => score >= img.minScore && score <= img.maxScore);
        if (resultImage) {
            const imageElement = document.createElement('img');
            imageElement.src = resultImage.imageUrl;
            imageElement.alt = resultImage.altText;
            imageElement.classList.add('result-image');
            resultsContainer.appendChild(imageElement);
        }

        const restartButton = document.createElement('button');
        restartButton.textContent = 'Ricomincia il Quiz';
        restartButton.classList.add('btn');
        restartButton.addEventListener('click', resetQuiz);
        resultsContainer.appendChild(restartButton);
        
        resultsContainer.style.display = 'block'; // Mostra il contenitore dei risultati
    } catch (error) {
        console.error("Errore durante la visualizzazione dei risultati:", error);
    }
}

function resetQuiz() {
    try {
        currentQuestionIndex = 0;
        score = 0;
        resetState();
        questionContainer.style.display = 'block'; // Mostra il contenitore delle domande
        quizContainer.style.display = 'block'; // Mostra il contenitore del quiz
        resultsContainer.style.display = 'none'; // Nascondi il contenitore dei risultati
        showQuestion(questions[currentQuestionIndex]);
    } catch (error) {
        console.error("Errore durante il reset del quiz:", error);
    }
}

function resetState() {
    try {
        nextButton.style.display = 'none';
        clearStatusClass(questionElement);
        disableAnswerButtons();
    } catch (error) {
        console.error("Errore durante il reset dello stato:", error);
    }
}
