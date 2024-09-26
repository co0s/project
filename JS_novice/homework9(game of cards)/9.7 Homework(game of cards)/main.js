/* // ### Этап 1: Создание массива парных чисел

function generatePairsArray(){

} */

/////////////////////////////////////////////////////////////////


/* (()=>{
  const randomNumbers = []
  
  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex ;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
   return array;
  }
  for (let i = 1; i <=8; i+=2){
     randomNumbers.push(i);
     randomNumbers.push(i);
  }
 
  shuffle(randomNumbers);
  console.log(randomNumbers);
})(); */

////////////////////////////////////////////////////////////////////////////

/* 
// Этап 1: Создание массива парных чисел
const generatePairsArray = () => {
  const array = [];
  for (let i = 1; i <= 8; i++) {
    array.push(i, i);
  }
  return array;
};

// Этап 2: Перемешивание массива
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Этап 3: Создание массива с перемешанными номерами
const generateShuffledNumbersArray = () => {
  const pairsArray = generatePairsArray();
  return shuffleArray(pairsArray);
};

// Этап 4: Создание DOM-элементов карточек
const createCard = (number) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.addEventListener("click", () => {
    card.classList.toggle("open");
    checkMatch(card, number);
  });
  return card;
};

// Проверка соответствия
let clickedCards = [];
const checkMatch = (card, number) => {
  if (clickedCards.length === 0) {
    clickedCards.push(card, number);
  } else if (clickedCards.length === 2) {
    if (clickedCards[1] === number) {
      // Соответствие
      setTimeout(() => {
        clickedCards[0].classList.add("matched");
        clickedCards[0].classList.remove("open");
        card.classList.add("matched");
        card.classList.remove("open");
        clickedCards = [];
      }, 1000);
    } else {
      // Несоответствие
      setTimeout(() => {
        clickedCards[0].classList.remove("open");
        card.classList.remove("open");
        clickedCards = [];
      }, 1000);
    }
  }
};

// Основная функция, которая создает игру
const startGame = () => {
  const numbersArray = generateShuffledNumbersArray();

  numbersArray.forEach((number) => {
    const card = createCard(number);
    document.querySelector(".game-board").appendChild(card);
  });
};

startGame(); */



//////////////////////////////////////////////////////////////////

// Генерация массива парных чисел от 1 до 8
function generatePairsArray() {
  const pairsArray = [];
  for (let i = 1; i <= 8; i++) {
      pairsArray.push(i, i);
  }
  return pairsArray;
}

// Перемешивание массива с использованием алгоритма Фишера-Йетса
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Создание массива с перемешанными номерами
const pairsArray = generatePairsArray();
const shuffledPairsArray = shuffleArray(pairsArray);

// Создание DOM-элементов карточек


function createCard(number) {
  const container = document.createElement('div')
  document.body.classList.add('cards__block')

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.number = number;
  card.textContent = number;

  document.body.append(container)
  container.append(card)
  
  card.addEventListener('click', function() {
      if (!card.classList.contains('opened')) {
          card.classList.add('opened');
          
          const openedCards = document.querySelectorAll('.opened');
          if (openedCards.length === 2) {
              const [card1, card2] = openedCards;
              if (card1.dataset.number === card2.dataset.number) {
                  // Совпадение - обработка
                  console.log('Пара найдена!');
                  openedCards.forEach(c => c.classList.add('matched'));
              } else {
                  // Не совпадение - обработка
                  console.log('Пара не совпадает!');
                  setTimeout(() => {
                      openedCards.forEach(c => c.classList.remove('opened'));
                  }, 1000);
              }
          }
      }
  });
}

// Создание карточек на игровом поле
shuffledPairsArray.forEach(number => createCard(number));

// Дополнительные задания:
// 1. Реализация настройки количества карточек перед началом игры (не обработано в данном коде)
// 2. Добавление таймера на одну минуту для игры (не обработано в данном коде)