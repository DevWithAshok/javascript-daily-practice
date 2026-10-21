let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");
let updateBtn = document.getElementById("updateBtn");
let updatePasswordForm = document.getElementById("updatePasswordForm");

function preventFunction(event) {
    event.preventDefault();
    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Required*";
    } else {
        newPasswordErrMsg.textContent = "";
    }
    if (confirmPassword.value === "") {
        confirmPasswordErrMsg.textContent = "Required*";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
}

function newPass(event) {
    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Required*";
    } else {
        newPasswordErrMsg.textContent = "";
    }
}

function confirmPass(event) {
    if (confirmPassword.value === "") {
        confirmPasswordErrMsg.textContent = "Required*";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
}
updateBtn.onclick = function() {
    if (confirmPassword.value !== newPassword.value) {
        confirmPasswordErrMsg.textContent = "Password Must Be Same";
    }
};
newPassword.addEventListener("blur", newPass);
confirmPassword.addEventListener("blur", confirmPass);
updatePasswordForm.addEventListener("submit", preventFunction);
