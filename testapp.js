$(document).ready(function() {
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
                        "images/Wycoff/Wycoff_Bath_B.jpg",
                        "images/Wycoff/Wycoff_Bath_Shelf_Detail.jpg",
                        "images/Wycoff/Wycoff_Entry_A.jpg",
                        "images/Wycoff/Wycoff_Kitchen.jpg"];
  
    var wycoffNames = ["Bathroom",
                        "Bathroom",
                        "Bathroom Storage",
                        "Entryway",
                        "Kitchen"]
  
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
        if (currentIndex === 4) {
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