/* QUESTIONS & QUOTES */
quotes = [
    "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” - Mister Rogers",
    "“Life comes at you pretty fast. If you don't stop and look around once in a while, you could miss it.” - Jeff Spicoli",
    "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. - Walter Anderson",
    "“You are the only person on earth who can use your ability.” - Zig Ziglar",
    "“The road to success and the road to failure are almost exactly the same.” - Colin R. Davis",
    "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” - Diane McLaren",
    "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” - Mark Twain",
    "“Each time we face our fear, we gain strength, courage, and confidence in the doing.” - Theodore Roosevelt",
    "“Experience is a hard teacher because she gives the test first, the lesson afterwards.” - Vernon Sanders Law",
    "“Nine tenths of education is encouragement.” - Anatole France",
    "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”  - Dale Carnegie",
    "“Learn as if you will live forever, live like you will die tomorrow.” - Mahatma Gandhi",
    "“Practice like you've never won. Perform like you've never lost.” - Bernard F. Asuncion",
    "“We cannot solve problems with the kind of thinking we employed when we came up with them.” - Albert Einstein",
    "“My Mama says that alligators are ornery because they got all them teeth and no toothbrush.” - Bobby Boucher"
];

quizQuestions = [
    {
        question: "What determines the number of parameters passed to a function?",
        options: [
            "The number of pairs of braces inside the function's braces.",
            "Whether or not the function contains a loop.",
            "The function contains a return statement.",
            "One for each argument."
        ],
        answer: 4
    },
    {
        question: "Which is the correct way to define an array?",
        options: [
            "var array = ['item1','item2','item3']",
            "const array = for (i=0;i<array.length;i++){'item1','item2','item3'}",
            "var array = [1=('item1')2=('item2'')3=('item3')]",
            "array='item1','item2','item3'"
        ],
        answer: 1
    },
    {
        question: "True or False: Java is another name for JavaScript.",
        options: [
            "True",
            "False",
            "All of the above.",
            "None of the above."
        ],
        answer: 2
    },
    {
        question: "Which is the correct 'OR' logical operator?",
        options: [
            "&&",
            "||",
            "!",
            "i++"
        ],
        answer: 2
    },
    {
        question: "How do you call the nameOfFunction() function?",
        options: [
            "Hey nameOfFunction()! Come over here!",
            "function nameOfFunction('click',y);",
            "nameOfFunction();",
            "while (i<nameOfFunction[0].length){return nameOfFunction()};"
        ],
        answer: 3
    }
];

/* GLOBAL VARIABLES */
let title = document.getElementById("title"),
    question = document.getElementById("question"),
    options = document.getElementById("options"),
    button = document.getElementById("start"),
    countdownTimer,
    timer = 30,
    yourScore;

/* INIT THE QUIZ */
button.addEventListener("click", function (event) {
    event.preventDefault();
    title.textContent = "You have 30 seconds left.";
    button.style.display = "none";
    options.style.display = "flex";
    var countdownTimer = setInterval(function () {
        timer--;
        if (timer > 1) {
            title.textContent = `You have ${timer} seconds left.`;
        }
        if (timer == 1) {
            title.textContent = `You have ${timer} second left!`;
        }
        if (timer <= 0) {
            clearInterval(countdownTimer);
            title.textContent = "Time's up!"
        }
        if (currentQuestion == 5) {
            clearInterval(countdownTimer);
        }
    }, 1000);
    showQuestionText();
});

/* MONITOR BUTTONS */
let buttons = document.querySelectorAll('.selections');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (button.value != quizQuestions[currentQuestion - 1].answer) {
            timer -= 5;
        }
        showQuestionText();
    })
});

var currentQuestion = 0;
var enterInitials = document.getElementById("initials");
var btnlbl = document.getElementById("strtlbl")

/* CYCLE QUESTIONS */
function showQuestionText() {
    for (let i = 0; i < buttons.length; i++) {
        quote.textContent = quotes[randomNumber()];
        if (currentQuestion == 5) {
            options.style.display = "none";
            yourScore = timer;
            question.textContent = `You finished with ${yourScore} seconds left!`;
            enterInitials.style.display = "block";
            button.style.display = "block";
            btnlbl.textContent = "SUBMIT";
            quote.textContent = quotes[10];
            title.textContent = "End of quiz."
            clearInterval(countdownTimer);
            return;
        }
        if (currentQuestion <= 5) {
            question.textContent = quizQuestions[currentQuestion].question;
            document.getElementById(`option${i + 1}`).textContent = quizQuestions[currentQuestion].options[i];
        }
    }
    currentQuestion += 1;
};
quote.textContent = quotes[randomNumber()];


function randomNumber() {
    return Math.floor(Math.random() * 15);
};
