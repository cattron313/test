(() => {
	// CONSTANTS
	const POST_COLLECTION_SIZE = 2;

	// INITIALIZATIONS
	// Set background image according to viewport size
	const snippets = document.querySelectorAll('.blogPost-snippet');
	snippets.forEach((snip) => {
		if (snip.clientWidth < 600) {
			snip.style.backgroundImage = `linear-gradient(transparent, #1A1F21 90%), linear-gradient(rgba(138, 138, 138, 0.33), rgba(73, 73, 73, 0.4277) 15%, rgba(26, 31, 33, 1)), url('${snip.dataset.imgsrcSm}')`;
		} else if (snip.clientWidth < 1200) {
			snip.style.backgroundImage = `linear-gradient(transparent, #1A1F21 90%), linear-gradient(rgba(138, 138, 138, 0.33), rgba(73, 73, 73, 0.4277) 15%, rgba(26, 31, 33, 1)), url('${snip.dataset.imgsrcMd}')`;
		} else {
			snip.style.backgroundImage = `linear-gradient(transparent, #1A1F21 90%), linear-gradient(rgba(138, 138, 138, 0.33), rgba(73, 73, 73, 0.4277) 15%, rgba(26, 31, 33, 1)), url('${snip.dataset.imgsrcFz}')`;
		}
	});
})();
