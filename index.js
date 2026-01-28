const calcBtn = document.getElementById("calc-btn");
calcBtn.addEventListener("click", calcWakeUpTimes);
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const resultSection = document.getElementById("result-section");
const promptSection = document.getElementById("prompt-section");
const returnBtn = document.getElementById("return-btn");
const refreshBtn = document.getElementById("refresh-btn");

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
  resultSection.classList.remove("hidden");
  promptSection.classList.add("hidden");
}

function goBack() {
  resultSection.classList.add("hidden");
  promptSection.classList.remove("hidden");
}

returnBtn.addEventListener("click", goBack);
refreshBtn.addEventListener("click", calcWakeUpTimes);
