import { getItem } from './storage.js';

const listElem = document.querySelector('.list'); // находим список
// ф-ция создает чекбокс
const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input'); // создаем инпут
  checkboxElem.setAttribute('type', 'checkbox'); // + атрибут
  checkboxElem.setAttribute('data-id', id); // + id
  checkboxElem.checked = done; // в значение добавляем статус таски
  checkboxElem.classList.add('list-item__checkbox'); // добавляем класс

  return checkboxElem;
};
// ф-ция создает лист айтем
const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li'); // создаем li
  listItemElem.classList.add('list-item', 'list__item'); // добавляем классы
  const checkboxElem = createCheckbox({ done, id }); // создаем чекбокс в лист айтеме
  if (done) {
    listItemElem.classList.add('list-item_done'); // если статус таски выполнен добавляем класс
  }
  const textElem = document.createElement('span'); // создаем блок с текстом таски
  textElem.classList.add('list-item__text'); // добавляем класс
  textElem.textContent = text; // + текст таски
  const deleteBtnElem = document.createElement('button'); // создаем кнопку удаления таски
  deleteBtnElem.classList.add('list-item__delete-btn'); // добавляем класс

  listItemElem.append(checkboxElem, textElem, deleteBtnElem); // добавляем чекбокс, текст и кнопку в лист айтем
  return listItemElem;
};
// ф-ция рендерит таски на страницу
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || []; // получаем массив тасок

  listElem.innerHTML = ''; // вначале очищаем список (для перезаписи)
  const tasksElems = tasksList.sort((a, b) => a.done - b.done).map(createListItem); // итерируем масив тасок и на каждой итерации создаем лист айтем

  listElem.append(...tasksElems); // добавляем все лист айтемі в список на странице
};
