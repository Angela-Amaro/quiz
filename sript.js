var timerInterval;
var correct = document.querySelector(".answer");
var incorrect = document.querySelector(".wronganswer");
var time = document.querySelector(".time");
var secondsLeft = 10;
var startbutton = document.querySelector(".start");
var currentIndex = 1;

function timer() {

    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Time left: " + secondsLeft;
        startbutton.style.display = 'none';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            time.textContent = "You ran out of time!";
            endgame();
        }
    }, 1000);

}

startbutton.addEventListener("click", startgame);

function questions(event) {
    if (event.target.matches("input")) {
        if (event.target.getAttribute("data-correct") != "answer") {
            secondsLeft = secondsLeft - 5;
        }
        displaynextquestion();
    }

}
function displaynextquestion() {
    if (currentIndex > 5) {
        clearInterval(timerInterval);
        endgame();
    }
    for (i = 1; i < 6; i++) {
        var questionEl = document.getElementById("question" + i);
        if (i == currentIndex) {
            questionEl.addEventListener("click", questions);
            questionEl.classList.add("show");
            questionEl.classList.remove("hidden");
        }
        else {
            questionEl.classList.remove("show");
            questionEl.classList.add("hidden");
        }
    }
    currentIndex++;
}

function startgame() {
    timer();
    displaynextquestion();

}

function endgame() {
    var qsEl = document.getElementById("qs");
    qsEl.classList.add("hidden");
    var buttonEl = document.getElementById("score");
    var endEl = document.getElementById("end");
    endEl.classList.remove("hidden");
    endEl.classList.add("show");
    buttonEl.addEventListener("click", submitScore);
    var spanEl = document.getElementById("totalscore");
    spanEl.textContent = secondsLeft;
    console.log(secondsLeft);
    console.log(spanEl);
}

function submitScore() {
    var inputEl = document.getElementById("init");
    var roster = localStorage.getItem("roster");
    var newScore = {
        "init": inputEl.value,
        "score": secondsLeft,
    }
    if (roster) {
        roster = JSON.parse(roster);
        roster.push(newScore);
    }
    else {
        roster = [newScore]
    }
    localStorage.setItem("roster", JSON.stringify(roster));
    console.log(inputEl.value);
}



        //local.storage for initials and score .parse andjson.stringify for arrays