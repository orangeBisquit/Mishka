var hamburger = document.querySelector(".hamburger");
var menuTop = document.querySelector(".nojs__top-toggle");
var menuBottom = document.querySelector(".nojs__bottom-toggle");

hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger--active");
  menuTop.classList.toggle("nojs__top-toggle--active");
  menuBottom.classList.toggle("nojs__bottom-toggle--active");
};
