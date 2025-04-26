import { docReady, $, $$ } from "./imports/utils.js";
import { initGlobalFunctions, detectContentHeight } from "./main.js";
import niceSelect from "./imports/nice-select2.js";

const selectElements = (target) => {
    const mySelectElements = document.querySelectorAll('.block_select');

    if (mySelectElements.length > 0) {
        const niceSelectOptions = {
            showSelectedItems: true,
        };

        mySelectElements.forEach((selectElement) => {
            new niceSelect(selectElement, niceSelectOptions);
        });
    }
};

//call document ready function and init all in ready
docReady(() => {
    //global functions for all pages from main.js file
    initGlobalFunctions();
    selectElements();
});

//detect window load state and call functions
window.addEventListener('load', () => {
    detectContentHeight();
});