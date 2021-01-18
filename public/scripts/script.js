

$(document).ready(function() {
 // NAVIGATION
 // $("#header").load("html/Header.html");

 $('.nav-home').click(function(){
  $('#main').load("index.html");
 });
 $('.nav-gallery').click(function(){
  $('#main').load("html/Gallery.html");
 });
 $('.nav-exhibitions').click(function(){
  $('#main').load("html/Exhibitions.html");
 });
 $('.nav-products').click(function(){
  $('#main').load("html/Products.html");
 });
 $('.nav-about').click(function(){
  $('#main').load("html/About.html");
 });


});