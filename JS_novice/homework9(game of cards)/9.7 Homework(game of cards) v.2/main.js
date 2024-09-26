

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
  


let isMismatch = false; // Переменная для хранения информации о совпадении

card.addEventListener('click', function() {
    if (!card.classList.contains('opened') && !isMismatch) {
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
                isMismatch = true; // Устанавливаем флаг несовпадения

                setTimeout(() => {
                    openedCards.forEach(c => c.classList.remove('opened'));
                    isMismatch = false; // Сбрасываем флаг после скрытия карточек
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