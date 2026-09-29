let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function onKeydown(event) {
    let liEle = document.createElement('li');
    liEle.textContent = event.keyCode;
    keyCodeList.appendChild(liEle);
}
userInput.addEventListener("keydown", onKeydown);
