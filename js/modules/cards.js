import { getResourse } from "../services/services";
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

    
    

    getResourse('http://localhost:3000/menu')
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

export default cards;