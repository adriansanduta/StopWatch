const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');  

let cancelID;
let startTime;


function startTimer() {
  startTime = Date.now();
 cancelID = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  cancelAnimationFrame(cancelID);
}

function resetTimer() {

}

function updateTimer() {
   let millisElapsed = (Date.now() - startTime);
   let secondsElapsed = millisElapsed / 1000;
   let minutesElapsed = secondsElapsed / 60;

   timerMilliseconds.innerHTML = millisElapsed % 1000;
   timerSeconds.innerHTML = Math.floor(secondsElapsed % 60);
   timerMinutes.innerHTML = Math.floor(minutesElapsed);
   cancelID = requestAnimationFrame(updateTimer);
}