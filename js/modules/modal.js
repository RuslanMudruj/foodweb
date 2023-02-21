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

export default modal;
export {closeModal, openModal};
