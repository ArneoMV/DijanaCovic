
$(document).ready(function() {

    let burger = document.querySelector('.burger');
    let navMobile = document.querySelector('.nav-mobile');
    let navBar = document.getElementById("navBar");
    
    burger.addEventListener('click', () => {

      //alert("klik");
      
      // Burger Klick
      burger.classList.toggle('toggle');
      navMobile.classList.toggle('is-active');
      navBar.style.top = "0";
      document.body.classList.toggle('overflowHidden');
    });  

});