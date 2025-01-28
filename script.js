const btn1 = document.querySelector(".btn--1");
const btn2 = document.querySelector('.btn--2');

btn1.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "red";
  
  btn1.style.width = "200px";
  btn2.style.width = "150px";
  btn1.textContent = "CLICKED";
  btn2.textContent = "CLICK";
});

btn2.addEventListener("click", function(){
  document.querySelector("body").style.backgroundColor = "blue";
  
    btn2.style.width = "200px";
    btn1.style.width = "150px";
    btn1.textContent = "CLICK";
    btn2.textContent = "CLICKED";
});