//let start = document.querySelector(".start");
//let restart = document.querySelector(".restart");
//let hours = document.querySelector(".hours");
//let minutes = document.querySelector(".minutes");
//let seconds = document.querySelector(".seconds");
//
//
//let flag = false;
//let interval;
//let hrs = 0;
//let mins = 0;
//let secs = 0;
//
//start.addEventListener("click", () => {
//    if (flag) {
//        flag = true;
//        interval = setInterval(() => {
//            secs++;
//            seconds.innerText = "secs";
//            if (secs === 60) {
//                minutes.innerText = "mins";
//                mins++;
//                secs = 0;
//                seconds.innerText = "secs";
//            }
//            else if (mins === 60) {
//                hours.innerText = "hrs";
//                hrs++;
//                mins = 0;
//                minutes.innerText = "mins";
//            }
//        }, 1000);
//    }
//    else {
//        flag = false;
//        clearInterval(interval);
//        start.innerText = "Stop";
//    }
//    console.log("hello1");
//});
//
//restart.addEventListener("click", () => {
//    mins = 0;
//    minutes.innerText = "00";
//    hrs = 0;
//    hours.innerText = "00";
//    secs = 0;
//    seconds.innerText = "00";
//    console.log("hello");
//});

let start = document.querySelector(".start");
let restart = document.querySelector(".restart");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let flag = false;
let interval;
let hrs = 0;
let mins = 0;
let secs = 0;

function updateDisplay() {
    hours.innerText = String(hrs).padStart(2, '0');
    minutes.innerText = String(mins).padStart(2, '0');
    seconds.innerText = String(secs).padStart(2, '0');
}

start.addEventListener("click", () => {
    if (!flag) {
        flag = true;
        start.innerText = "Stop";
        interval = setInterval(() => {
            secs++;
            if (secs === 60) {
                secs = 0;
                mins++;
                if (mins === 60) {
                    mins = 0;
                    hrs++;
                }
            }
            updateDisplay();
        }, 1000);
    } else {
        flag = false;
        clearInterval(interval);
        start.innerText = "Start";
    }
});

restart.addEventListener("click", () => {
    clearInterval(interval);
    flag = false;
    hrs = 0;
    mins = 0;
    secs = 0;
    updateDisplay();
});

