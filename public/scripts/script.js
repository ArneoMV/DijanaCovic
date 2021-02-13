// NAVIGATION
$(document).ready(function() {

$("#header").load("html/Header.html");
$("#main").load("html/Homepage.html");

// ActivitiesContent Navigacija
// function navbarLinks(navigateTo) {
//   let navbarLinksID = [".nav-home",".nav-gallery", ".nav-exhibitions", ".nav-products", ".nav-about"];

//   for (let index = 0; index < navbarLinksID.length; index++) {
//     if (navigateTo == navbarLinksID[index]) {
//       $(navigateTo).addClass("link_active");
//     }
//     else{
//       $(navbarLinksID[index]).removeClass("link_active");
//     }
//   }
// }

//   $('.nav-home').click(function() { 
//     $("#main").load("html/Homepage.html");
//     navbarLinks(".nav-home");
//   });

//   $('.nav-gallery').click(function() {  
//     $('#main').load("html/Gallery.html");
//     navbarLinks(".nav-gallery");
//   });

//   $('.nav-exhibitions').click(function() {  
//     $('#main').load("html/Exhibitions.html");  
//     navbarLinks(".nav-exhibitions");
//   });

//   $('.nav-products').click(function(){  
//     $('#main').load("html/Products.html");  
//     navbarLinks(".nav-products");
//   });

//   $('.nav-about').click(function(){  
//     $('#main').load("html/About.html");  
//     navbarLinks(".nav-about");
//   });
});