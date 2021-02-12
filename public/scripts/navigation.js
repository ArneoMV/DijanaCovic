
$(document).ready(function() {

  const menuSlide = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
  
    //menu-icon click event
    menuIcon.addEventListener("click", () => {
      //toggle active class
      navLinks.classList.toggle("menu-active");
      //toggle for menu-icon animation
      menuIcon.classList.toggle("span-anime");
    });

    //nav-link click event
    navLinks.addEventListener("click", () => {
      //toggle active class
      navLinks.classList.toggle("menu-active");
      //toggle for menu-icon animation
      menuIcon.classList.toggle("span-anime");
    });
  };
  
  menuSlide();



  // HIDE NAVIGATION ON SCROLL
  const header = document.querySelector("header");
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-8vh";
    }
    prevScrollpos = currentScrollPos;
  }
  

});