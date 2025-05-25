import reload from '../../index';

// Выход пользователя из системы
export default function logout() {
  localStorage.removeItem('token');
  reload();
}
