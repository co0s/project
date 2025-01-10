import Inputmask from 'inputmask';
import validator from 'validator';
import cardValidator from 'card-validator';
import visa from './img/visa.png'
import mastercard from './img/mastercard.png'

// Function to get the base URL of the current script
function getScriptBaseUrl() {
    const script = document.currentScript;
    if (!script) {
        throw new Error('Could not find current script');
    }
    return new URL(script.src).href;
}

// Path to the image folder (relative to the script)
const imgPath = `${getScriptBaseUrl()}img/`;

// Маски для ввода
Inputmask("9999 9999 9999 9999", { placeholder: " " }).mask("#card-number");
Inputmask("99/99", { placeholder: "MM/YY" }).mask("#expiry-date");
Inputmask("999", { placeholder: "" }).mask("#cvc");

// Функция валидации формы
function validateForm() {
    const cardNumberInput = document.getElementById('card-number');
    const cardNumber = cardNumberInput.value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;
    const email = document.getElementById('email').value;

    const cardValidation = cardValidator.number(cardNumber);
    const isCardValid = cardValidation.isValid;

    const isExpiryValid = /^\d{2}\/\d{2}$/.test(expiryDate) && isExpiryDateValid(expiryDate);
    const isCvcValid = /^\d{3}$/.test(cvc);
    const isEmailValid = validator.isEmail(email);

    document.getElementById('card-error').textContent = isCardValid ? '' : 'Неверный номер карты';
    document.getElementById('expiry-error').textContent = isExpiryValid ? '' : 'Неверная дата';
    document.getElementById('cvc-error').textContent = isCvcValid ? '' : 'Неверный CVC';
    document.getElementById('email-error').textContent = isEmailValid ? '' : 'Неверный email';

    document.getElementById('pay-button').disabled = !(isCardValid && isExpiryValid && isCvcValid && isEmailValid);




    // Обновление изображения карты
    const cardImage = document.getElementById('card-image');
    cardImage.style.display = 'none'; // Скрываем изображение по умолчанию

    if (isCardValid && cardValidation.card) {
        const cardType = cardValidation.card.type;

        if (cardType === 'visa') {
            cardImage.src = visa;
            cardImage.style.display = 'block';
        } else if (cardType === 'mastercard') {
            cardImage.src = mastercard;
            cardImage.style.display = 'block';
        }
        // Добавьте else if для других типов карт, если необходимо (например, mir)
    }
}



 
//4640 0531 7070 6581 карта виза

// Проверка корректности даты окончания действия карты
function isExpiryDateValid(date) {
    const [month, year] = date.split('/').map(Number);
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;

    return (year > currentYear || (year === currentYear && month >= currentMonth));
}

const formInputs = document.querySelectorAll('#payment-form input');

formInputs.forEach(input => {
    input.addEventListener('blur', validateForm);
});

formInputs.forEach(input => {
    input.addEventListener('input', () => {
        document.getElementById('pay-button').disabled = true;
        validateForm(); // Вызываем validateForm при каждом вводе, чтобы сразу обновлять картинку
    });
});

document.getElementById('payment-form').addEventListener('submit', (event) => {
    validateForm();
    if (document.getElementById('pay-button').disabled) {
        event.preventDefault();
    }
});