let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let errorMessageElement = document.getElementById("errorMessage");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

function tipCalculator() {
    if (billAmountElement.value === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else if (percentageTipElement.value === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageElement.textContent = ""
        let calculatedValue = (parseInt(percentageTipElement.value) / 100) * parseInt(billAmountElement.value);
        tipAmountElement.value = calculatedValue
        totalAmountElement.value = calculatedValue + parseInt(billAmountElement.value)
    }
}
