let userInput = document.getElementById("userInput");
let sendDeleteRequestBtn = document.getElementById("sendDeleteRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");

sendDeleteRequestBtn.onclick = function() {
    let userId = userInput.value;
    let url = "https://gorest.in/public/v2/users/" + userId;
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer ACCESS-TOKEN"
        }
    };
    fetch(url, options)
        .then(function(response) {
            requestStatus.textContent = response.status;
            return response.json();
        })
        .then(function(jsonBody) {
            console.log(jsonBody);
            httpResponse.textContent = JSON.stringify(jsonBody);
            console.log(httpResponse.textContent);
        });
};
