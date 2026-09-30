let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");
let duration;

function boom() {
    let timerValue = 10;
    duration = setInterval(function() {
        timer.textContent = timerValue;
        if (timerValue > 1) {
            timerValue -= 1;
            timer.textContent = timerValue;
        } else {
            timer.textContent = "BOOM";
        }
    }, 1000);
}
boom();

function defuse() {
    if (defuser.value === "defuser") {
        clearInterval(duration);
        timer.textContent = "You Did It!";
    }
}
defuser.addEventListener("keydown", defuse);
