"use strict";

const btn = document.querySelector(".button");
const btnOff = document.querySelector(".buttonDismiss");
const content = document.querySelector(".contentMain");
const message = document.querySelector(".confirmationMessage");
let emailValue = document.querySelector(".email").value;
const email = document.querySelector(".email");

content.classList.remove("hidden");
message.classList.add("hidden");

function hideAndShowEvent() {
  content.classList.toggle("hidden");
  message.classList.toggle("hidden");
}

btn.addEventListener("click", function () {
  if (email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    hideAndShowEvent();
    email.value = " ";
    return true;
  } else {
    email.classList.add("invalidEmail");
    document.querySelector(".showmessage").style.display = "block";
    email.value = " ";
    return false;
  }
});

email.addEventListener("click", function () {
  document.querySelector(".showmessage").style.display = "none";
  email.classList.remove("invalidEmail");
});

btnOff.addEventListener("click", function () {
  email.value = " ";
  hideAndShowEvent();
});

email.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnOff.click();
    hideAndShowEvent();
    email.value = " ";
  }
});

function reload() {
  email.value = " ";
}
reload();
