"use strict";

const material = "81% recycled polyester, 19% Lycra spandex";
const sizes = "2XS - L";

const products = [
  {
    id: "bikini-top-1",
    name: "Abigail Top",
    size: sizes,
    description: material,
    price: 59.99,
    imageUrl: "pink-gingham-front.png",
  },
  {
    id: "bikini-top-2",
    name: "Chloe Top",
    size: sizes,
    description: material,
    price: 59.99,
    imageUrl: "mint-gingham-front.png",
  },
  {
    id: "bikini-top-3",
    name: "Annabel Top",
    size: sizes,
    description: material,
    price: 59.99,
    imageUrl: "moss-polka-dot.png",
  },
  {
    id: "bikini-top-4",
    name: "Sienna Top",
    size: sizes,
    description: material,
    price: 59.99,
    imageUrl: "pink-polkadot.png",
  },
  {
    id: "bikini-bottom-1",
    name: "Abigail Bottom",
    size: sizes,
    description: material,
    price: 39.99,
    imageUrl: "pink-gingham-bottom.png",
  },
  {
    id: "bikini-bottom-2",
    name: "Chloe Bottom",
    size: sizes,
    description: material,
    price: 39.99,
    imageUrl: "mint-gingham-bottom.png",
  },
  {
    id: "bikini-bottom-3",
    name: "Annabel Bottom",
    size: sizes,
    description: material,
    price: 39.99,
    imageUrl: "moss-polkadot-bottom.png",
  },
  {
    id: "bikini-bottom-4",
    name: "Sienna Bottom",
    size: sizes,
    description: material,
    price: 39.99,
    imageUrl: "pink-polkdadot-bottom.png",
  },
];

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Find product in list
const product = products.find((p) => p.id === productId);

// If product found, display it
if (product) {
  {
    if (product.id.startsWith("bikini-bottom")) {
      document.getElementById("product-image").classList.add("scaled-down");
    }
  }
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.imageUrl;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById(
    "product-price"
  ).textContent = `$${product.price.toFixed(2)}`;
} else {
  document.body.innerHTML = "<h2>Product not found.</h2>";
}

// Navigation buttons (optional)
const logoButton = document.querySelector("#button-logo");
const backButton = document.querySelector(".back-button");

logoButton?.addEventListener("click", () => {
  window.location.href = "index.html";
});

backButton?.addEventListener("click", () => {
  if (product.id.startsWith("bikini-bottom"))
    window.location.href = "bottoms.html";
  else {
    window.location.href = "top.html";
  }
});
