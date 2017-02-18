$(document).ready(function() {
	
	$(".section-image, .logo").bind("inview", function(event, visible){
		if (visible) {
			$(this).find("img").removeClass("desaturate");
		} else {
			$(this).find("img").addClass("desaturate");
		}
	});

	$(function() {
		var pull    = $('#pull');
		var menu    = $('nav ul');
		menuHeight  = menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
	});

	$(window).resize(function(){
		var menu    = $('nav ul');
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

});


// Code to grayscale an image if it is not hovered over
// $(".section-image, .logo").hover(function() {
// 	$(this).find("img").removeClass("desaturate", 1000);
// }, function() {
// 	$(this).find("img").addClass("desaturate", 1000);
// });