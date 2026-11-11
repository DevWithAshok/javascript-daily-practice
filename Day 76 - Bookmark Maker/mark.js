// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
siteNameInput.addEventListener("change", function() {
    siteNameInput.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            siteNameErrMsg.textContent = "Required*";
        } else {
            siteNameErrMsg.textContent = "";
        }
    });
});

siteUrlInput.addEventListener("change", function() {
    siteUrlInput.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            siteUrlErrMsg.textContent = "Required*";
        } else {
            siteUrlErrMsg.textContent = "";
        }
    });
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.classList.add("btn-primary");

    let lisitename = document.createElement("li");
    let sitename = document.createElement("h1");
    let asiteurl = document.createElement("a");
    sitename.textContent = siteNameInput.value;
    asiteurl.textContent = siteUrlInput.value;
    asiteurl.href = siteUrlInput.value;
    asiteurl.target = "_blank";

    bookmarksList.appendChild(lisitename);
    lisitename.appendChild(sitename);
    lisitename.appendChild(asiteurl);
});
