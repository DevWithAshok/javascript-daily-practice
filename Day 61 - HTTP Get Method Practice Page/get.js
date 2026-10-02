let responseData = "";
let sendGetRequestBtn = document.getElementById("sendGetRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
sendGetRequestBtn.onclick = function() {
    let url = "https://gorest.in/public/v2/users";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            requestStatus.textContent = response.status;
            return response.text();
        })
        .then(function(data) {
            responseData = JSON.parse(data);
            httpResponse.textContent = data;
            console.log(data);
        });
};
