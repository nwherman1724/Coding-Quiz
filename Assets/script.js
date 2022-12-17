var quiz = document.getElementById('quiz');
var answerEl = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submit = document.getElementById('submit');

//Array containing questions, possible answers, and answers
var questions = [
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    a: "<h5>",
    b: "<h1>",
    c: "<h3>",
    d: "<h2>",
    correct: "b",
},
{
    question: "Which is the correct way to write a comment in HTML?",
    a: "Using ## and #",
    b: "Using <!-- and -->",
    c: "Using </-- and -->",
    d: "Using <!-- and -!>",
    correct: "b",
},
{
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
},
{
    question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
    a: "div p",
    b: "p",
    c: "div#p",
    d: "div ~ p",
    correct: "a",
},
{
    question: "Which is the correct way to write a comment in CSS?",
    a: "Using /* and */",
    b: "Using // and //",
    c: "Using </-- and -->",
    d: "Using ## and #",
    correct: "a",
},
{
    question: "What year was JavaScript invented?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Who invented Javascript?",
    a: "Brendan Eich",
    b: "Brad",
    c: "Grady",
    d: "Peter Parker",
    correct: "a"
},
{
    question: "Which is the correct way to write a comment  a single line in Javascript?",
    a: "Using /* and */",
    b: "Using // and //",
    c: "Using </-- and -->",
    d: "Using ## and #",
    correct: "a",
},
];

//question resources: https://www.javatpoint.com/html-mcq, https://www.javatpoint.com/css-mcq

var questionIndex = 0;
var score = 0;

function loadQuiz(){
    var currentQuestion = questions[questionIndex];

    questionEl.innerText = currentQuestion.question;
}

loadQuiz();