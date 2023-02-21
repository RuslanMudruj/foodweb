/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator(){
    const genderWrapper = document.querySelector(".calculating__choose");
    //genderWrapper.nextElementSibling.nodeName
    function getClosestsibiling(genderBox) {
        if (genderBox.nextElementSibling) {
            return genderBox.nextElementSibling;
        } else {
            return genderBox.previousElementSibling
        }
    }
    
    
    genderWrapper.addEventListener("click", (event) => {
    
        //console.log(getClosestsibiling(event.target));
    
        if (event.target && event.target.tagName === "DIV") {
            removeClass(event.target);
        }
    
    });
    
    const activityWrapper = document.querySelector(".calculating__choose_big");
    //activityWrapper.parentElement.children
    
    const removeClass = function (activityBox) {
        for (let box of activityBox.parentElement.children) {
            if (box != activityBox && box.classList.contains("calculating__choose-item_active")) {
                box.classList.remove("calculating__choose-item_active");
                activityBox.classList.add("calculating__choose-item_active");
            }
        }
    
    }
    
    
    activityWrapper.addEventListener("click", (event) => {
    
        if (event.target && event.target.tagName === "DIV") {
            removeClass(event.target);
        }
    });
    
    const result = document.querySelector('.calculating__result span');
    let sex,height,weight,age,ratio;
    
    
    
    
    
    
    
    function calctTotal(){
    
        height = +document.querySelector('#height').value,
        weight = +document.querySelector('#weight').value,
        age = +document.querySelector('#age').value;
        sex = getValueFromDiv(genderWrapper);
        console.log(sex);
        ratio = getValueFromDiv(activityWrapper);
    
    
        if(!(sex || height!=='' || weight!=='' || age!=='' || ratio)){
            result.textContent = ' ';
            return
        }
        else if(sex === 'man'){
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
        else{result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    
        }
    }
    
    
    
    
        const inputsFields = document.querySelector('.calculating__choose_medium');
    
        inputsFields.childNodes.forEach(el =>{
            if(el.nodeName === 'INPUT'){
                el.addEventListener('input',()=>{
                    console.log('el')
                    calctTotal();
                });
            }
        })
    
    
    
        
    
    
        function getValueFromDiv(parent){
            for(let box in parent.childNodes){
                if(parent.children[box].classList.contains('calculating__choose-item_active')){
                    return parent.children[box].getAttribute('data-ratio');
                }
            }
        }
    
        const calculatingField = document.querySelector('.calculating__field');
        calculatingField.addEventListener('click',()=>{
            calctTotal();
        })
     
       
        
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards(){
    class MenuCard {
        constructor(src, alternativeText, title, describtion, price, parentSelector) {
            this.src = src;
            this.alternativeText = alternativeText;
            this.title = title;
            this.describtion = describtion;
            this.price = price;
            this.transfer = 42;
            this.parent = document.querySelector(parentSelector);
        }

        changeToUAH() {
            this.price *= this.transfer;
        }

        render() {
            const card = document.createElement('div');
            card.classList.add('menu__item');
            card.innerHTML = `  <img src="${this.src}" alt="${this.alternativeText}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.describtion}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Ціна:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            this.parent.appendChild(card);

        }
    }

    
    

    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img,altimg,title,descr,price}) => {
            new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
        });
    }).catch(error=> console.log(error))

    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price
    //         }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         })
    //     });
    Promise.all()
    // const newMenu = new MenuCard('img/tabs/vegy.jpg', 'some text', 'Меню фітнес', 'У меню “Преміум” ми використовуємо не тільки гарний дизайн упаковки, але й якісне виконання страв. Червона риба, морепродукти, фрукти – ресторанне меню без походу до ресторану!', '1000', '.menu .container');

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function form(formSelector,modalTimerId){
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Успіх!',
        failure: 'Щось трапилось...'
    }


    forms.forEach(el => {
        bindPostData(el);
    });


  


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);



            const data = new FormData(form);

            const newObj = {};

            const json = JSON.stringify(Object.fromEntries(data.entries()))
            console.log(newObj);

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
                .then(data => {
                   
                    showThanksModal(message.success);
                    console.log(data);

                    statusMessage.remove();
                }).catch((error) => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();

                });

        });



    }



    function showThanksModal(message) {
        const prevModal = document.querySelector('.modal__dialog');

        prevModal.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal',modalTimerId);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');

        thanksModal.innerHTML =
            `<div class="modal__content">

                
                <div class = "modal__close" data-close> x </div>
                <div class="modal__title"> ${message} </div></div>
             `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModal.classList.toggle('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 5000);

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector) {
    const modalWindow = document.querySelector( modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector,modalTimerId) {
    const modalWindow = document.querySelector( modalSelector);
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    //modalWindow.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    if(modalTimerId)
        clearInterval(modalTimerId);
}

function modal(triggerSelector,modalSelector,modalTimerId){
    const modalOpen = document.querySelectorAll(triggerSelector);
    const modalWindow = document.querySelector( modalSelector);
    console.log(modalWindow.style);

    

    modalOpen.forEach((el) => (el.addEventListener('click',()=> openModal(modalSelector,modalTimerId))));





    modalWindow.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target == modalWindow || target.getAttribute('data-close') === '')) {

            closeModal(modalSelector);
        }

    })


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    })

    console.log(1);
   

    function showModalByCroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByCroll);
        }
    }
    window.addEventListener('scroll', showModalByCroll);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container,slide,nextButt,prevButt,totalCounter,currentCounter,wrapper,field}){
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prevButton = document.querySelector(prevButt),
        nextButton = document.querySelector(nextButt),
        currentSlide = document.querySelector(currentCounter),
        totalSlides = document.querySelector(totalCounter),
        slidesWarappr = document.querySelector(wrapper),
        slidesInner = document.querySelector(field),
    width = window.getComputedStyle(slidesWarappr).width;

    totalSlides.textContent = '0' + slides.length;
    let curr = 0;
    let offset = 0;
    currentSlide.textContent = '0' + (curr + 1);

    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all';
    slidesWarappr.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.width = width;
    });


    nextButton.addEventListener('click', () => {

        changeSlide(1);

    })





    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    })



    function changeSlide(i) {
        let widthInt = +width.slice(0, -2)

        console.log(widthInt);
        offset += (i) * widthInt;
        curr += i;

        if (offset > widthInt * (slides.length - 1)) {
            offset = 0;
            curr = 0;
        } else if (offset < 0) {
            offset = widthInt * (slides.length - 1);
            curr = 3
        }


        currentSlide.textContent = '0' + (curr + 1);
        console.log(widthInt);
        console.log(offset);

        slidesInner.style.transform = `translateX(-${offset}px)`;
        activateDot();
    }
    slider.style.position = 'relative';

    const idicators = document.createElement("ol");
    idicators.classList.add('carousel-indicators');

    slider.append(idicators);

    for( let i= 0;i<slides.length;i++){
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to',i);
        
        idicators.append(dot);
    }

    activateDot();

    
    console.log(idicators.childNodes);

    idicators.addEventListener('click',(e)=>{
        if(e.target.classList.contains('dot')){
            changeSlide(e.target.getAttribute('data-slide-to') - curr)
        }
    })

    function activateDot(){
        idicators.childNodes.forEach(el=>{
            console.log(el.getAttribute('data-slide-to'));
            if(el.getAttribute('data-slide-to') == curr){
                
                el.style.opacity = 1;
            }
            else{
                el.style.opacity = 0.5;
            }
        })
    }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector,tabcontentSelector,tabsParentSelector,activeClass) {

    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabcontentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
        
    function hideTabContent(tabsContent, tabs) {
        tabsContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');

        });

        tabs.forEach((el) => {
            el.classList.remove("fade", activeClass);

        });
    }


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass)

    }

    hideTabContent(tabsContent, tabs);
    showTabContent();



    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
            hideTabContent(tabsContent, tabs);

            tabs.forEach((item, i) => {
                if (item == target) {
                    showTabContent(i);

                }
            });

            // for(let i =0;i < tabsParent.children.length;i++)
            //     if( tabsParent.children.item(i).isEqualNode(e.target)){
            //         showTabContent(i);
            //         break;
            //     }

        }


    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id,deadLine){
    
  

    function getTimeRemaining(endTime) {
        let days = '0',
            hours = '0',
            minutes = '0',
            seconds = '0';
        const t = new Date(endTime) - new Date();
        if (t > 0) {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / (1000 * 60)) % 60),
                seconds = Math.floor((t / 1000) % 60);
            // console.log(`Days : ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`)
        } else {
            const timer = document.querySelector('.promotion__timer');
            const text = document.createElement('span');
            text.textContent = "Discount end";
            text.classList.add('title');
            timer.append(text);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'), //timerBlocks[0].firstElementChild,
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const remainTime = getTimeRemaining(endtime);
            days.textContent = remainTime.days < 10 ? '0' + remainTime.days : remainTime.days;
            hours.textContent = remainTime.hours < 10 ? '0' + remainTime.hours : remainTime.hours;
            minutes.textContent = remainTime.minutes < 10 ? '0' + remainTime.minutes : remainTime.minutes;
            seconds.textContent = remainTime.seconds < 10 ? '0' + remainTime.seconds : remainTime.seconds;
            if (remainTime.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock(id, deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourse": () => (/* binding */ getResourse),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
}

async function getResourse (url){
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Couodn't fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");









document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setInterval(()=>(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal',modalTimerId), 3000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item",'.tabcontent','.tabheader__items',"tabheader__item_active");
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]','.modal',modalTimerId);
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer','2023-04-30');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
        container:'.offer__slider',
        slide:  '.offer__slide',
        nextButt: '.offer__slider-next',
        prevButt: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])('form',modalTimerId);
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_6__["default"])();

    // Calculate



    // Timer




    // Modal window



    // Class using for card




    //Send form


    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: [JSON.stringify({
    //             name: 'Alex'
    //         }), JSON.stringify({
    //             name: 'Alex'
    //         })],
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(json => console.log(json))






    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(data => console.log(data));




    //Slider



    //      slides.forEach((el,index) =>{ if(index!=0) el.classList.add('hide')});
    // function changeNextSlide(){
    //     slides[curr].classList.add('hide');
    //     curr = curr < 3 ? curr+1: 0;
    //     slides[curr].classList.remove('hide');
    //     console.log(curr);
    //     currentSlide.textContent = '0' + (curr+1);
    // }


    // function  showSlide(n){
    //     slides[curr].classList.add('hide');
    //     curr = (curr+n < 4) ? (curr+n >= 0) ? curr+n : 3  : 0;
    //     slides[curr].classList.remove('hide');
    //     currentSlide.textContent = '0' + (curr+1);
    //     console.log(curr);
    // }
    // prevButton.addEventListener('click',()=>showSlide(-1));
    // nextButton.addEventListener('click',()=>showSlide(1));




















    // let currentIndex = 0;
    // slides.forEach((el,index) =>{ if(index!=0) el.classList.add('hide')});
    // totalSlides.textContent = slides.length < 10 ? '0'+slides.length : slides.length;
    // let changeCurrentValue = () => currentSlide.textContent = currentIndex + 1< 10 ? `0${currentIndex+1}` : currentIndex + 1 ; 
    // changeCurrentValue();
    // function showSlide(n){
    //     slides[currentIndex].classList.add('hide');
    //     if(currentIndex ===  0 && n<0){
    //         currentIndex = slides.length-1;
    //     } else if(currentIndex ===  slides.length-1 && n>0){
    //         currentIndex = 0;
    //     } else{
    //         currentIndex += n;  
    //     }
    //     slides[currentIndex].classList.remove('hide');
    //     changeCurrentValue();
    // }
    // prevButton.addEventListener('click',function(){showSlide(-1)});
    // nextButton.addEventListener('click',function(){showSlide(1)});
















    //     totalSlides.textContent = slides.length < 10 ? '0'+slides.length : slides.length;
    //     function getCurrentIndex(){
    //         let currIndex = 0;
    //         slides.forEach((el,index) => {
    //             if(!el.classList.contains('hide')){
    //                 currIndex = index;
    //             }
    //         })
    //         return currIndex;
    //     }

    //     function setCurrentValue(current, arr){
    //         arr.forEach((el,index) => {
    //             if(!el.classList.contains('hide')){
    //                 const numb = index+1; 
    //                 current.textContent = numb < 10 ? `0${numb}` : numb;
    //             }
    //         })

    //     }
    //     setCurrentValue(currentSlide,slides);

    //     changeNextSlide = function (){
    //                 currentIndex = getCurrentIndex();
    //                 slides[currentIndex].classList.add('hide');
    //                 if(currentIndex+1 === +totalSlides.textContent){
    //                     currentIndex = 0;
    //                     slides[currentIndex].classList.remove('hide');
    //                 }
    //                 else{
    //                     slides[currentIndex+1].classList.remove('hide');
    //                 }
    //                 setCurrentValue(currentSlide,slides);    
    //     }

    //     changePrevSlide = function(){
    //         currentIndex = getCurrentIndex();
    //         slides[currentIndex].classList.add('hide');
    //         if(currentIndex === 0){
    //             currentIndex = 3;
    //             slides[currentIndex].classList.remove('hide');
    //         }
    //         else{
    //             slides[currentIndex-1].classList.remove('hide');
    //         }
    //         setCurrentValue(currentSlide,slides);    
    // }






    //     prevButton.addEventListener('click',changePrevSlide);
    //     nextButton.addEventListener('click',changeNextSlide);







    // Calculator











});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map