jQuery(document).ready(function() {
    initialiseMasonry();
});


function initialiseMasonry() {
	console.log("Intialising Masonry");
	var $grid = jQuery('.masonry-grid').imagesLoaded( function() {
		$grid.isotope({
			// Options:
			itemSelector: '.masonry-grid-item',
			percentPosition: true,
			masonry: {
				// use element for option
				columnWidth: '.masonry-grid-sizer'
			}
		});
	});
}