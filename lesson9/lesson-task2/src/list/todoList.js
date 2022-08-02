import onCreateTask from './createTask';
import onToggleTask from './updateTask';
// ф-ция с обработчиками ивентов на кнопку и список (для чекбокса)
export default () => {
  const createBtnElem = document.querySelector('.create-task-btn'); // находим кнопку
  createBtnElem.addEventListener('click', onCreateTask); // обработчик на кнопку

  const todoListElem = document.querySelector('.list'); // находим список
  todoListElem.addEventListener('click', onToggleTask); // обработчик на клик
};
