let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let msecond = document.getElementById('msecond');

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

btnStart.addEventListener('click', function() {
    timer = true;
    stopWatch();
});
btnStop.addEventListener('click', function() {
    timer = false;
});
btnReset.addEventListener('click', function() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
    msecond.textContent = "00";
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if (hr < 10) {
            hrToString = "0" + hrString;
        }
        if (min < 10) {
            minToString = "0" + minString;
        }
        if (sec < 10) {
            secToString = "0" + secString;
        }
        if (count < 10) {
            countToString = "0" + countString;
        }
        hour.textContent = hrString;
        minute.textContent = minString;
        second.textContent = secString;
        msecond.textContent = countString;
        setTimeout(stopWatch, 10);
    }
}