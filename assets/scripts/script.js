/* variables */
// change title, to timer, then score
var title = document.getElementById("tts");
// start and reset the quiz
var begin = document.getElementById("button");
// insert the question
var question = document.getElementById("question");
// insert the guesses
var answers_list = document.getElementById("choices");
// state of quiz
var quizStarted = false;
// quiz timer
var timer = 239;
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
}, 1000);
// question pool
var questions = [
    {
        "text": "Lorem",
        "choice": [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ],
        "correct": 4
    },
    {
        "text": "ipsum",
        "choices": [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ],
        "correct": 1
    },
    {
        "text": "dolor",
        "choices": [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ],
        "correct": 2
    },
    {
        "text": "sit",
        "choices": [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ],
        "correct": 2
    },
    {
        "text": "amet",
        "choices": [
            "answer1",
            "answer2",
            "answer3",
            "answer4"
        ],
        "correct": 4
    }
];

/* var ideas */
// var answer = do
// var question = "";

/* init the quiz */
begin.addEventListener("click", function () {
    question.textContent = questions[2].text;
    answers_list.style.display = "flex";
    // begin.style.display = "none";
    begin.textContent = "end";
    quizStarted = true;
    showCountdownTimer();
    qselecter();
});

function qselecter() {
for (var x=0;x<questions.length;x++)
    console.log(questions[x]);
}


// function pageCounter() {
//     var showQuestion = ;
//     for (var x = 0; x < questions.length; x++) {

//     }
// }

function showCountdownTimer() {
    title.textContent = "Time left: " + timer;
}