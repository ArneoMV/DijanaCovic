(function ($) {
"use strict";

/*--------------------------------------
	Magnific popup Active
----------------------------------------*/
$('.gallery__img__popup').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled:true
	}
});

$('.about__img_1').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled:true
	}
});


})(jQuery);	


