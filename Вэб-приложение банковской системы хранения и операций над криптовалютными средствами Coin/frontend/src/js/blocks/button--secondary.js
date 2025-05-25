import createButton from './button';
import './../../scss/blocks/button/button--secondary.scss';

// Создание дополнительной кнопки
export default function createSecondaryButton(data) {
  const button = createButton(data);
  button.classList.add('button--secondary');

  return button;
}
