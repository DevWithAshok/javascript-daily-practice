let imageElement = document.getElementById("image");
let warningMessageElement = document.getElementById("warningMessage");
let maxWarningMessageElement = "Too big. Decrease the size of the Image.";
let minWarningMessageElement = "Can't visible. Increase the size of the Image.";
let imageWidthElement = document.getElementById("imageWidth");


let maxWidth = 300;
let minWidth = 100;
let defaultImageWidth = 200;


imageElement.style.width = (defaultImageWidth) + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function decrement() {
    if (defaultImageWidth <= minWidth) {
        warningMessageElement.textContent = minWarningMessageElement;
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let updatedValue = defaultImageWidth + "px";
        warningMessageElement.textContent = "";
        imageWidthElement.textContent = updatedValue;
        imageElement.style.width = updatedValue;
    }

}

function increment() {
    if (defaultImageWidth >= maxWidth) {
        warningMessageElement.textContent = maxWarningMessageElement;
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let updatedValue = defaultImageWidth;
        imageWidthElement.textContent = updatedValue + "px";
        imageElement.style.width = updatedValue + "px";
        warningMessageElement.textContent = "";
    }

}
