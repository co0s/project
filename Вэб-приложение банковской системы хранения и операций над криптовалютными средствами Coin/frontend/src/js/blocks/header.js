// Libraries
import { el } from 'redom';

// SCSS
import '../../scss/blocks/header/container.scss';
import '../../scss/blocks/main/main.scss';
import '../../scss/blocks/header/logo.scss';
import '../../scss/blocks/header/menu.scss';
import '../../scss/blocks/header/header.scss';

// Blocks
import createButton from './button';
import createSecondaryButton from './button--secondary';

// SVG
import Logo from '../../assets/images/logo.svg';
import Burger from '../../assets/images/burger.svg';

// Создание блока контейнера
export function createContainer() {
  return el('.container');
}

// Создание блока main
export function createMain() {
  const main = el('main.main');
  return main;
}

// Создание логотипа
function createLogo() {
  const logo = el('.logo');
  logo.innerHTML = Logo;

  return logo;
}

// Создание блока меню
function createMenu(items) {
  const nav = el('nav.menu');
  const list = el('ul.menu__list');

  items.forEach((item) => {
    const listItem = el('li.menu__item');
    const button = createSecondaryButton({
      text: item.text,
      handler: item.handler,
    });

    if (item.disabled) {
      button.disabled = true;
    }

    listItem.append(button);
    list.append(listItem);
  });

  nav.append(list);
  return nav;
}

// Создание шапки страницы
export default function createHeader(menuItems) {
  const header = el('header.header');

  const container = createContainer();
  header.append(container);

  const logo = createLogo();
  container.append(logo);

  if (menuItems) {
    const burger = createButton({
      icon: Burger,
      handler: () => {
        menu.classList.toggle('menu--visible');
      },
    });
    container.append(burger);

    const menuList = [];
    menuItems.forEach((item) => {
      menuList.push({
        text: item.text,
        disabled: item.disabled,
        handler: item.handler,
      });
    });
    const menu = createMenu(menuList);
    container.append(menu);

    burger.classList.add('button--burger');
  }

  return header;
}
