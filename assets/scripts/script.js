/* NEED A CLEAN COMMIT!!!!!! */

/* VARIABLES */
let title = document.getElementById("tts"),
    button = document.getElementById("btn"),
    questions = {},
    quotes = [],
    currentQuestion = 0,
    currentQuote = 0,
    currentPage = 1,
    selectedAnswers = [],
    timer = 30,
    yourScore = 0,
    highScore = 0,
    choicesRadios = ["o1", "o2", "o3", "o4"],
    quizStarted = true;


/* FETCH QUESTIONS FROM JSON FILE */
fetch("./assets/json/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        questions = data.questions;
        quotes = data.quotes;
    });

/* INIT THE QUIZ */
button.addEventListener("click", function () {
    let choices = document.getElementById("choices"),
    quizStarted = false,
    countdownInterval = setInterval(function () {
        timer--;
        showCountdownTimer();
        if (!quizStarted) {
            return;
        }
        if (timer <=0){
            clearInterval(countdownInterval);
            title.textContent = "Time's up!";
        }
    }, 1000);
    if (button.textContent == "START") {
        showCountdownTimer();
        questionsExchange();
        choices.style.display = "block";
        button.style["background-color"] = "purple";
        button.textContent = "NEXT";
        quizStarted = true;
        console.log("The If");
    }

    /* CYCLE THROUGH QUESTIONS */
    else if (currentPage < 6) {
        questionsExchange();
        console.log("The first Else If");
    }

    else if (currentPage == 6) {
        button.textContent = "SUBMIT";
        questionsExchange();
        console.log("The second Else If");
    }

    else {
        clearInterval(countdownInterval);
        console.log("End of quiz!");
    }

    console.log("The current page number is: " + currentPage);
});

/*  FUNCTIONS */
function showCountdownTimer() {
    title.textContent = "You have " + timer + " seconds left.";
};

function questionsExchange() {
    let choicesLabels = ["l1", "l2", "l3", "l4"],
        question = document.getElementById("question");
    for (var x = 0; x < choicesLabels.length; x++) {
        question.textContent = questions[currentQuestion].questionText;
        document.getElementById(choicesLabels[x]).textContent = questions[currentQuestion].choices[x];
    };
    currentQuestion = (currentQuestion + 1) % questions.length;
    currentQuote = (currentQuote + 1) % quotes.length;
    quote.textContent = quotes[currentQuote];
    currentPage++;
};

function clearSelected() {
    let radioGroupName = document.getElementsByName("choiceOptions")
    for (let i = 0; i < radioGroupName.length; i++)
        radioGroupName[i].checked = false;
};

function getSelectedRadio() {
    var radios = document.getElementsByName("choiceOptions");
    var selected = Array.from(radios).find(radio => radio.checked);
    selectedAnswers.push(selected.value);
    console.log(selectedAnswers);
};

function tallyScore() {
    let correctAnswers = ['4', '1', '2', '2', '3'];
    for (let x = 0; x < questions.length; x++) {
        if (correctAnswers[x] == questions[x].correctChoice) {
            yourScore++;
        }
        return;
    }
};

// function countDown() {
//     timer--;
//     title.textContent = timer;

//     if (timer === 0) {
//         clearInterval(startTimer);
//     }
// };

// let startTimer = setInterval(countDown, 1000)

// function displayCountdownTimer() {
//     timer--;
//     title.textContent = "You have " + timer + " seconds left.";
//     if (timer === 0 || currentPage >= 7) {
//         title.textContent = "Quiz over.";
//         return;
//     }
// };

/* CHECKS */
this.onload = (event) => {
    console.log("The current page number is: " + currentPage);
};