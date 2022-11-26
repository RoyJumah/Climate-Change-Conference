"use strict;";
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.add("visible"));
  document.body.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.remove("visible"));
});
