// :::::  Template Scripts  :::::  //
jQuery(document).ready(function($) {

	 
	 // Hide or Show Question Answer
	 $('div.has-answers').find('.toggle-answer').click(function() {
	 	$(this).siblings('.answer').slideToggle(500);
	 });



}); // end $(doc) ready