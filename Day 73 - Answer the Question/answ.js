let questionsForm = document.getElementById("questionsForm");
let cityHyderabad = document.getElementById("cityHyderabad");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");
let submitBtn = document.getElementById("submitBtn");
let resultMsg = document.getElementById("resultMsg");
let answer = "delhi";
let selectedanswer = "";

cityHyderabad.addEventListener("change", function(event) {
    selectedanswer = event.target.value;
});
cityChennai.addEventListener("change", function(event) {
    selectedanswer = event.target.value;
});
cityDelhi.addEventListener("change", function(event) {
    selectedanswer = event.target.value;
});
cityMumbai.addEventListener("change", function(event) {
    selectedanswer = event.target.value;
});
submitBtn.onclick = function() {
    if (selectedanswer === "") {
        resultMsg.textContent = "Please Select The Answer!";
        resultMsg.style.color = "red";
        resultMsg.style.fontFamily = "bree serif";
    } else if (selectedanswer === answer) {
        resultMsg.textContent = "Correct Answer!";
        resultMsg.style.color = "green";
        resultMsg.style.fontFamily = "bree serif";
    } else {
        resultMsg.textContent = "Wrong Answer!";
        resultMsg.style.color = "red";
        resultMsg.style.fontFamily = "bree serif";
    }
};
questionsForm.addEventListener("submit", function() {
    event.preventDefault();
})
