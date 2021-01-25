document.getElementById("about-nav").addEventListener("click", () => {
  document
    .getElementById("about")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
});
document.getElementById("port-nav").addEventListener("click", () => {
  document
    .getElementById("portfolio")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
});
document.getElementById("exp-nav").addEventListener("click", () => {
  document
    .getElementById("experience")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
});

const menu = document.getElementById("menu");
const bimbo = document.getElementById("bimbo");

menu.addEventListener("click", () => {
  bimbo.classList.toggle("open");
});
