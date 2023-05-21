/* VARIABLES */
var title = document.getElementById("tts");
var begin = document.getElementById("begin");
var next = document.getElementById("next");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var quote = document.getElementById("quote");
var quizStarted = false;
var timer = 5;
var currentQuestion = 0;
var currentQuote = 0;
var questions = {};
var quotes = [];
var currentPage = 0;
var selections = [];
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");


/* FETCH QUESTIONS FROM JSON FILE */
fetch("./assets/json/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // jsonData = data;
        questions = data.questions;
        quotes = data.quotes;
    });

/* INIT THE QUIZ */
begin.addEventListener("click", function () {
    question.textContent = questions[currentQuestion].questionText;
    c1.textContent = questions[currentQuestion].choices[0];
    c2.textContent = questions[currentQuestion].choices[1];
    c3.textContent = questions[currentQuestion].choices[2];
    c4.textContent = questions[currentQuestion].choices[3];
    choices.style.display = "flex";
    begin.style.display = "none";
    next.style.display = "block";
    title.textContent = "Time left: " + timer;
    quote.textContent = quotes[currentQuote];
    quizStarted = true;
    currentPage = 1;

    showCountdownTimer();

    // timer interval
    var countdownInterval = setInterval(function () {
        if (!quizStarted) {
            return;
        }

        timer--;

        if (timer <= 0) {
            clearInterval(countdownInterval);
            quizStarted = false;
        }

        showCountdownTimer();

    }, 1000);

    // qselecter();

});

/* CYCLE THROUGH QUESTIONS */
next.addEventListener("click", function () {
    currentQuestion = (currentQuestion + 1) % questions.length;
    question.textContent = questions[currentQuestion].questionText;
    c1.textContent = questions[currentQuestion].choices[0];
    c2.textContent = questions[currentQuestion].choices[1];
    c3.textContent = questions[currentQuestion].choices[2];
    c4.textContent = questions[currentQuestion].choices[3];
    currentQuote = (currentQuote + 1) % quotes.length;
    quote.textContent = quotes[currentQuote];
currentPage++;
console.log(currentPage);
})

/*  FUNCTIONS */
function qselecter() {
    for (var x = 0; x < questions.length; x++)
        console.log(questions[x]);
};


// function pageCounter() {
//     var showQuestion = ;
//     for (var x = 0; x < questions.length; x++) {

//     }
// }

function showCountdownTimer() {
    title.textContent = "Time left: " + timer;
};

function next() {
    if (x >= questions.length - 1) {
        return;
    }
    x++;
}