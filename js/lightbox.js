//create overlay with large image "lightbox"

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

 //and image to overlay
$overlay.append($image);


 // add a caption to overlay
 $overlay.append($caption);

 //add overlay
 $("body").append($overlay);

//capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();

  // check if we show the overlaw
  if ($(window).width() > 595 ) {
    var imageLocation = $(this).attr("href");
    // update overlay with the image linked -in the linked and flex behavior
    $image.attr("src", imageLocation);
    $overlay.attr("style", "display:flex;")

    //show the overlay.
    $overlay.show();

    // get child's alt atribute and set to caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
  }

});

// when overlay is cliked
$overlay.click(function(){
// hide the overlay
  $overlay.hide();
});
