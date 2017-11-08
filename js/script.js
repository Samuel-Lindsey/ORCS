//Create nave dropdown for mobile.

//add Listener to menu for click event
$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});

// Details dropdown for events page.
// Add arrow image to details cell for dropdown
$('.eventInfo').append ('<img src="img/down_arrow.png" alt="down arrow" width=" 20px">');

//Add evet listener to eventInfo cell
$('.eventInfo').on('click', function(e) {
// Capture the data-id and store in selector var
  var id = $(this).data("id");
  var selector = ".details[data-id=" + id + "]"
// If details are already showing, slide it up. Otherwise, slide it down.
  $(selector).toggleClass("data-hidden")
});
