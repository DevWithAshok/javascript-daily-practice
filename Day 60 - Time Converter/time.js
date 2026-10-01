let hours = document.getElementById("hoursInput");
let minutes = document.getElementById("minutesInput");
let alterMessage = document.getElementById("errorMsg");
let timerCount = document.getElementById("timeInSeconds");
let button = document.getElementById("convertBtn");
button.addEventListener("click", function() {
    if (hours.value === "") {
        alterMessage.textContent = "Please enter a valid number of hours";
        alterMessage.classList.add("altermessage");
    } else if (minutes.value === "") {
        alterMessage.textContent = "Please enter a valid number of minutes";
        alterMessage.classList.add("altermessage");
    } else {
        let hoursValue = parseInt(hours.value);
        let minutesValue = parseInt(minutes.value);
        let totalSeconds = ((hoursValue * 3600) + (minutesValue * 60));
        timerCount.textContent = totalSeconds + "s";
        timerCount.classList.add("timercount");
    }
});
