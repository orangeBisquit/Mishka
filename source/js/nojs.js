var hamburgerActivate = document.querySelector(".nojs__header-toggle");
var topShow = document.querySelector(".nojs__top-show");
var bottomShow = document.querySelector(".nojs__bottom-show");

window.onload = function () {
  hamburgerActivate.classList.remove("nojs__header-toggle");
  topShow.classList.remove("nojs__top-show");
  bottomShow.classList.remove("nojs__bottom-show");
};
