"use strict";

var JSCCommon = {// inputMask() {
	// 	// mask for input
	// 	$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	// }
	// /inputMask
};

function eventHandler() {
	// для свг
	svg4everybody({}); // JSCCommon.inputMask();
	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>')
	// /добавляет подложку для pixel perfect

	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		// scrollHorizontally: true,
		navigation: true,
		scrollOverflow: true,
		// scrollBar: true,
		// autoScrolling: true,
		// scrollOverflow: true,
		// fixedElements: '.top-line',
		responsiveWidth: 992,
		responsiveHeight: 550 // normalScrollElements: '.s-form',

	});
	$(document).on('click', ".show-form-wrap", function () {
		$(this).text($(this).data("title"));
		$('.s-form-nav__dropdown').slideToggle();
	});
	$(document).on('click', ".hide-form-wrap", function () {
		var _this = this;

		$(this).text($(this).data("title"));
		setTimeout(function () {
			$(_this).removeClass("hide-form-wrap").addClass('show-form-wrap');
		}, 1000);
		$('.form-wrap').fadeOut(function () {
			$('.s-form-nav__dropdown').slideDown();
		});
	});
	$(".s-form-nav__dropdown-item").click(function () {
		$('.form-wrap').slideDown();
		$('.s-form-nav__dropdown').slideUp();
		$(".s-form-nav__title").removeClass('show-form-wrap').addClass("hide-form-wrap").text($(this).data("title"));
		$(".order").val($(this).data("title"));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}