"use strict";

// Logo and fish navigation
const logoButton = document.querySelector("#button-logo");
const fishButton = document.querySelector("#fish-button");

logoButton?.addEventListener("click", () => {
  window.location.href = "home.html";
});

fishButton?.addEventListener("click", () => {
  window.location.href = "top.html";
});

// Add event listeners to all bottoms buttons
document.querySelectorAll("button[id^='bikini-bottom-']").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = `product.html?id=${btn.id}`;
  });
});
