import {docReady, $, $$, initSlider, scrollPage} from "./imports/utils.js";
import {initGlobalFunctions, detectContentHeight} from "./main.js";

let management_inner = $$('.slider_section').length > 0 ? {init: true} : {init: false};

const management_slider = {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    grid: {
        fill: 'row',
        rows: 2
    },
    navigation: {
        nextEl: ".slider_section .swiper-button-next",
        prevEl: ".slider_section .swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
    },
};

const scrollEvents = (scrollSize) => {
    if (management_inner.init) {
        initSlider('.slider_section .swiper-container', scrollSize, management_slider, management_inner);
    }
};

//call document ready function and init all in ready
docReady(() => {
    //global functions for all pages from main.js file
    initGlobalFunctions();
    scrollPage(scrollEvents);
    if (document.querySelectorAll('.gallery_section').length > 0) {
        Fancybox.bind("[data-fancybox]", {});
    }

});

//detect window load state and call functions
window.addEventListener('load', () => {
    detectContentHeight();
});