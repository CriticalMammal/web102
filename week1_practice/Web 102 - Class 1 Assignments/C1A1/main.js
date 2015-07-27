// :::::  Template Scripts  :::::  //
jQuery(document).ready(function($) {

	/* =========================================== *
	 * 					Hide/Show Header on Scroll         *
	 * =========================================== */
	var did_scroll,
			prev_scrolltop = 0,
			d = 5,
			$header = $('header'),
			header_height = $header.outerHeight();

	$(window).scroll(function() {
		did_scroll = true;
	});

	// Check if user scrolled every 200ms
	setInterval(function() {
		if ( did_scroll ) {
			hasScrolled();
			did_scroll = false;
		}
	}, 200);

	function hasScrolled() {
		var current_scrolltop = $(window).scrollTop();

		if ( Math.abs(prev_scrolltop - current_scrolltop) <= d ) {
			return;
		}

		if ( current_scrolltop > prev_scrolltop && current_scrolltop > header_height ) {
		  $header.addClass('off_page');
		} else {
		  if( current_scrolltop + $(window).height() < $(document).height() ) { 
		    $header.removeClass('off_page');
		  }
		}

		prev_scrolltop = current_scrolltop;

	} // hasScrolled()

	$header.click(function() {
		$('body').animate({ scrollTop: 0}, 500);
	})
	/* =========================================== *
	 * 		   END	Hide/Show Header on Scroll       *
	 * =========================================== */

	 
	 // Hide or Show Question Answer
	 $('div.has-answers').find('.toggle-answer').click(function() {
	 	$(this).siblings('.answer').slideToggle(500);
	 });



}); // end $(doc) ready