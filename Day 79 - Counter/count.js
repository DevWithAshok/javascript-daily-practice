let counterValue = document.getElementById("counterValue");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let count = 0;

function onDecrement() {
    if (count%2===0){
        count-=2;
        counterValue.textContent = count;
    }else{
        count-=1;
        counterValue.textContent = count;
    }
}

function onIncrement() {
    if (count%2===0){
        count+=5;
        counterValue.textContent = count;
    }else{
        count+=10;
        counterValue.textContent = count;
    }
}

function onReset() {
    count = 0;
    counterValue.textContent = count;
}
