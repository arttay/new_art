jQuery.noConflict();
jQuery(document).ready(function(){
	

	jQuery('.wrapper').css({width: jQuery(window).width()});

	jQuery(window).resize(function(){
		
		var width = jQuery(window).width();
		if(width >= 900) {
			jQuery('.wrapper').css({width: jQuery(window).width()});
			console.log(width);
		}
	
	});


});	