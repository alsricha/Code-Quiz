const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Question 1: Commonly used data types DO NOT include:",
        choice1: "<strings>",
        choice2: "<booleans",
        choice3: "<alerts>",
        choice4: "<numbers>",
        answer: 1

    },

    {
        question: "Question 2:The condtion in an if / else statment is enclosed within ___,",
        choice1: "<quotes>",
        choice2: "<curly brackets>",
        choice3: "<parentheses>",
        choice4: "<square brackets>",
        answer: 3

    },

    {
        question: "Question 3: The instructions for a function are enclosed within ___,",
        choice1: "<quotes>",
        choice2: "<curly brackets",
        choice3: "<parentheses>",
        choice4: "<square brackets>",
        answer: 2

    },

    {
        question: "Question 4: A property of an object that is a function is called a ___,",
        choice1: "<method>",
        choice2: "<string>",
        choice3: "<stylesheet>",
        choice4: "<boolean>",
        answer: 1
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};
 
getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach( choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });
};



startGame(); 