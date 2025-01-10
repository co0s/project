import { Card } from './card.js'
import { AmazingCard } from './card.js'



function newGame(container, cardsCount) {
    //Создать поле
    cardsCount = cardsCount
    let cardsNumberArray = [],
        cardsArray = [],
        firstCard = null,
        secondCard = null

    for (let i = 1; i <= cardsCount / 2; i++) { //ранее пушилось число в пустой массив
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new AmazingCard(container, cardNumber, flip))
    }

    //Логика
    function flip(card) {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number != secondCard.number) {
                firstCard.open = false;
                secondCard.open = false;
                firstCard = null;
                secondCard = null;
            }
        }

        if (firstCard == null) {
            firstCard = card;
        } else {
            if (secondCard == null) {
                secondCard = card;
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
                firstCard.success = true;
                secondCard.success = true;
                firstCard = null;
                secondCard = null;
            }
        }

        // Сброс
        if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
            alert('YOU WIN');
            container.innerHTML = '';
            cardsNumberArray = [];
            cardsArray = [];
            firstCard = null;
            secondCard = null;
            
            newGame(container, cardsCount);
        }
    }
}

function updateTimerDisplay() {
    var timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
        timerDisplay.textContent = 'Time: ' + timer + 's';
    }
}

let timer = 0
let timerInterval

document.getElementById('startButton').addEventListener('click', function () {

    let button = document.getElementById('startButton');
    button.classList.add('hidden');

    // Начинаем отсчет времени
    timer = 0;
    updateTimerDisplay();
    timerInterval = setInterval(function () {
        timer++;
        updateTimerDisplay();
    }, 1000);


    newGame(document.getElementById('game'), 6);
});