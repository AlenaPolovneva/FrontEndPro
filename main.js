let actualTime = 85;
const timerElement = document.getElementById('timer');
let timerInterval;

function renderTimer () {
const minutes = Math.floor(actualTime / 60);
const seconds = actualTime % 60;

    let minutesText = minutes < 10 ? '0' + minutes : minutes;
    let secondsText = seconds < 10 ? '0' + seconds : seconds;

    timerElement.textContent = minutesText + ':' + secondsText;
}
function startTimer() {
    timerInterval = setInterval(() => {
     if (actualTime > 0) {
         actualTime --;
         renderTimer();
     } else {
         clearInterval(timerInterval);
     }
    }, 1000);
}
renderTimer();
startTimer();
