let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionsButtonElement = document.getElementById("attractionsButton");

let aboutTabElement = document.getElementById("aboutTab");
let timeToVisitTabElement = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");

timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function aboutButton() {
    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElement.classList.add("d-none");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsTabElement.classList.add("d-none");
    attractionsButtonElement.classList.remove("selected-button");
}

function timeToVisitButton() {
    aboutTabElement.classList.add("d-none");
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitTabElement.classList.remove("d-none");
    timeToVisitButtonElement.classList.add("selected-button");
    attractionsTabElement.classList.add("d-none");
    attractionsButtonElement.classList.remove("selected-button");
}

function attractionsButton() {
    aboutTabElement.classList.add("d-none");
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitTabElement.classList.add("d-none");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsTabElement.classList.remove("d-none");
    attractionsButtonElement.classList.add("selected-button");
}
