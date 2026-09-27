let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let timer;

function displayCount(a) {
    let counterValue = a;
    timerText.textContent = counterValue + " seconds left";
    timer = setInterval(function() {
        if (counterValue > 1) {
            counterValue -= 1;
            timerText.textContent = counterValue + " seconds left";
        } else {
            timerText.textContent = "Your moment is complete";
        }
    }, 1000);
}
twentySecondsBtn.onclick = function() {
    clearInterval(timer);
    displayCount(20);
};
thirtySecondsBtn.onclick = function() {
    clearInterval(timer);
    displayCount(30);
};
fortySecondsBtn.onclick = function() {
    clearInterval(timer);
    displayCount(40);
};
oneMinuteBtn.onclick = function() {
    clearInterval(timer);
    displayCount(60);
};
