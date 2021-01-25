$(document).ready(function() {
 // NAVIGATION
 $("#main").load("html/Homepage.html");
 $('.nav-home').click(function() { 
  $("#main").load("html/Homepage.html");
  $(".nav-home").addClass("link_active");
  $(".nav-gallery").removeClass("link_active");
  $(".nav-exhibitions").removeClass("link_active");
  $(".nav-products").removeClass("link_active");
  $(".nav-about").removeClass("link_active");
 });
 $('.nav-gallery').click(function() {
  $('#main').load("html/Gallery.html");
  $(".nav-gallery").addClass("link_active");
  $(".nav-home").removeClass("link_active");
  $(".nav-exhibitions").removeClass("link_active");
  $(".nav-products").removeClass("link_active");
  $(".nav-about").removeClass("link_active");
 });
 $('.nav-exhibitions').click(function() {
  $('#main').load("html/Exhibitions.html");
  $(".nav-exhibitions").addClass("link_active");
  $(".nav-home").removeClass("link_active");
  $(".nav-gallery").removeClass("link_active");
  $(".nav-products").removeClass("link_active");
  $(".nav-about").removeClass("link_active");
});
 $('.nav-products').click(function(){
  $('#main').load("html/Products.html");
  $(".nav-products").addClass("link_active");
  $(".nav-home").removeClass("link_active");
  $(".nav-gallery").removeClass("link_active");
  $(".nav-exhibitions").removeClass("link_active");
  $(".nav-about").removeClass("link_active");
 });
 $('.nav-about').click(function(){
  $('#main').load("html/About.html");
  $(".nav-about").addClass("link_active");
  $(".nav-home").removeClass("link_active");
  $(".nav-gallery").removeClass("link_active");
  $(".nav-exhibitions").removeClass("link_active");
  $(".nav-products").removeClass("link_active");
 });
});