var sizeSubmit = document.querySelector(".pick-size__button-submit");
var pickSize = document.querySelector(".pick-size");
var triggers = document.querySelectorAll(".modal-trigger");
console.log(triggers);

for (var i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("clicked");
    pickSize.classList.add("modal-show");
  });
}

// Submit close
sizeSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();
  pickSize.classList.remove("modal-show");
});

// Esc close
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (pickSize.classList.contains("modal-show")) {
      pickSize.classList.remove("modal-show");
    }
  }
});
