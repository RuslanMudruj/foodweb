import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calculator';
import slider from './modules/slider';
import forms from './modules/form';
import cards from './modules/cards';
import { openModal } from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setInterval(()=>openModal('.modal',modalTimerId), 3000);

    tabs(".tabheader__item",'.tabcontent','.tabheader__items',"tabheader__item_active");
    modal('[data-modal]','.modal',modalTimerId);
    calc();
    timer('.timer','2023-04-30');
    slider({
        container:'.offer__slider',
        slide:  '.offer__slide',
        nextButt: '.offer__slider-next',
        prevButt: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    forms('form',modalTimerId);
    try{
        cards();
    }
    catch(e){
        console.log(e);
    }

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