import { closeModal,openModal } from "./modal";
import { postData } from "../services/services";

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

            postData('http://localhost:3000/requests', json)
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
        openModal('.modal',modalTimerId);
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
            closeModal('.modal');
        }, 5000);

    }

}

export default form;