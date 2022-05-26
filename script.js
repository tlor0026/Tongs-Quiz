//timer variables
var timerTic = document.querySelector(".timer");
var timeInterval
var timeRemaining
var timeLeft = 160
var start = document.querySelector("#btn");
//question section variables
var qsect = document.querySelector(".guess");

//Multipul Choice section variables
var qtion = document.querySelector(".qtion");
var selection = document.querySelector(".choices");
var choiceOne = document.querySelector(".c1");
var choiceTwo = document.querySelector(".c2");
var choiceThree = document.querySelector(".c3");
var q =0;

//Correction section variables
var answer = document.querySelector(".correction");

//Timer Function
var timer = function () {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerTic.textContent = "TIMER: " + timeLeft;
        if (timeLeft === 0 || q >= questionBank.length) {
            clearInterval(timeInterval);
            finished()
        }
    }, 1000);
}

//Showing question
var showq = function () {
    if (q < questionBank.length) {
        qtion.textContent = questionBank[q].qtion;
        choiceOne.textContent = questionBank[q].selection[0];
        choiceTwo.textContent = questionBank[q].selection[1];
        choiceThree.textContent = questionBank[q].selection[2];
    }
}

//Questions

var questionBank = [
    {
        qtion: "Which is has the biggest text?",
        choices: ["H1", "H2", "H3"],
        answer: "h1"
    },
    {   
        qtion: "The external JavaScript file must contain the <script> tag.",
        selection: ["True", "False", "Maybe", "I don't know"],
        answer: "False"
    },
]

// Event listeners
start.addEventListener("click"); {
    timer();
    showq();
};

  onclick="myFunction()"
  
  selection.addEventListener("click", function (event) {
    var event = event.target;
    compareAnswer(event.textContent.trim());
  });