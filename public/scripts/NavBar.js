

$(document).ready(function() {

  const body = document.querySelector("body");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");


  // Navigation
  const navSlide = () => {
    burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      //Body overflow fixed
      // body.classList.toggle("fixed");

     //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
    });
  }
  navSlide();

    // Switch pages
    // $('#Home').click(function() {
    //   $('#page').load('html/Homepage.html');
    //   nav.classList.toggle("nav-active");
    //   burger.classList.toggle("toggle");
    // });
    // $('#Solutions').click(function() {
    //   $('#page').load('html/Solutions.html');
    //   nav.classList.toggle("nav-active");
    //   burger.classList.toggle("toggle");
    // });
    // $('#IoT').click(function() {
    //   $('#page').load('html/IoT.html');
    //   nav.classList.toggle("nav-active");
    //   burger.classList.toggle("toggle");
    // });
    // $('#Project').click(function() {
    //   $('#page').load('html/Project.html');
    //   nav.classList.toggle("nav-active");
    //   burger.classList.toggle("toggle");
    // });
});


// $(document).ready(function() {

//     let burger = document.querySelector('.burger');
//     let navMobile = document.querySelector('.nav-mobile');
//     let navBar = document.getElementById("navBar");
    
//     burger.addEventListener('click', () => {

//       //alert("klik");
      
//       // Burger Klick
//       burger.classList.toggle('toggle');
//       navMobile.classList.toggle('is-active');
//       navBar.style.top = "0";
//       document.body.classList.toggle('overflowHidden');
//     });  

// });