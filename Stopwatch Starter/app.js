const timerMilliseconds = document.querySelector('.timer-milliseconds');
const timerSeconds = document.querySelector('.timer-seconds');
const timerMinutes = document.querySelector('.timer-minutes');  

let cancelID;
let startTime;


function startTimer() {
  startTime = Date.now();
 let cancelID = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  cancelAnimationFrame(cancelID);
}

function resetTimer() {

}

function updateTimer() {
   let millisElapsed = (Date.now() - startTime);
   cancelId = requestAnimationFrame(updateTimer);
}