import { el } from 'redom';

// SCSS
import '../../scss/blocks/account-info/account-info.scss';

// Создание блока информации о счёте
export default function createAccountInfo() {
  const div = el('.account-info');
  return div;
}
