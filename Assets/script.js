var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');

//Array containing questions, possible answers, and answers
var quizQuestions = [
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "Which of the following tags is used for inserting the largest heading in HTML?",
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


var currentQuestion = 0;
var score = 0;

loadQuestion();

// function that gets a question and answer options from the array and prints it to the screen
function loadQuestion(){
    clearSelection();

    var displayedQuestion = quizQuestions[currentQuestion];

    console.log(displayedQuestion.question);

    questionEl.innerText = displayedQuestion.question;
    a_text.innerText =displayedQuestion.a;
    b_text.innerText =displayedQuestion.b;
    c_text.innerText =displayedQuestion.c;
    d_text.innerText =displayedQuestion.d;
}

function clearSelection() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelection() {
    var answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}


submitBtn.addEventListener('click', () => {
    const answer = getSelection();
    
    if(answer) {
        if(answer === quizQuestions[currentQuestion].correct){
            score++;
        }

        currentQuestion++;

        if(currentQuestion < quizQuestions.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizQuestions.length} questions</h2>

            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})
