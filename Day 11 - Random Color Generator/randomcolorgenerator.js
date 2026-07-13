let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let number = 0;
let bgContainerElement = document.getElementById("bgContainer");
bgContainerElement.style.backgroundColor = bgColorsArray[number];

function clickButton() {
    if (number < bgColorsArray.length) {
        number = number + 1;
        bgContainerElement.style.backgroundColor = bgColorsArray[number];
    }
}
