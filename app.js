$(document).ready(function() {
  ////////////////////
  // hero image fade-in on load
  // //////////////////
  
  $("#landing_image").hide().delay(400).fadeIn(1000, function () {
    console.log("hello from fade-in")
  });
  
  ///////////////////
  // Checking if an element is in the viewport by Tom Pažourek 
  // https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport#:~:text=Check%20if%20element%20is%20visible%20in%20viewport%20using%20jquery%3A,position%20to%20the%20viewport%20height
  // ///////////////
  
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


// hide .nav_logo on load to avoid weird clipping

  $(".nav_logo").hide();

// show .nav_logo when #about_anchor scrolls into view
// and keep it there unless we scroll back to the top
  
  $(window).on('resize scroll', function() {
    if ($('#about_anchor').isInViewport()) {
      $(".nav_logo").fadeIn(250);
      console.log("hello")
    } else if ($('#gallery').isInViewport()) {
      return;
    } else if ($('#guide').isInViewport()) {
      return;
    } else if ($('#contact').isInViewport()) {
      return;
    } else {
      $(".nav_logo").fadeOut(250);
    }
});


// Hamburger mobile menu by Jonathan Suh
  var $mobileNav = $(".mobile-nav-choices");
  var $mobileLinks = $(".mobile-nav-link");
  var $hamburger = $(".hamburger");

  // hamburger navigation effect
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");

    // open/close menu
    $mobileNav.toggleClass("active-nav");
  });

  // mobile links dissapear on link click/tap
  $mobileLinks.on("click", function(e) {
    $mobileNav.toggleClass("active-nav");
  });

  


});