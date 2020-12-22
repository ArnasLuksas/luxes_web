//mobile menu
var burger = document.querySelector(".nav-burger");
var list = document.querySelector(".list");
var body = document.querySelector("body");

function toggleNav() {
  list.classList.toggle("open");
  var navIsOpen = list.classList.contains("open");
  if (navIsOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
}
burger.addEventListener("click", toggleNav);
