$(document).ready(function() {


  ////////////////////
  // hero image fade-in on load
  // //////////////////
  
  $("#landing_image").hide().delay(1000).fadeIn(1500, function () {
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

  ////////////////////
  // header logo fade-in on visible
  // //////////////////

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

  // ///////////////////
  // Hamburger mobile menu by Jonathan Suh
  // //////////////////

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


  ///////////////////////
  // IMAGE CAROUSEL OVERLAY
  // //////////////////// 

  // on click of .ordway div...
    $(".ordway").click(function() {
  
      // 1.)) overlay full-screen partially transparent background
  
      $(".gallery_overlay").addClass("overlay_on");
      });

  // on click of .ordway div...
    $(".wycoff").click(function() {
      console.log("clicked");

      // 1.)) overlay full-screen partially transparent background
  
      $(".gallery_overlay_2").addClass("overlay_on");

      $(html).attr("overflow", "hidden");

      });

      // 2.) on click of X icon, remove overlay 
      $(".close_icon").click(function() {
        $(".gallery_overlay, .gallery_overlay_2").removeClass("overlay_on");
        return currentIndex === 0;
    });
      // 3.) on click outside image, remove overlay 
  //     $(".gallery_overlay").click(function() {
  //       $(".gallery_overlay, .gallery_overlay_2").removeClass("overlay_on");
  //     return currentIndex === 0;
  //     console.log(currentIndex);
  // });

  
  //////////////////////
  // IMAGE CAROUSEL
  // ///////////////////

  
  var ordwayImages = ["images/Ordway_Street/DALRShotAtWindowCropped.jpg",
                      "images/Ordway_Street/DABedsideShot.jpg",
                      "images/Ordway_Street/DABookcaseShot.jpg",
                      "images/Ordway_Street/DASofaShotVertical.jpg"];

  var ordwayNames = ["Living Room",
                      "Bedside",
                      "Bookcase, Bedroom",
                      "Sofa"]
  
  var wycoffImages = ["images/Wycoff/Wycoff_Bath_A.jpg",
                      "images/Wycoff/bath_before.jpg",
                      "images/Wycoff/Wycoff_Bath_Shelf_Detail.jpg",
                      "images/Wycoff/Wycoff_Entry_A.jpg",
                      "images/Wycoff/kitchen_before.jpg",
                      "images/Wycoff/Wycoff_Kitchen.jpg",
                      "images/Wycoff/ext_before.jpg",
                      "images/Wycoff/ext_after.jpg"];

  var wycoffNames = ["Bathroom, before",
                      "Bathroom, after",
                      "Bathroom Storage",
                      "Entryway",
                      "Kitchen, before",
                      "Kitchen, after",
                      "exterior, before",
                      "exterior, after"]

  var currentIndex = 0;

  function ordwayImage() {
    $("#ordway_changed_image").attr("src", ordwayImages[currentIndex]);
    $("#ordway_changed_image").attr("alt", ordwayNames[currentIndex]);
  };

  function wycoffImage() {
    $("#wycoff_changed_image").attr("src", wycoffImages[currentIndex]);
    $("#wycoff_changed_image").attr("alt", wycoffNames[currentIndex]);
  };

  // ////////////////////
  // arrow navigation for galleries
  ///////////////////////
  $(".right-arrow").on("click", function() {
      if (currentIndex === 7) {
          console.log(currentIndex);
          return;
      } else {
          currentIndex = currentIndex + 1;
          ordwayImage();
          wycoffImage();
      }
  });
  
  $(".left-arrow").on("click", function() {
      if (currentIndex === 0) {
          console.log(currentIndex);
          return;
      } else {
          currentIndex = currentIndex - 1;
          ordwayImage();
          wycoffImage();
      }
  });

  // link arrow keys and escape key to gallery nav functionality
  // from stackoverflow https://stackoverflow.com/questions/19347269/jquery-keypress-arrow-keys
  
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37:
          $( ".left-arrow" ).click();
          break;
          
          case 39:
          $( ".right-arrow" ).click();
          break;
      
          case 27:
          $( ".close_icon" ).click();
          break;
      
          default: return;
      }
  });


});