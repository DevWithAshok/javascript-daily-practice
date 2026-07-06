let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");

function mainPage() {
    colorPickerContainerElement.style.backgroundColor = "#ffffff";
    selectedColorHexCodeElement.textContent = "#ffffff"
}

function firstButton() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeElement.textContent = "#e0e0e0"
}

function secondButton() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeElement.textContent = "#6fcf97"
}

function thirdButton() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeElement.textContent = "#56ccf2"
}

function fourthButton() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeElement.textContent = "#bb6bd9"
}
