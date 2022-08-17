import "./css/style.scss";

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.toggle("dark");
}

const prefresDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const toggleSwitch = document.querySelector(".switch-theme");
toggleSwitch.addEventListener("click", function () {
  let theme;
  if (!prefresDarkScheme.matches) {
    document.body.classList.toggle("dark");
    theme = document.body.classList.contains("dark") ? "dark" : "";
  }
  localStorage.setItem("theme", theme);
});
