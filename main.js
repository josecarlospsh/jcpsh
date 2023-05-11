import "./css/style.scss";

// change appearance theme
const toggleSwitch = document.querySelector(".switch-theme");
const prefersDarkScheme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.toggle("dark");
}

function switchTheme() {
  let theme;
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("dark");
    theme = document.body.classList.contains("light") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark");
    theme = document.body.classList.contains("dark") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
}

prefersDarkScheme.addEventListener("change", switchTheme);
toggleSwitch.addEventListener("click", function (e) {
  e.preventDefault();
  switchTheme();
});

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
