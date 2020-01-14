"use strict";

var JSCCommon = {
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	// для свг
	svg4everybody({});
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>'); // /добавляет подложку для pixel perfect

	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		// scrollHorizontally: true,
		navigation: true,
		scrollOverflow: true // scrollBar: true,
		// autoScrolling: true,
		// scrollOverflow: true,
		// fixedElements: '.top-line',

	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}