let startBtn = document.getElementById("startBtn");
let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");


function displayValues(fromValue, toValue) {
    let currentCount = fromValue;
    counterText.textContent = currentCount;
    let timer = setInterval(function() {
        if (currentCount < toValue) {
            currentCount += 1;
            counterText.textContent = currentCount;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
startBtn.onclick = function() {
    let fromValue = fromUserInputEl.value;
    let toValue = toUserInputEl.value;
    if (fromValue === "") {
        alert("Enter From Value");
    } else if (toValue === "") {
        alert("Enter To Value");
    } else {
        fromValue = parseInt(fromValue);
        toValue = parseInt(toValue);
        displayValues(fromValue, toValue);
    }
};
