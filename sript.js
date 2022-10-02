var correct = document.querySelector(".answer");
var incorrect = document.querySelector(".wronganswer");
var time = document.querySelector(".time");
var secondsLeft = 120;

function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);

}

function sendMessage() {
    time.textContent = "You ran out of time!";
}

timer();