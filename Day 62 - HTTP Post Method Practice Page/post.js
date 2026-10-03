let sendPostRequestBtn = document.getElementById("sendPostRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let requestBody = document.getElementById("requestBody");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");
let url = "https://gorest.in/public/v2/users";
sendPostRequestBtn.onclick = function() {
    loading.classList.remove("d-none");
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer ACCESS-TOKEN"
        },
        body: JSON.stringify(requestBody)
    };
    fetch(url, options)
        .then(function(response) {
            loading.classList.add("d-none");
            requestStatus.textContent = response.status;
            return response.text();
        })
        .then(function(JsonData) {
            let data = JSON.parse(JsonData);
            httpResponse.textContent = (JsonData);
            console.log(data);
        });
};
