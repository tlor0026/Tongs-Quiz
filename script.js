//timer variables
var timerTic = document.querySelector("#timer");
var timeInterval
var timeRemaining
var timeLeft = 160
//question section variables
var start = document.querySelector(".btn");
var instruc = document.querySelector("#bign")

//Multipul Choice section variables
var qtion = document.querySelector("#qtion");
var selection = document.querySelector("#choices");
var choiceOne = document.querySelector("#c1");
var choiceTwo = document.querySelector("#c2");
var choiceThree = document.querySelector("#c3");
var q =0;

//Correction section variables
var ans = document.querySelector("#correction");

//Scoreboard Variables
var score = document.querySelector("#scoreboard")

//Timer Function
var timer = function () {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerTic.textContent = "TIMER: " + timeLeft;
        if (timeLeft === 0 || q >= questionBank.length) {
            clearInterval(timeInterval);
            //finished()
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
        selection: [ "H1", "H2", "H3"],
        answer: "H1"
    },
    {   
        qtion: "The external JavaScript file must contain the <script> tag.",
        selection: [ "True", "False", "Maybe",],
        answer: "False"
    },
    {   
        qtion: "What comes first in a HTML?",
        selection: ["Body", "Head", "Meta Tags"],
        answer: "Meta Tags"
    },
    {   
        qtion: "What kind of bear is best?",
        selection: ["Black bear", "Beets", "Maybe", "Battlestar Galactica"],
        answer: "Black bear"
    },
    {   
        qtion: "What date does is Lisa's birthday from the simpsons land on?",
        selection: ["May 4th 1992", "May 9th 1981", "May 5th 1862"],
        answer: "May 9th 1981"
    },
];
//This is what happens when you click the right/wrong answer
function rightAnswer(event) {
    if (q >= questionBank.length) {
      finished();
      clearInterval(timeInterval);
    } else {
      if (event === questionBank[q].answer) {
        ans.textContent = "correct!"
      } else {
        timeLeft -= 10;
        ans.textContent = "wrong!"
      }
      score = timeLeft;
      q++;
      showq();
    }
  }
 selection.addEventListener("click", function (event) {
    var event = event.target;
    rightAnswer(event.textContent.trim());
  });
//when the quiz is over or you run out of time

var finished = function () {

}
// 
// Event listeners
start.addEventListener("click", function() {
    timer();
    showq();
    start.remove(".btn");
    instruc.remove(".bign");
    //leaderBtn.style.display = "none";
    //scoreCard.classList.add("hide");
});
