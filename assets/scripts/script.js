/* VARIABLES */
var title = document.getElementById("tts");
var button = document.getElementById("btn");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var quote = document.getElementById("quote");

let questions = {},
    quotes = [],
    externalData = {},
    currentQuestion = 0,
    currentQuote = 0,
    currentPage = 0,
    selectedAnswers = [],
    quizStarted = false,
    timer = 30,
    yourScore = 0,
    highScore = 0,
    choicesLabels = ["l1", "l2", "l3", "l4"],
    choicesRadios = ["o1","o2","o3","o4"];


/* FETCH QUESTIONS FROM JSON FILE */
fetch("./assets/json/data.json")
    .then(function (response) {
        return response.json();
    }
    )
    .then(function (data) {
        console.log(data);
        questions = data.questions;
        quotes = data.quotes;
        externalData = data;
    }
    );

for (var dataItems in externalData) {
    console.log(dataItems);
    console.log(externalData[dataItems])
}

/* INIT THE QUIZ */
button.addEventListener("click", function () {
    if (button.textContent == "START") {
        question.textContent = questions[currentQuestion].questionText;
        questionsExchange();
        choices.style.display = "block";
        button.style["background-color"] = "purple";
        button.textContent = "NEXT";
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
            if (currentPage == 5 || timer <= 0) {
                clearInterval(countdownInterval);
                quizStarted = false;
            }
            showCountdownTimer();
        }, 1000);
    }
    /* CYCLE THROUGH QUESTIONS */
    else if (currentPage < 5) {
        
        currentQuestion = (currentQuestion + 1) % questions.length;
        question.textContent = questions[currentQuestion].questionText;
        questionsExchange();
        currentQuote = (currentQuote + 1) % quotes.length;
        quote.textContent = quotes[currentQuote];
        currentPage++;
        console.log(currentPage);
    }
    else{
        console.log("End of quiz!");
        clearInterval(countdownInterval);
    }
}
);

/*  FUNCTIONS */
function showCountdownTimer() {
    title.textContent = "You have " + timer + " seconds left.";
};

function nextQuestion() {
    if (x >= questions.length - 1) {
        return;
    }
    x++;
};

function questionsExchange() {
    for (var x = 0; x < choicesLabels.length; x++) {
        document.getElementById(choicesLabels[x]).textContent = questions[currentQuestion].choices[x];
    }
};

function clearSelected(GroupName)
{
  var ele = document.getElementsByName(GroupName);
	for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}
