let clickCounterContainer = document.getElementById("clickCounterContainer");
clickCounterContainer.style.backgroundColor = "#f1f5f8";
let counterValue = document.getElementById("counterValue");
counterValue.style.color = "#c20a72";
counterValue.value = 0;
counterValue.textContent = counterValue.value;
let incrementBtn = document.getElementById("incrementBtn");
incrementBtn.style.width = "80px";
incrementBtn.onclick = function() {
    counterValue.value = parseInt(counterValue.value) + 1;
    counterValue.textContent = counterValue.value;
    console.log(counterValue.value);
    localStorage.setItem("clickCount", counterValue.value);
};
