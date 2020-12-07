//mobile menu
var burger = document.querySelector(".nav-burger"); 
var list = document.querySelector(".list");

   burger.addEventListener('click', ()=>{
       list.classList.toggle("open");
   });
