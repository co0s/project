import { el, mount } from 'redom';
import '../../scss/test.scss';

export default function createTest() {
  let test = el('h1.color-test', 'hello redom');
  mount(document.body, test);
}
