let numbers = [17, 31, 77, 20, 63];
let stringifyedNumbers = JSON.stringify(numbers);
console.log(stringifyedNumbers);

let userInput = document.getElementById("userInput");
let indexOfNumber = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let userInputValue = parseInt(userInput.value);
    if (isNaN(userInputValue)) {
        alert("Entered value must be a number");
    } else {
        let res = numbers.findIndex(function(each) {
            if (each === userInputValue) {
                return true;
            } else {
                return false;
            }
        });
        indexOfNumber.textContent = res;
    }
}
