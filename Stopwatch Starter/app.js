function startTimer() {
  let startTime = Date.now();
 let cancelID = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  cancelAnimationFrame(cancelID);
}

function resetTimer() {

}

function updateTimer() {
    requestAnimationFrame(updateTimer);
}