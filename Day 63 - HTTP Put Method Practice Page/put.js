let userInput = document.getElementById("userInput");
let requestBody = document.getElementById("requestBody");
let sendPutRequestBtn = document.getElementById("sendPutRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function sendPutHTTPRequest() {
    loading.classList.remove("d-none");
    requestStatus.classList.add("d-none");
    let userId = userInput.value.trim();
    const url = "https://gorest.in/public/v2/users/" + userId;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0" //88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0
        },
        body: requestBody.value
    };
    var statusCode;
    fetch(url, options)
        .then(function(response) {
            statusCode = response.status;
            requestStatus.textContent = (statusCode);
            return response.json();
        })
        .then(function(data) {
            loading.classList.add("d-none");
            requestStatus.classList.remove("d-none");

            let httpResponseEl = JSON.stringify(data);

            httpResponse.textContent = httpResponseEl;
        })
        .catch(function(error) {
            loading.classList.add("d-none");
            requestStatus.classList.remove("d-none");
            requestStatus.textContent = "Request failed";
            httpResponse.textContent = String(error);
        });
}

sendPutRequestBtn.addEventListener('click', sendPutHTTPRequest);
