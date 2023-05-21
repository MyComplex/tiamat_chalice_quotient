/* VARIABLES */
// change title, to timer, then score
var title = document.getElementById("tts");
// start the quiz
var begin = document.getElementById("begin");
// next question
var next = document.getElementById("next");
// insert the question
var question = document.getElementById("question");
// insert the guesses
var choices = document.getElementById("choices");
// state of quiz
var quizStarted = false;
// quiz timer
var timer = 5;
//current question
var currentQuestion = 0;

var questions = {};

/* FETCH QUESTIONS FROM JSON FILE */
fetch("./assets/json/questions.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    questions = data;
});

for (var property in questions){
console.log(property);
console.log(questions[property]);
}

/*
// question pool
var questions = [
    {
        text: "What is the land speed velocity of an unladen swallow",
        choices: [
            "100 KPH",
            "200 KPH",
            "50 MPH",
            "African or European?"
        ],
        right: 4
    },
    {
        text: "How much wood can a woodchuck chuck if a woodchuck could chuck wood?",
        choices: [
            "100 kg",
            "200 kg",
            "50 pounds",
            "plbbbttt?"
        ],
        right: 4
    }
];
*/


/* var ideas */
// var answer = do
// var question = "";

/* INIT THE QUIZ */
begin.addEventListener("click", function () {
    
    // var qtext = 1;

    // question.textContent = questions[qtext].text;
    question.textContent = questions.questions[0].text;
    // for (x=0;x<choices.length;x++) {

    // }
    choices.style.display = "flex";
    begin.style.display = "none";
    next.style.display = "block";
    // begin.textContent = "NEXT";
    title.textContent = "Time left: " + timer;
    quizStarted = true;

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

    qselecter();

});

/* CYCLE THROUGH QUESTIONS */
next.addEventListener("click", function(){
currentQuestion = (currentQuestion + 1) % questions.questions.length;
question.textContent = questions.questions[currentQuestion].text;
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
    if (x >= questions.length - 1){
        return;
    }
    x++;
}