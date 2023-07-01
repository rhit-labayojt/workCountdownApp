let btnPrsd = false;

function startCountdown() {
  console.log("startCountdown btnPrsd = "+btnPrsd);
  // Set the target time for the work start countdown (1:20 PM)
  const targetTime = new Date();
  targetTime.setHours(13, 20, 0); // Set the desired hour, minute, and second

  // Set the target time for the work end countdown (10:30 PM)
  const targetEndTime = new Date();
  targetEndTime.setHours(22, 30, 0); // Set the desired hour, minute, and second

  // Get the current time
  const currentTime = new Date();
    
  // Check if the current time is already past the target time for today
 if (currentTime > targetTime) {
    // Increment the current date by one day
    targetTime.setDate(targetTime.getDate() + 1);
  }else if (btnPrsd==true) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  // Check if the current time is already past the target time for today
   if (currentTime > targetEndTime) {
    // Increment the current date by one day
    targetEndTime.setDate(targetEndTime.getDate() + 1);
  }else if (btnPrsd==true) {
    targetEndTime.setDate(targetEndTime.getDate() + 1);
  }

  // Start the countdown interval
  setInterval(updateCountdown, 1000, targetTime, targetEndTime);
  // setInterval(updateEndCountdown, 1000, targetEndTime);


}

function updateCountdown(targetTime, targetEndTime) {
  const currentTime = new Date();
  const distance1 = targetTime - currentTime;
  const distance2 = targetEndTime - currentTime;

  // Calculate hours, minutes, and seconds
  const hours1 = Math.floor(distance1 / (1000 * 60 * 60));
  const minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  const hours2 = Math.floor(distance2 / (1000 * 60 * 60));
  const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${hours1}h ${minutes1}m ${seconds1}s`;
  document.getElementById('endCountdown').innerHTML = `${hours2}h ${minutes2}m ${seconds2}s`;

  console.log("updateCountdown btnPrsd = "+btnPrsd);
}

// function updateCountdown(targetTime) {
//   const currentTime = new Date();
//   const distance = targetTime - currentTime;

//   // Calculate hours, minutes, and seconds
//   const hours = Math.floor(distance / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the countdown
//   document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
// }

// function updateEndCountdown(targetEndTime) {
//   const currentTime = new Date();
//   const distance = targetEndTime - currentTime;

//   // Calculate hours, minutes, and seconds
//   const hours = Math.floor(distance / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the countdown
//   document.getElementById('endCountdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
// }

document.getElementById("noWorkBtn").addEventListener("click", function () {
  // Code to be executed when the button is clicked
  alert("Enjoy your day off!");
  btnPrsd = true;
  console.log("btnPrsd = "+btnPrsd);
  startCountdown();
});

document.getElementById("workBtn").addEventListener("click", function () {
  // Code to be executed when the button is clicked
  alert("Oh boy");
  btnPrsd = false;
  console.log("btnPrsd = "+btnPrsd);
  startCountdown();
});

// Start the countdown when the page loads
window.onload = startCountdown;

// window.onload = (event) => {
//   let btnPrsd = false;
//   startCountdown();
// };

