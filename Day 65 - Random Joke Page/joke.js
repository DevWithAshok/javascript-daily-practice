let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

jokeBtn.onclick = function() {
    spinner.classList.remove("d-none");
    let option = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/jokes/random", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            jokeText.textContent = jsonData.value;
            // console.log(jsonData);
        });
};
