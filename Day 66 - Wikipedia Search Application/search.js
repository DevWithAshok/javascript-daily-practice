let searchInputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    if (result === 404) {
        let pEl = document.createElement("h1");
        pEl.textContent = "There is such word you entered in Wikipedia Try Again With Another Word";
        pEl.classList.add("result-title");
        searchResults.appendChild(pEl);
    }
    spinner.classList.add("d-none");
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResults.appendChild(resultItemEl);
    let {
        link,
        title,
        description
    } = result;
    let resultTitleEl = document.createElement("a");
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank";
    resultTitleEl.textContent = title;
    resultTitleEl.classList.add("result-title");
    resultItemEl.appendChild(resultTitleEl);
    let titleBreak = document.createElement("br");
    resultItemEl.appendChild(titleBreak);
    let resultLink = document.createElement("a");
    resultLink.href = link;
    resultLink.target = "_blank";
    resultLink.textContent = link;
    resultLink.classList.add("result-url");
    resultItemEl.appendChild(resultLink);
    let linkBreak = document.createElement("br");
    resultItemEl.appendChild(linkBreak);
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("link-description");
    resultItemEl.appendChild(descriptionEl);

}

function displayResult(searchResult) {
    if (searchResult.length >= 1) {
        for (let result of searchResult) {
            createAndAppendSearchResult(result);
        }
    } else {
        createAndAppendSearchResult(404)
    }

}

function searchWikipedia(event) {

    if (event.key === "Enter") {
        searchResults.textContent = "";
        spinner.classList.remove("d-none");
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResult(search_results);
                // console.log(jsonData);
            });
    }
}



searchInputEl.addEventListener("keydown", searchWikipedia);
