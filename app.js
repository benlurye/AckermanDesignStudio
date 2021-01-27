$(document).ready(function() {
  
var splashIsGone = false;
function showBody() {
  if (splashIsGone == true) {
    $("#container").animate({
      opacity: 1
    }), 1000, function() {
      }
    }
  };
// ZOOMING

  $("#logo").on("click", function (event) {

    // fade box shadow

    $("#logo_box").addClass("box-shadow-fade");
    $("#logo_box").css("box-shadow", "none");

    // make #logo_text dissapear

    $("#logo_text").animate({
      opacity: 0.0
    }, 1000, function() {
    });

    // delay the zoom fade until after the text fades out

    $(this).delay(1000);

    // zoom fade the image and remove #logo_box from the DOM 

    $(this).animate({
      height: 1195,
      width: 720,
      opacity: 0.0
    }, 2000, function() {
      $("#logo_box").remove();
      return splashIsGone = true;
  });
    showBody(splashIsGone);
  });
});