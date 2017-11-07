$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});


$('.eventInfo').on('click', function(e) {
  // Prevent link from jumping to the top of the page

  // If menu is already showing, slide it up. Otherwise, slide it down.

  var id = $(this).data("id");
  var selector = ".details[data-id=" + id + "]"

  $(selector).toggleClass("data-hidden")
});

$('.eventInfo').append ('<img src="img/down_arrow.png" alt="down arrow" width=" 20px">');
