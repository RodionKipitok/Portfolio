const btnDarkModo = document.querySelector(".dark-mode-btn");

// 1.System-level theme check

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme:dark)").matches
) {
  btnDarkModo.classList.add("dark-mode-btn-active");
  document.body.classList.add("dark");
}

// 2.Check darkMode in localStorage

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkModo.classList.add("dark-mode-btn-active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkModo.classList.remove("dark-mode-btn-active");
  document.body.classList.remove("dark");
}

//If system settings change, change the theme

window
  .matchMedia("(prefers-color-scheme:dark)")
  .addEventListener("change", (e) => {
    const newColorSheme = e.matches ? "dark" : "light";
    alert("change!");
    if (newColorSheme === "dark") {
      btnDarkModo.classList.add("dark-mode-btn-active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkModo.classList.remove("dark-mode-btn-active");
      document.body.classList.remove("dark");
    }
  });

// turn on dark mode with the button

btnDarkModo.onclick = function () {
  btnDarkModo.classList.toggle("dark-mode-btn-active");

  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
