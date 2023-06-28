let btnPrsd = false;

function startCountdown() {
  // Set the target time for the work start countdown (e.g., 1:20 PM)
  const targetTime = new Date();
  targetTime.setHours(13, 20, 0); // Set the desired hour, minute, and second

  // Set the target time for the work end countdown (e.g., 10:30 PM)
  const targetEndTime = new Date();
  targetEndTime.setHours(22, 30, 0); // Set the desired hour, minute, and second

  // Get the current time
  const currentTime = new Date();

  // Check if the current time is already past the target time for today
  if (currentTime > targetTime) {
    // Increment the current date by one day
    targetTime.setDate(targetTime.getDate() + 1);
  }

  // Check if the current time is already past the target time for today
  if (currentTime > targetEndTime) {
    // Increment the current date by one day
    targetEndTime.setDate(targetEndTime.getDate() + 1);
  }

  if(btnPrsd = true){
    targetTime.setDate(targetTime.getDate() + 1);
    targetEndTime.setDate(targetEndTime.getDate() + 1);
  }
  

  // Start the countdown interval
  setInterval(updateCountdown, 1000, targetTime);
  setInterval(updateEndCountdown, 1000, targetEndTime);
}

function updateCountdown(targetTime, addHrs) {
  const currentTime = new Date();
  const distance = targetTime - currentTime;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance / (1000 * 60 * 60)) + addHrs);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

function updateEndCountdown(targetEndTime, addHrs) {
  const currentTime = new Date();
  const distance = targetEndTime - currentTime;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance / (1000 * 60 * 60)) + addHrs);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('endCountdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

document.getElementById("myButton").addEventListener("click", function () {
  // Code to be executed when the button is clicked
  alert("Enjoy your day off!");
  btnPrsd = true
  startCountdown;
});

// Start the countdown when the page loads
window.onload = startCountdown;
