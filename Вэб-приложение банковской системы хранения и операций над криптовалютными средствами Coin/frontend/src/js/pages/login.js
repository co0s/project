// Импортируем блоки
import createHeader from '../blocks/header';
import createLoginForm from '../blocks/login-form';
import { createContainer } from '../blocks/header';
import { createMain } from '../blocks/header';

// SCSS
import 'normalize.css';
import './../../scss/common/common.scss';

export default function renderLoginPage() {
  const body = document.body;
  const header = createHeader();
  const main = createMain();
  const mainContainer = createContainer();
  const loginForm = createLoginForm();

  mainContainer.append(loginForm);
  main.append(mainContainer);

  body.innerHTML = '';
  body.append(header, main);

  main.style.minHeight = `calc(100vh - ${header.offsetHeight}px)`;
}
