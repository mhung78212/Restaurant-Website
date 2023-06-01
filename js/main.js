const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const userBtn = document.querySelector("#user-btn");
const profileForm = document.querySelector(".profile");
userBtn.addEventListener("click", () => {
  profileForm.classList.toggle("active");
});

window.onscroll = () => {
  profileForm.classList.remove("active");
  navbar.classList.remove("active");
};


