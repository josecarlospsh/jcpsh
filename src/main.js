import "./style.css";

// year and clock
const date = document.querySelector(".date");
const options = {
  year: "numeric",
};
const dateNow = new Date();
date.innerHTML = dateNow.toLocaleDateString("en-US", options);

function clock() {
  const dateNow = new Date();
  const time = document.querySelector(".time");
  time.innerHTML = dateNow.toLocaleTimeString("en-US", {
    timeZone: "America/Lima",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
}
window.addEventListener("DOMContentLoaded", clock);
setInterval(clock, 1000);

// Hi
console.log(
  "%cHello World!",
  "color: #fff; background-color: #333; padding: 10px; font-size: 1.5em; font-weight: bold; border-radius: 5px;"
);