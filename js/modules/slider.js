import { enableScroll,disableScroll } from "../services/scrollControll";

function slider({
    container,
    slide,
    nextButt,
    prevButt,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
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

    slidesWarappr.addEventListener('wheel', (e) => {
        disableScroll();
        if (e.deltaY > 0)
            changeSlide(-1);
        else
            changeSlide(1);
    });

    slidesWarappr.addEventListener('mouseleave', (e) => {
        enableScroll();
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

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i);

        idicators.append(dot);
    }

    activateDot();


    console.log(idicators.childNodes);

    idicators.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            changeSlide(e.target.getAttribute('data-slide-to') - curr)
        }
    })

    function activateDot() {
        idicators.childNodes.forEach(el => {
            console.log(el.getAttribute('data-slide-to'));
            if (el.getAttribute('data-slide-to') == curr) {

                el.style.opacity = 1;
            } else {
                el.style.opacity = 0.5;
            }
        })
    }

   


}

export default slider;