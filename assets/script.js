//Timer Function---------------------------------------------------
var timerTic = document.querySelector("#timer");
var timeInterval
var timeRemaining
var timeLeft = 120
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

//Showing question--------------------------------------------------
var start = document.querySelector(".btn");
var instruc = document.querySelector("#bign")
var dofirst = document.querySelector(".dofirst")
var questhow = document.querySelector(".qass")
var showq = function () {
    if (q < questionBank.length) {
        qtion.textContent = questionBank[q].qtion;
        choiceOne.textContent = questionBank[q].selection[0];
        choiceTwo.textContent = questionBank[q].selection[1];
        choiceThree.textContent = questionBank[q].selection[2];
    }
};
start.addEventListener("click", function (event) {
    timer();
    showq();
    dofirst.style.display = "none";
    questhow.style.display = "block";
});

//Questions-----------------------------------------------------------
var qtion = document.querySelector("#qtion");
var selection = document.querySelector("#choices");
var choiceOne = document.querySelector("#c1");
var choiceTwo = document.querySelector("#c2");
var choiceThree = document.querySelector("#c3");
var q = 0;
var questionBank = [
    {
        qtion: "Which is has the biggest text?",
        selection: ["H1", "H2", "H3"],
        answer: "H1"
    },
    {
        qtion: "The external JavaScript file must contain the <script> tag.",
        selection: ["True", "False", "Maybe",],
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
        qtion: "What date is Lisa's birthday from the simpsons land on?",
        selection: ["May 4th 1992", "May 9th 1981", "May 5th 1862"],
        answer: "May 9th 1981"
    },
];

//This is what happens when you click the right/wrong answer---------------------------
var ans = document.querySelector("#correction");
function rightAnswer(event) {
    if (q >= questionBank.length) {
        finished();
        clearInterval(timeInterval);
    } else {
        if (event === questionBank[q].answer) {
            ans.textContent = "correct!"
            sv()
        } else {
            timeLeft -= 2;
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

// saving to local storage--------------------------------------------------------------
var sub = document.querySelector("#sub")
var keepScore = 1

var sv = function () {
    if (ans.textContent === "correct!") {
        localStorage.setItem("score", JSON.stringify(keepScore))
        keepScore++;
    }
};
var player = function () {
    var nam = document.querySelector("#name")
    var playerName = (nam).value;
    localStorage.setItem("name", JSON.stringify(playerName))
};
var tong = function () {
    var shwlead = document.querySelector(".lead")
    shwlead.style.display = "block"
}

sub.addEventListener("click", function () {
    player()
    hidename()
    tong()
});
//pulling information from local storage and leader board -------------------------------------
var plyrnm = localStorage.getItem("name")
var plyrscr = localStorage.getItem("score")
var leadbrd = function () {
    var usinfo = document.querySelector("#stats")
    usinfo.textContent = plyrnm + plyrscr;
}
var strtovr = document.querySelector("#strtovr")
var ldrbrd = document.querySelector("#leaderboard")
var clr = document.querySelector("#clr")
var gobk = function () {
    dofirst.style.display = "block"
    ldrbrd.style.display = "none"
}
var clearn = function () {
    localStorage.clear();
}
strtovr.addEventListener("click", function () {
    gobk()
});
clr.addEventListener("click", function () {
    clearn()
})


//when the quiz is over or you run out of time------------------------------------------
var entname = document.querySelector(".ui")
var doone1 = function () {
    entname.style.display = "block"
}
var hidename = function () {
    entname.style.display = "none"
}
var finished = function () {
    selection.remove("#choices")
    qtion.remove("#qtion")
    doone1()
    leadbrd()
    
}




