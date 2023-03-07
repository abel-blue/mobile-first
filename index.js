const linkPortfolio = document.querySelector(".port-link");
const linkAbout = document.querySelector(".abt-link");
const linkContact = document.querySelector(".contact-link");
const menuBtn = document.querySelector(".menu-button");
const btnCloseNav = document.querySelector(".btn-close-nav");
const headerNavMobile = document.querySelector(".mobile-navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hide");
  headerNavMobile.classList.remove("hide");
});

