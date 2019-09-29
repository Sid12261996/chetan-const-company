(function($) { "use strict";

	var $doc_height = $(window).innerHeight();
	$('.full-height').css("height", $doc_height);

	// Add Class
	$(".widget_text").addClass('widget_links');

	// Blog gallery
	$(".blog-slide").owlCarousel({                
        pagination:false,
        slideSpeed : 300,
        autoPlay : 5000,
        singleItem:true  
    });

    // Parallax
    $(window).load(function() {
		$('section.parallax').each(function() {
			$(this).parallax("50%", 0.5);
		});
	});

})(jQuery); 