var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var timer = document.getElementById('countdown')

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
    question: "Which is the correct way to write a single linecomment in Javascript?",
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

//when start button in clicked a question is loaded and a 60 second timer starts
startBtn.addEventListener('click', () => {
    loadQuestion();
    startTimer(60);
} );

var counter;
//function that takes in seconds and subtracts one on a 1 second interval
function startTimer(seconds) {
    counter = seconds;

    var interval = setInterval(() => {
        console.log(counter);
        counter--;

        timer.innerText = counter;

        // if timer hits 0 game over shows on the alert
        if(counter < 0) {
            clearInterval(interval);
            alert("GAME OVER!")
        }
    }, 1000)

    

}

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

    startBtn.disabled = true;
}

// function that unchecks a box when questions load
function clearSelection() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// function that gets the answer option selected
function getSelection() {
    var answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

//documentation for .forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


function handleSubmit() {
    const answer = getSelection();
    
    if(answer) {
        // if the selection matches correct then the score increases by 1.
        if(answer === quizQuestions[currentQuestion].correct){
            score++;
        } else
            counter = counter - 10;

        currentQuestion++;

        //the next question is loaded until the question are all answered
        if(currentQuestion < quizQuestions.length) {
            loadQuestion();
        } 
        
        //if all the questions are answered pring the score to the screen.
        //upon reload click reloa the quiz.
        else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizQuestions.length} questions correctly.</h2>

            <button onclick = "location.reload()">Reload</button>`

            const input = document.createElement("input");
            input.setAttribute("type", "text");
            document.body.children[0].children[1].appendChild(input);

            const button = document.createElement("button");
            button.textContent = "Enter Score";
            document.body.children[0].children[1].appendChild(button);
        }
    }
}

// when the submit button is clicked the getSelection function runs
submitBtn.addEventListener('click', handleSubmit)

// local storage JSON.stringify
// December 12th class

//after last question answered add input for initials
// and submit button

// make my input and submit
//save input data and score into an object
//push object into an array
//stringify object so it can set to local storage
//get it from local storage to print to the page


function updateScores(score, initials){
    var existingScores = JSON.parse(localStorage.getItem("highScores"));
    var allScores =  existingScores || [];
    
    var current = {
            score: score,
            initials: initials
        }
    
    allScores.push(current);
    
    localStorage.setItem("highScores", JSON.stringify(allScores));
    }


//initialize array
//push initials and score into array

//store array into loacal memery
//sort array from highest to lowest score
//display array on a leaderboard
