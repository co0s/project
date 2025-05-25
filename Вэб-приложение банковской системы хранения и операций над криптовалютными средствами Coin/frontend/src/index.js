import renderLoginPage from './js/pages/login';
import renderAccountsPage from './js/pages/accounts';
import renderAccountPage from './js/pages/account';
import renderHistoryPage from './js/pages/history';
import renderCurrencyPage from './js/pages/currency';
import renderBanksPage from './js/pages/banks';

export default function reload(path = '') {
  const origin = location.origin;
  const pathname = path ? path : location.pathname;

  if (path) {
    history.pushState({}, '', `${origin}${pathname}`);
  }

  if (!localStorage.token) {
    history.pushState({}, '', origin);
    renderLoginPage();
  } else if (pathname === '/accounts') {
    renderAccountsPage();
  } else if (pathname.match(/^\/accounts\/\d+$/)) {
    renderAccountPage(pathname.split('/')[2]);
  } else if (pathname.match(/^\/accounts\/\d+\/history$/)) {
    renderHistoryPage(pathname.split('/')[2]);
  } else if (pathname === '/currency') {
    renderCurrencyPage();
  } else if (pathname === '/banks') {
    renderBanksPage();
  } else {
    history.pushState({}, '', `${origin}/accounts`);
    renderAccountsPage();
  }
}

reload();

fetch(`http://localhost:3000`) // Замените на адрес вашего сервера
  .then((response) => {
    if (response.ok) {
      console.log('Сервер работает!');
    } else {
      console.error('Сервер не отвечает, код:', response.status);
    }
  })
  .catch((error) => {
    console.error('Ошибка при отправке запроса:', error);
  });

console.log('test');
