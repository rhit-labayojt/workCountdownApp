let btnPrsd = null;

function startCountdown() {

  // Set the target time for the work start countdown (1:20 PM), end countdown 10:30 PM)
  const targetTime = new Date();
  targetTime.setHours(13, 20, 0); // Set the desired hour, minute, second

  const targetEndTime = new Date();
  targetEndTime.setHours(22, 30, 0); // Set the desired hour, minute, second

  // Get current time
  const currentTime = new Date();

  console.log(localStorage.getItem('btnPrsd'))

    // Check if: current time is past target time for today || no work today => Increment current date by one day
    if(currentTime > targetTime){
      targetTime.setDate(targetTime.getDate() + 1);
    }else if("true"==localStorage.getItem('btnPrsd')){
      targetTime.setDate(targetTime.getDate() + 1);
    }else if(currentTime < targetTime && "false"==localStorage.getItem('btnPrsd')){
      targetTime.setDate = new Date();
      targetTime.setHours(13, 20, 0);
    }
    if (currentTime > targetEndTime || "true"==localStorage.getItem('btnPrsd')) {
      targetEndTime.setDate(targetEndTime.getDate() + 1);
    };

  // Start the countdown interval
  setInterval(updateCountdown, 1000, targetTime, targetEndTime);
};

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

};

document.getElementById("noWorkBtn").addEventListener("click", function () {
  // alert("Enjoy your day off!");
  btnPrsd = true;
  localStorage.setItem('btnPrsd', btnPrsd);
  startCountdown();
});

document.getElementById("workBtn").addEventListener("click", function () {
  // alert("Oh boy..");
  btnPrsd = false;
  localStorage.setItem('btnPrsd', btnPrsd);
  startCountdown();
});

// Start the countdown when the page loads
window.onload = startCountdown;

