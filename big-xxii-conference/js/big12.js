$(document).ready(function() {
	$(".section-image, .logo").bind("inview", function(event, visible){
		if (visible) {
			$(this).find("img").removeClass("desaturate");
		} else {
			$(this).find("img").addClass("desaturate");
		}
	});
});


// Code to grayscale an image if it is not hovered over
// $(".section-image, .logo").hover(function() {
// 	$(this).find("img").removeClass("desaturate", 1000);
// }, function() {
// 	$(this).find("img").addClass("desaturate", 1000);
// });