let btnPrsd = null;

function startCountdown() {
  console.log("1startCountdown btnPrsd = "+btnPrsd);

  // Set the target time for the work start countdown (1:20 PM)
  const targetTime = new Date();
  targetTime.setHours(13, 20, 0); // Set the desired hour, minute, and second

  // Set the target time for the work end countdown (10:30 PM)
  const targetEndTime = new Date();
  targetEndTime.setHours(22, 30, 0); // Set the desired hour, minute, and second

  // Get the current time
  const currentTime = new Date();

  console.log("2startCountdown btnPrsd = "+btnPrsd);
    
  // Check if the current time is past target time for today, Increment the current date by one day
 if (currentTime > targetTime || "true"==localStorage.getItem('name')) {
    console.log("btn is true");
    targetTime.setDate(targetTime.getDate() + 1);
  };
  if (currentTime > targetEndTime || "true"==localStorage.getItem('name')) {
    targetEndTime.setDate(targetEndTime.getDate() + 1);
  };

    // Check if the current time is past target time for today, decrement the current date by one day
 if (localStorage.getItem('name')=="false") {
  targetTime.setDate(targetTime.getDate() - 1);
};
if (localStorage.getItem('name')=="false") {
  targetEndTime.setDate(targetEndTime.getDate() - 1);
};

  console.log("3startCountdown btnPrsd = "+btnPrsd);
  // Start the countdown interval
  setInterval(updateCountdown, 2000, targetTime, targetEndTime);
  console.log("4startCountdown btnPrsd = "+btnPrsd);
};

function updateCountdown(targetTime, targetEndTime) {
  console.log("1updateCountdownbtnPrsd = "+btnPrsd);
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

  console.log("2updateCountdown btnPrsd = "+btnPrsd);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${hours1}h ${minutes1}m ${seconds1}s`;
  document.getElementById('endCountdown').innerHTML = `${hours2}h ${minutes2}m ${seconds2}s`;

  console.log("3updateCountdown btnPrsd = "+btnPrsd);
};

document.getElementById("noWorkBtn").addEventListener("click", function () {
  // Code to be executed when the button is clicked
  alert("Enjoy your day off!");
  btnPrsd = true;
  localStorage.setItem('btnPrsd', btnPrsd);
  // localStorage.getItem('btnPrsd')
  // console.log("btnPrsd = "+btnPrsd);
  startCountdown();
});

document.getElementById("workBtn").addEventListener("click", function () {
  // Code to be executed when the button is clicked
  alert("Oh boy");
  btnPrsd = false;
  localStorage.setItem('btnPrsd', btnPrsd);
  // localStorage.getItem('btnPrsd')
  // console.log("btnPrsd = "+btnPrsd);
  startCountdown();
});

// Start the countdown when the page loads
window.onload = startCountdown;

