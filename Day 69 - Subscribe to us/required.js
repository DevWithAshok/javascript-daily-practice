let myForm = document.getElementById("subscribeForm");
let namesEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let paraElrment = document.getElementById("nameErrMsg");
let emailElement = document.getElementById("emailErrMsg");
namesEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraElrment.textContent = "Required*";
    } else {
        paraElrment.textContent = "";
    }
});
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailElement.textContent = "Required*";
    } else {
        emailElement.textContent = "";
    }
});

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
})
