$(document).ready(function() {
  ////////////////////
  // hero image fade-in on load
  // //////////////////
  
  $("#landing_image").hide().delay(500).fadeIn(1250, function () {
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


  $(".nav_logo").hide();


  
  $(window).on('resize scroll', function() {
    if ($('#about_anchor').isInViewport()) {
      $(".nav_logo").fadeIn(250);
      console.log("hello")
    } else {
      $(".nav_logo").fadeOut(250);
    }
});

});