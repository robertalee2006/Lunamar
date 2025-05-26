"use strict";

// Select DOM elements
const logoButton = document.querySelector("#button-logo");
const fishButton = document.querySelector("#fish-button");

const largeViewButton = document.querySelector(`#large-view`);

// Redirect to product page with ID from clicked button
document.querySelectorAll("button[id^='bikini-top']").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = `product.html?id=${btn.id}`;
  });
});

// Redirect logo button to home page
logoButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

largeViewButton.addEventListener("click", () => {
  window.location.href = "product.html";
});

// Redirect fish button to bottoms page
fishButton.addEventListener("click", () => {
  window.location.href === "top.html"
    ? (window.location.href = "top.html")
    : (window.location.href = "bottoms.html");
});
