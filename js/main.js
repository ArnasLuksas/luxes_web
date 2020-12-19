// mobile menu

// var burger = document.querySelector(".nav-burger");
// var list = document.querySelector(".list");
// var body = document.querySelector("body");

// burger.addEventListener("click", () => {
//   list.classList.toggle("open");

//   if (list) {
//     document.querySelector("body").style.overflow = "hidden";
//     console.log(list);
//   } else {
//     document.querySelector("body").style.overflow = "scroll";
//   }
// });

// var burger = document.querySelector(".nav-burger");
// var list = document.querySelector(".list");
// var body = document.querySelector("body");

// burger.addEventListener("click", () => {
//   list.classList.toggle("open");
//   if (body) {
//     body.style.overflow = "hidden";
//     console.log(body);
//   } else if (body) {
//     body.style.overflow = "scroll";
//   }
// });
// location.reload();

var burger = document.querySelector(".nav-burger");
var list = document.querySelector(".list");
var body = document.querySelector("body");

burger.addEventListener("click", () => {
  list.classList.toggle("open");
  body.style.overflow = "hidden";
  if (body) {
    body.style.overflow = "hidden";
  }
});
// onclick = "location.reload();";
//     body.reload();
