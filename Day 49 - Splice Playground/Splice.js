let arr = [1, 7, 3, 1, 0, 20, 77];
let stringifyedArr = JSON.stringify(arr);
let spliceElement = [0, 0, 0];

let updatedArray = document.getElementById("updatedArray");
updatedArray.textContent = stringifyedArr;


let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");

function spliceFunction() {
    if (spliceElement[2] === "") {
        arr.splice(spliceElement[0], spliceElement[1]);
        stringifyedArr = JSON.stringify(arr);
        updatedArray.textContent = stringifyedArr;
    } else {
        arr.splice(spliceElement[0], spliceElement[1], spliceElement[2]);
        stringifyedArr = JSON.stringify(arr);
        updatedArray.textContent = stringifyedArr;
    }

}


spliceBtn.onclick = function() {
    let startIndexInputValue = parseInt(startIndexInput.value);
    let deleteCountInputValue = parseInt(deleteCountInput.value);
    let itemToAddInputValue = itemToAddInput.value;
    if (isNaN(startIndexInputValue)) {
        alert("Kindly Enter The Start Index");
    } else if (typeof(startIndexInputValue) !== "number") {
        alert("Start Index Must be number");
    } else {
        spliceElement[0] = (startIndexInputValue);
    }

    if (isNaN(deleteCountInputValue)) {
        spliceElement[1] = 0;
    } else if (typeof(deleteCountInputValue) === "number") {
        spliceElement[1] = deleteCountInputValue;
    } else {
        alert("Delete Index Must be number");
    }

    if ((itemToAddInputValue) === "") {
        spliceElement[2] = itemToAddInputValue;
        alert("To splice the array enter the any Number or String");
    } else {
        if (parseInt(itemToAddInputValue)) {
            spliceElement[2] = parseInt(itemToAddInputValue);
        } else {
            spliceElement[2] = (itemToAddInputValue);
        }

    }
    spliceFunction();

};
