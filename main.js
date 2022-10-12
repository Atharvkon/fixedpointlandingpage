

document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;

  // If the parent has .skewed class, set the skewHack var.
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});




$(document).ready( function(){
    $("#west .content").click( function() {
      $("#west-overlay").addClass("animated fadeInLeft open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass("animated fadeInLeft");
      });
      $("#west-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass("animated flipInY");
      }); 
    });
    $("#west-overlay .close-icon").click( function() {
        $("#west-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass("animated flipOutY open");
        }); 
    });
    $("#east .content").click( function() {
      $("#east-overlay").addClass("animated fadeInRight open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated fadeInRight");
      }); 
      $("#east-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass("animated flipInY");
       }); 
    });
    $("#east-overlay .close-icon").click( function() {
      $("#east-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipOutY open");
      });     
    });  
  });



  