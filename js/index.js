import { docReady, scrollPage,initSlider, $, $$ } from "./imports/utils.js";
import { initGlobalFunctions, detectContentHeight } from "./main.js";

let news_inner = $$('.news_slider').length > 0 ? {init: true} : {init: false};

const news_slider = {
	navigation: {
		nextEl: ".news_slider .swiper-button-next",
		prevEl: ".news_slider .swiper-button-prev",
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 2.5,
		},
		768: {
			slidesPerView: 2.1,
		},
		576: {
			slidesPerView: 1.9,
		},
		320: {
			slidesPerView: 1.2,
		},
	},
};

const scrollEvents = (scrollSize) => {

	if (news_inner.init) {
		initSlider('.news_slider .swiper-container', scrollSize, news_slider, news_inner);
	}
};

//call document ready function and init all in ready
docReady(() => {
    //global functions for all pages from main.js file
	initGlobalFunctions();
	scrollPage(scrollEvents);
});

//detect window load state and call functions 
window.addEventListener('load', () => {
    detectContentHeight();
});