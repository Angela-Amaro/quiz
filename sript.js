var correct = document.querySelector(".answer");
var incorrect = document.querySelector(".wronganswer");
var time = document.querySelector(".time");
var secondsLeft = 60;
var startbutton = document.querySelector(".start");

function timer() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            time.textContent = "You ran out of time!";
        }
    }, 1000);

}

startbutton.addEventListener("click", timer);
        //want to make start button disapear after being clicked

        //show first random question
         //timer decreases when answer is wrong
         
        //game is over when timer reaches 0 or all questions answered

        //local.storage for initials and score