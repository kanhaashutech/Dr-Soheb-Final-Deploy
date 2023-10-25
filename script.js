// swiper code

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//  Toggle btn

// let x = document.getElementById("active");
// let menuBtn = document.querySelector(".menuBtn");
// let closeBtn = document.querySelector(".closeBtn");


// const navMenu = document.getElementById("nav-menu");
// const nav_mobile_menu = document.querySelector(".acive");
// const navBtns = document.querySelector(".nav-btns");
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


const x = document.getElementById('active');
let menuBtn = document.querySelector(".menuBtn");
let closeBtn = document.querySelector(".closeBtn");

function openMenu() {

  let menuBtn = document.querySelector(".menuBtn");
  let closeBtn = document.querySelector(".closeBtn");

  const x = document.getElementById('active');
  x.style.display = 'flex';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block';

}
function closeMenu() {


  let menuBtn = document.querySelector(".menuBtn");
  let closeBtn = document.querySelector(".closeBtn");
  const x = document.getElementById('active');
  
  x.style.display = 'none';
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';

}



// const toggleNavbar = () => {
//   navBtns.classList.toggle("active");
//   console.log((hello));
// }

// hamburger.addEventListener("click", () => toggleNavbar());








// hamburger.addEventListener("click", () => {
//   navMenu.classList.remove("hidden");
// });


