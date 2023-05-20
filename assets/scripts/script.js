var title = document.getElementById("tts");
var begin = document.getElementById("button");
var question = document.getElementById("question");
var answers_list = document.getElementById("choices");
// var answer = do
var timer = 5;
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
// var question = "";

begin.addEventListener("click", function(){
    title.textContent = timer;
    question.textContent = questions[2].text;
    answers_list.style.display = "flex";
    // begin.style.display = "none";
    begin.textContent = "end";
});
