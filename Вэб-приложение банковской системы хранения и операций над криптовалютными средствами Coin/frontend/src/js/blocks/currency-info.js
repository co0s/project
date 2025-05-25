import { el } from 'redom';

// SCSS
import '../../scss/blocks/currency-info/currency-info.scss';

// Создание блока с информацией о счёте
export default function createCurrencyInfo() {
  const div = el('.currency-info');
  return div;
}
