let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

function quotegeneration() {
    spinner.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.value = jsonData.content;
            quoteDisplay.textContent = quoteDisplay.value;
        });

}
let count = 0;
let intervalId = setInterval(function() {
    count += 1;
    timer.textContent = count;
}, 1000);
submitBtn.onclick = function() {
    if (quoteDisplay.value === quoteInput.value) {
        clearInterval(intervalId);
        result.textContent = "You typed in " + count + "secconds.";
    } else {
        clearInterval(intervalId);
        result.textContent = "You typed incorrect sentence";
    }
};
resetBtn.onclick = function() {
    spinner.classList.remove("d-none");
    clearInterval(intervalId);
    quotegeneration();
};
quotegeneration();
