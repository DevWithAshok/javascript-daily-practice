let counterElement = document.getElementById("counterValue");

function decreaseNumber() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    console.log(updatedCounterValue);
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        document.getElementById("counterValue").style.color = "Green";
    } else if (updatedCounterValue < 0) {
        document.getElementById("counterValue").style.color = "Red";

    } else {
        document.getElementById("counterValue").style.color = "Black";
    }
}

function increaseNumber() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    console.log(updatedCounterValue);
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        document.getElementById("counterValue").style.color = "Green";
    } else if (updatedCounterValue < 0) {
        document.getElementById("counterValue").style.color = "Red";

    } else {
        document.getElementById("counterValue").style.color = "Black";
    }
}

function resetNumber() {
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
    document.getElementById("counterValue").style.color = "Black"

}
