let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
console.log(searchInput.value);

function createaandappend(rawData) {
    let h1 = document.createElement("h1");
    h1.textContent = "Popular Books";
    searchResults.appendChild(h1);
    for (let i in rawData) {
        let {
            author,
            imageLink
        } = rawData[i];
        let img = document.createElement("img");
        img.src = imageLink;
        let p = document.createElement("p");
        p.textContent = author;
        searchResults.appendChild(img);
        searchResults.appendChild(p);
    }
}

function library(event) {
    if (event.key === "Enter") {
        searchResults.value = "";
        searchResults.textContent = "";
        spinner.classList.remove("d-none");
        let url = "https://apis.ccbp.in/book-store?title=" + searchInput.value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinner.classList.add("d-none");
                if (jsonData.search_results.length) {
                    createaandappend(jsonData.search_results);
                } else {
                    searchResults.textContent = "Not Found";
                }
            });
    }
}

searchInput.addEventListener("keydown", library);
