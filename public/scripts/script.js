// NAVIGATION
$(document).ready(function() {

$("#main").load("html/Homepage.html");
// ActivitiesContent Navigacija
function navbarLinks(ob_navigateTo) {
  let navbarLinksID = [".nav-home",".nav-gallery", ".nav-exhibitions", ".nav-products", ".nav-about"];

  for (let index = 0; index < navbarLinksID.length; index++) {
    if (ob_navigateTo == navbarLinksID[index]) {
      // $(ob_navigateTo).addClass("link_active");
      $(ob_navigateTo).addClass("link_active");
    }
    else{
      // $(navbarLinksID[index]).removeClass("link_active");
      $(navbarLinksID[index]).removeClass("link_active");
    }
  }
}

  $('.nav-home').click(function() { 
    $("#main").load("html/Homepage.html");
    navbarLinks(".nav-home");
  });

  $('.nav-gallery').click(function() {  
    $('#main').load("html/Gallery.html");
    navbarLinks(".nav-gallery");
  });

  $('.nav-exhibitions').click(function() {  
    $('#main').load("html/Exhibitions.html");  
    navbarLinks(".nav-exhibitions");
  });

  $('.nav-products').click(function(){  
    $('#main').load("html/Products.html");  
    navbarLinks(".nav-products");
  });

  $('.nav-about').click(function(){  
    $('#main').load("html/About.html");  
    navbarLinks(".nav-about");
  });
});


//  $('.nav-home').click(function() { 
//   $("#main").load("html/Homepage.html");
//   $(".nav-home").addClass("link_active");
//   $(".nav-gallery").removeClass("link_active");
//   $(".nav-exhibitions").removeClass("link_active");
//   $(".nav-products").removeClass("link_active");
//   $(".nav-about").removeClass("link_active");
//  });

//  $('.nav-gallery').click(function() {
//   $('#main').load("html/Gallery.html");
//   $(".nav-gallery").addClass("link_active");
//   $(".nav-home").removeClass("link_active");
//   $(".nav-exhibitions").removeClass("link_active");
//   $(".nav-products").removeClass("link_active");
//   $(".nav-about").removeClass("link_active");
//  });

//  $('.nav-exhibitions').click(function() {
//   $('#main').load("html/Exhibitions.html");
//   $(".nav-exhibitions").addClass("link_active");
//   $(".nav-home").removeClass("link_active");
//   $(".nav-gallery").removeClass("link_active");
//   $(".nav-products").removeClass("link_active");
//   $(".nav-about").removeClass("link_active");
// });
//  $('.nav-products').click(function(){
//   $('#main').load("html/Products.html");
//   $(".nav-products").addClass("link_active");
//   $(".nav-home").removeClass("link_active");
//   $(".nav-gallery").removeClass("link_active");
//   $(".nav-exhibitions").removeClass("link_active");
//   $(".nav-about").removeClass("link_active");
//  });
//  $('.nav-about').click(function(){
//   $('#main').load("html/About.html");
//   $(".nav-about").addClass("link_active");
//   $(".nav-home").removeClass("link_active");
//   $(".nav-gallery").removeClass("link_active");
//   $(".nav-exhibitions").removeClass("link_active");
//   $(".nav-products").removeClass("link_active");
//  });
