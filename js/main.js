/* jshint esversion: 6 */




((window, document, $, undefined) => {

	let $slides, interval,
		$selectors, $btns,
		currentIndex, nextIndex;

	let cycle = (index) => {
		let $currentSlide, $nextSlide,
			$currentSelector, $nextSelector;

		nextIndex = index !== undefined ? index : nextIndex;

		$currentSlide = $($slides.get(currentIndex));
		$currentSelector = $($selectors.get(currentIndex));

		$nextSlide = $($slides.get(nextIndex));
		$nextSelector = $($selectors.get(nextIndex));

		$currentSlide
			.removeClass('active')
			.css('z-index', '0');

		$nextSlide
			.addClass('active')
			.css('z-index', '1');

		$currentSelector.removeClass('current');
		$nextSelector.addClass('current');

		currentIndex = index !== undefined ? nextIndex : currentIndex < $slides.length - 1 ? currentIndex + 1 : 0;
		nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
	};

	$(() => {
		currentIndex = 0;
		nextIndex = 1;

		$slides = $('.slide');
		$selectors = $('.selector');
		$btns = $('.btn');

		$slides.first().addClass('active');
		$selectors.first().addClass('current');

		interval = window.setInterval(cycle, 6000);

		$selectors.on('click', (e) => {
			let target = $selectors.index(e.target);
			if (target !== currentIndex) {
				window.clearInterval(interval);
				cycle(target);
				interval = window.setInterval(cycle, 6000);
			}
		});

		$btns.on('click', (e) => {
			window.clearInterval(interval);
			if ($(e.target).hasClass('prev')) {
				let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
				cycle(target);
			} else if ($(e.target).hasClass('next')) {
				cycle();
			}
			interval = window.setInterval(cycle, 6000);
		});
	});

})(this, document, jQuery);

/* *****************************************************************       */

// Menu-toggle button

// $(document).ready(function() {
// 	$(".menu-icon").on("click", function() {
// 		  $("nav ul").toggleClass("showing");
// 	});
// });

// Scrolling Effect


	$('nav a').click(function(){
		var getElement=$(this).attr('href');
		if($(getElement).length){
			var getOffset=$(getElement).offset().top;
			$('html,body').animate({scrollTop:getOffset},500);
		}
		return false
	});

	$('.menu-word a').click(function(){
		var getElement=$(this).attr('href');
		$('div.menu-wrapper').toggleClass('off');
		$('div.menu-wrapper').removeClass('on');
		$('div.menu-btn-block').removeClass('on');
		if($(getElement).length){
			var getOffset=$(getElement).offset().top;
			$('html,body').animate({scrollTop:getOffset},500);
		}
		return false
	});

