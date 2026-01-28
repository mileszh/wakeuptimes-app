const calcBtn = document.getElementById("calc-btn");
calcBtn.addEventListener("click", calcWakeUpTimes);
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");

function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const timeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });

    const cycleDiv = document.createElement("div");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.setAttribute("class", "cycle");
    cycleDiv.textContent = timeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }
}
