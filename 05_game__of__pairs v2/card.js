export class Card {
    _open = false
    _success = false

    constructor(container, number, action) {
        this.card = document.createElement('div')
        this.card.classList.add('card')
        // this.card.textContent = number 
        this.number = number


        this.card.addEventListener('click', () => {
            if (this.open == false && this.success == false) {
                this.open = true
                action(this)
            }
        })
        container.append(this.card)
    }

    set number(value) {
        this._number = value
        this.card.textContent = value; // Устанавливаем текст карты
    }

    get number() {
        return this._number;
    }


    set open(value) {
        this._open = value
        value ? this.card.classList.add('open') : this.card.classList.remove('open')
    }

    get open() {
        return this._open
    }

    set success(value) {
        this._success = value
        value ? this.card.classList.add('success') : this.card.classList.remove('success')
    }

    get success() {
        return this._success
    }
}



export class AmazingCard extends Card {
    constructor(container, number, action) {

        super(container, number, action)
        this.cardNumber = number
    }

    set cardNumber(value) {
        const cardsImgArray = [
            '/img/01.png',
            '/img/02.png',
            '/img/03.png'
        ]
        const img = document.createElement('img')
        img.src = cardsImgArray[value - 1]
        img.onerror = () => {
            img.src = '/img/01.png';
        };
        this.img = img
        this.card.innerHTML = ''
        this.card.append(this.img)
        this.img.classList.add('hidden')
    }

    get cardNumber() {
        return this._cardNumber
    }

    set open(value) {
        super.open = value
        if (value || super.success){ this.img.classList.remove('hidden')} 
        else if  (!value || !super.success) {this.img.classList.add('hidden')}}
        

    get open() {
        return this._open
    }
}

