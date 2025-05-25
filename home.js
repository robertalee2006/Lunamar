"use strict";

const shopButton = document.querySelector(`.shop-button`);

const contactButton = document.querySelector(`.contact-button`);

const waveSound = document.querySelector(`#wave-sound`);
const homeLogo = document.querySelector(`.big-logo img`);

homeLogo.addEventListener(`click`, () => {
  waveSound.play();
});

shopButton.addEventListener(`click`, () => {
  window.location.href = "top.html";
});
