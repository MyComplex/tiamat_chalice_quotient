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
    choicesRadios = ["o1", "o2", "o3", "o4"];


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
        quote = document.getElementById("quote"),
        quizStarted = false,
        countdownInterval = setInterval(function () {
            if (!quizStarted) {
                return;
            }
            timer--;
            showCountdownTimer();
        }, 1000);

    if (button.textContent == "START") {
        questionsExchange();
        choices.style.display = "block";
        button.style["background-color"] = "purple";
        button.textContent = "NEXT";
        quizStarted = true;
        // showCountdownTimer();
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

/* CHECKS */
this.onload = (event) => {
    console.log("The current page number is: " + currentPage);
};