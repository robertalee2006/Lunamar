"use strict";

const shopButton = document.querySelector(`.shop-button`);

const contactButton = document.querySelector(`.contact-button`);

const homeAssets = document.querySelector(`.home-assets`);

const contactCard = document.querySelector(`#contact-card`);
const waveSound = document.querySelector(`#wave-sound`);
const homeLogo = document.querySelector(`.big-logo img`);

contactCard.classList.add(`hidden`);

homeLogo.addEventListener(`click`, () => {
  waveSound.play();
});

shopButton.addEventListener(`click`, () => {
  window.location.href = "top.html";
});

contactButton.addEventListener(`click`, () => {
  console.log(`contact  button clicked`);
  contactCard.classList.toggle(`hidden`);
  homeAssets.classList.toggle(`.blur`);
});

contactCard.classList.add("fade-out");

contactCard.addEventListener(`click`, () => {
  console.log(`contact  button clicked`);
  contactCard.classList.add("hidden");
  contactCard.classList.remove("fade-out");
});
