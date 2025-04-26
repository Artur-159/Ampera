import { activateMenu } from "./imports/header.js";
import { closeAllMenues, getElement, $body, $html, $, $$ } from "./imports/utils.js";

const body = getElement('body'); //body as clickable element

const $mobileSize = 1024; 

//web/touch detect function
const isTouchDevice = () => {
	return 'ontouchstart' in document.documentElement;
};

//viewport meta change function for ios devices during touch and focusout fields with small font sizes
const changeIosMeta = () => {
	const fields = $$('input, textarea');
	if(body.classList.contains('ios_device') && fields.length > 0) {
		
		const viewPortMeta = $('meta[name="viewport"]'); //viewport meta
		const standardMeta = "width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover"; //viewport meta content standard value
		const unScaleMeta = "width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"; //viewport meta content unscaleable value for ios devices with fields with small font sizes
		let metaChange = null; //meta content value change indicator

		fields.forEach((field) => {
			const fieldFontSize = parseFloat(window.getComputedStyle(field).fontSize);
			if (fieldFontSize < 16) {
				field.addEventListener('touchstart', () => {
					if(metaChange) {
						clearTimeout(metaChange);
					}

					viewPortMeta.content = unScaleMeta;
				});

				field.addEventListener('focusout', () => {
					if(metaChange) {
						clearTimeout(metaChange);
					}
					metaChange = setTimeout(()=> {
						viewPortMeta.content = standardMeta;
					},300)
				})
			}
		})  
	}
}

// device type and ios detect function;
const detectDevice = () => {

	//detect ios device or not
	if(navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
		$body.classList.add('ios_device');       
	};	 

	//detect touch device or not
	if(isTouchDevice()) {
		$html.classList.add('touch');

		changeIosMeta();
		
	} else {
		$html.classList.add('web');
	}
}

//device call posibillity detect function
const detectCallPosibillity = () => {
	const phoneLink = $$('[href*="tel:"]');
	if(phoneLink.length > 0 && !/Android|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		phoneLink.forEach((link,index) => {
			link.removeAttribute('href');
		})
	}
}

const detectContentHeight = () => {
	let footerHeight = $$('.footer').length > 0 ? parseFloat(window.getComputedStyle($('.footer')).height) : 0;
	let headerHeight = $$('.header').length > 0  && $('.header').style.position != 'fixed' ? parseFloat(window.getComputedStyle($('.header')).height) : 0;
	
	let freeSpace = window.innerHeight - Math.round(footerHeight) - Math.round(headerHeight) - 1;
	if (freeSpace > 0) {
		$('.content').style.minHeight = freeSpace + 'px';
	} else {
		$('.content').style.minHeight = null;
	};
	$('.footer').style.opacity = 1;
}

//group all global functions in one function for exporting
const initGlobalFunctions = () => {
	detectDevice();
	detectCallPosibillity();

	activateMenu(isTouchDevice(), $mobileSize);

	body.onClick(closeAllMenues);

	if($$('.main_slider .swiper-slide').length > 0) {
		if($$('.main_slider [data-srcset]').length > 0) {
			$$('.main_slider [data-srcset]').forEach((element) => {
				element.setAttribute('srcset', element.getAttribute('data-srcset'));
				element.removeAttribute('data-srcset')
			})
		}

		if($$('.main_slider [data-src]').length > 0) {
			$$('.main_slider [data-src]').forEach((element) => {
				element.setAttribute('src', element.getAttribute('data-src'));
				element.removeAttribute('data-src')
			})
		}

		const mainSlider = $('.main_slider');
		new Swiper(mainSlider, {
			speed: 1000,
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

		})
	}

}

export {
	initGlobalFunctions,
	detectContentHeight
}