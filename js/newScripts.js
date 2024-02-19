document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("header");
      nav.classList.toggle("sticky-navbar", window.scrollY > nav.offsetHeight);
    });
  
    const menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", function () {
      var menu = document.getElementById("menu");
      menu.classList.toggle("show-menu");
    });
  });
  