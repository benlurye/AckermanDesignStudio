$(document).ready(function() {

    // 1.) on click of target div, overlay full-screen partially transparent overlay
    // 2.) on click of X icon, remove overlay
    
    // 2.) activate gallery module
    // on click of target div...

    $(".target").click(function() {
        console.log("clicked");

        // 1.)) overlay full-screen partially transparent background
        
        $(".gallery_overlay").addClass("overlay_on");

        // remove the ability to scroll
        // $(body).css("overflow", "hidden");
        });

    // 2.) on click of X icon, remove overlay 
    
    $(".close_icon").click(function() {
        $(".gallery_overlay").removeClass("overlay_on");
        
        
        // $(body).css("overflow", "visible");
    });

    // IMAGE CAROUSEL

    var ordwayImages = ["images/Ordway_Street/DALRShotAtWindowCropped.jpg",
                        "images/Ordway_Street/DABedsideShot.jpg",
                        "images/Ordway_Street/DABookcaseShot.jpg",
                        "images/Ordway_Street/DASofaShot.jpg",
                        "images/Ordway_Street/DASofaShotVertical.jpg"];

    var ordwayNames = ["Living Room",
                        "Bedside",
                        "Bookcase, Bedroom",
                        "Sofa",
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


    // Change image based on which div was clicked
    
    function changeImage() {
        $("#changed_image").attr("src", ordwayImages[currentIndex]);
        $("#changed_image").attr("alt", ordwayNames[currentIndex]);
        // $("h1").text(cityNames[currentIndex]);
    };



    // Arrow controls for Image Carousel

    $(".right-arrow").on("click", function() {
        if (currentIndex === 4) {
            console.log(currentIndex);
            return;
        } else {
            currentIndex = currentIndex + 1;
            changeImage();
        }
    });
    
    $(".left-arrow").on("click", function() {
        if (currentIndex === 0) {
            console.log(currentIndex);
            return;
        } else {
            currentIndex = currentIndex - 1;
            changeImage();
        }
    });

        
    
});