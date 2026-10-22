let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let addUserForm = document.getElementById("addUserForm");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

function preventSubmit(event) {
    event.preventDefault();
}

function nameBlur(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
}

function emailBlur(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
}
nameEl.addEventListener("blur", nameBlur);
emailEl.addEventListener("blur", emailBlur);
addUserForm.addEventListener("submit", preventSubmit);
