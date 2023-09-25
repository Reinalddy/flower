const container_flower = document.querySelector('.not-loaded');
const text = document.querySelector("#some-text");
const btn = document.querySelector("#button-trigger");
const audio = document.querySelector("#song");


btn.addEventListener("click", function (e) {
  container_flower.classList.remove("not-loaded");
  text.classList.add("d-none");
  btn.classList.add("d-none");
  audio.play();
});