$(document).ready(function() {

	function caroHeight() {
		var el_height = $(window).height();
		$('.carousel, .carousel__slide').height(el_height);
	} caroHeight();

	$(window).resize(function() {
		caroHeight();
	});

	$('.js-carousel').cycle({
		fx: "scrollHorz",
		timeout: 0,
		log: false,
		carouselVisible: 1,
		slideActiveClass: "is-active",
		pagerActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "carousel__slide",
		pager: ".carousel__pager, .carousel__menu",
		slides: ".carousel__slide",
		next: ".carousel__next",
		prev: ".carousel__prev",
		pagerTemplate: ""
	});

	$('.js-down').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.page').offset().top
		}, 500);
		return false;
	});

	$('.js-portfolioslider').cycle({
		fx: "carousel",
		timeout: 0,
		log: false,
		carouselVisible: 6,
		slideActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "portfolio__item",
		slides: ".portfolio__item",
		next: ".portfolio__next",
		prev: ".portfolio__prev",
		// pagerTemplate: "<li></li>"
	});











});