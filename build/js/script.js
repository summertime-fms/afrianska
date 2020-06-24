let formButton = document.querySelector(".main-footer__button");
let modal = document.querySelector(".modal");
let form = modal.querySelector(".modal__form");
let name = form.querySelector("[name=user-name]");
let email = form.querySelector("[name=user-email]");
let message = form.querySelector(".modal__input--message");
let tip = modal.querySelector(".modal__tooltip");
let isStorageSupport = true;
    let storage = "";

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

formButton.addEventListener("click", function(evt) {
evt.preventDefault();
modal.classList.toggle("modal--show");
if (storage) {
  login.value = storage;
}
});

form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value || !message.value) {
evt.preventDefault();
modal.classList.remove("modal--error");
modal.offsetWidth = modal.offsetWidth;
modal.classList.toggle("modal--error");
tip.style.display = "block";
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("name", name.value);
}
evt.preventDefault();
$.ajax({
  type: $(this).attr("method"),
  url: $(this).attr("action"),
  data: new FormData(this),
  contentType: false,
  cache: false,
  processData: false,
  success: function(result) {
    $('#form').remove();
    $(".modal__results").addClass("modal__results--open");
  }
})}});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if(modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--error");
      modal.classList.remove("modal--show");
    }
  }
  });


