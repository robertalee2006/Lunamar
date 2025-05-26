"use strict";

const backButton = document.querySelector(`#fish-button`);

const logoButton = document.querySelector(`#button-logo`);

logoButton?.addEventListener("click", () => {
  window.location.href = "top.html";
});

backButton?.addEventListener("click", () => {
  window.location.href = "top.html";
});
