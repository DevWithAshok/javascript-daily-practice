let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let count = 0;
let minValue = parseInt(minutes.textContent);
console.log(minValue);
console.log(typeof(minValue));

startBtn.onclick=function(){setInterval(function() {
        count += 1;
        seconds.value = count;
        seconds.textContent = seconds.value;
        console.log(seconds.value);
        console.log(typeof(seconds.value));
        if (seconds.value === 60) {
            minValue += 1;
            minutes.textContent = minValue;
            count = 0;
            seconds.textContent = count;
        } else if (minValue === 60) {
            clearInterval(count);
            minutes.textContent = 0;
            seconds.textContent = 0;
        }
    }, 1000);
};
stopBtn.onclick = function() {
    clearInterval();
};
