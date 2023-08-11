const menu = document.querySelectorAll(".menu-icon");
const list = document.querySelectorAll(".list-item");
const header_nav = document.querySelector(".header");
const toggleNavbar = () => {
  header_nav.classList.toggle("active");
};
const closeMenu = () => {
  header_nav.classList.remove("active")
};
for (let a = 0; a < 3; a++) {
  list[a].addEventListener("click", () => closeMenu());
}

for (let i = 0; i < 3; i++) {
  menu[i].addEventListener("click", () => toggleNavbar());
}
