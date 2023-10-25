// swiper code

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //  Toggle btn

const hamburger = document.getElementById("menu_ashu");
// const navMenu = document.getElementById("nav-menu");
const nav_mobile_menu = document.querySelector(".acive");
const navBtns = document.querySelector(".nav-btns");
// const closeIcon = document.getElementById("nav-close");
// const navLink = document.querySelectorAll(".nav__link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     navMenu.classList.add("hidden");
//   })
// );

// closeIcon.addEventListener("click", () => {
//   navMenu.classList.add("hidden");
// });

const toggleNavbar = () => {
  navBtns.classList.toggle("active");
  console.log((hello));
}

hamburger.addEventListener("click", () => toggleNavbar());
// hamburger.addEventListener("click", () => {
//   navMenu.classList.remove("hidden");
// });

  
