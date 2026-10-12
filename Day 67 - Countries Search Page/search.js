let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");
spinner.classList.remove("d-none");

function createAndAppendElements(result) {
    let {
        flag,
        name,
        population
    } = result;
    let countryCard = document.createElement("div");
    countryCard.classList.add("country-card", "d-flex", "flex-row", "align-items-center", "col-12", "col-md-5", "ml-2");
    resultCountries.appendChild(countryCard);
    let imgEl = document.createElement("img");
    imgEl.src = flag;
    imgEl.classList.add("country-flag");
    countryCard.appendChild(imgEl);
    let deatilsContainer = document.createElement("div");
    deatilsContainer.classList.add("ml-2");
    countryCard.appendChild(deatilsContainer);
    let nameEl = document.createElement("h1");
    nameEl.textContent = name;
    nameEl.classList.add("country-name");
    deatilsContainer.appendChild(nameEl);
    let pEl = document.createElement("p");
    pEl.textContent = population;
    deatilsContainer.appendChild(pEl);
    spinner.classList.add("d-none");
}

function displayResult(searchResults, searchValue) {
    let nameCountry = searchValue;
    for (let result of searchResults) {
        createAndAppendElements(result);
    }
}

let options = {
    method: "GET"
};
let url = "https://apis.ccbp.in/countries-data";
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        displayResult(jsonData);
        console.log(jsonData);
    });

function searchCountry(event) {
    spinner.classList.remove("d-none");
    resultCountries.textContent = "";
    let searchValue = searchInput.value;
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/countries-data";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let filteredCountries = jsonData.filter(function(country) {
                return country.name.toLowerCase().includes(searchValue.toLowerCase());
            });
            // console.log(filteredCountries);
            displayResult(filteredCountries);
            // console.log(jsonData);
        });
}
searchInput.addEventListener("keydown", searchCountry);
