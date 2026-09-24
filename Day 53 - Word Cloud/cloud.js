let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");
// userInput.style.fontSize=randomnumber;
// function addtothecloud(userInput){

// }
addBtn.onclick = function() {
    let size = Math.ceil(Math.random() * (wordCloud.length) + 20);
    console.log("1");
    if (userInput.value === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        errorMsg.textContent = "";
        let span = document.createElement("span");
        span.textContent = userInput.value;
        span.style.fontSize = size + "px";
        wordsContainer.appendChild(span);
        userInput.value = "";
    }
};

if (userInput.value === "") {

} else {

}
