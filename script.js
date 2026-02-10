const btn = document.getElementById("themeToggle");

function applyTheme(theme){
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  if(btn){
    btn.textContent = theme === "dark"
  ? "Dark Mode 🌙"
  : "Pink Mode ☀️";

  }
}

const saved = localStorage.getItem("theme");
if(saved){
  applyTheme(saved);
} else {
  applyTheme("light");
}

if(btn){
  btn.addEventListener("click", () => {
    const current = document.body.dataset.theme;
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.querySelector("h2")?.textContent;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.textContent === current) {
      link.classList.add("active");
    }
  });
});