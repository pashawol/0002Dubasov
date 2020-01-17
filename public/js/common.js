"use strict";

var JSCCommon = {
	// inputMask() {
	// 	// mask for input
	// 	$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	// }
	// /inputMask
	inputLabel: function inputLabel() {
		// для плаваюещего label
		$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('.form-wrap__input-wrap').addClass('empty');
		$('input, textarea').keyup(function () {
			if ($(this).val().trim() !== '') {
				$(this).closest('.form-wrap__input-wrap').removeClass('empty');
			} else {
				$(this).closest('.form-wrap__input-wrap').addClass('empty');
			}
		});
		var selectedTd;
		var body = document.querySelector('body');

		body.onclick = function (event) {
			if ($("div").is(".form-wrap__input-wrap--city")) {
				var formWrap = event.target.closest('.form-wrap__input-wrap--city'); // (1)

				var formWrapEl = document.querySelector('.form-wrap__input-wrap--city'); // (1)

				var target = event.target; // где был клик? 
				// if (!formWrap)  formWrapEl.classList.remove('focus'); // не на TD? тогда не интересует

				if (!body.contains(formWrap)) formWrapEl.classList.remove('focus'); // (3)
				else {
						highlight(formWrap); // (4)
					}
			}
		};

		function highlight(td) {
			selectedTd = td;
			selectedTd.classList.add('focus'); // подсветить новый td
			// console.log(selectedTd)
		} // $('.form-wrap__input-wrap ').on('focus',  '.bx-ui-sls-fake', function () {
		// 	if ($(this).val().trim() !== '') {
		// 		$(this).closest('.form-wrap__input-wrap').removeClass('empty');
		// 	} else {
		// 		$(this).closest('.form-wrap__input-wrap').addClass('empty');
		// 	}
		// });

	}
};

function eventHandler() {
	// для свг
	svg4everybody({});
	JSCCommon.inputLabel(); // JSCCommon.inputMask();
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
	$('.scroll-to').click(function (e) {
		var arr = $("#fullpage .section").length;
		e.preventDefault();
		fullpage_api.moveTo(arr);
	});
	$('.header__down').click(function (e) {
		// var arr = $("#fullpage .section").length;
		e.preventDefault();
		fullpage_api.moveTo(2);
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