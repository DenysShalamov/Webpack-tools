import initTodoListHandlers from './list/todoList';
import renderTasks from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
import './index.scss';
// когда страница загрузилась
document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks(); // при загрузке страници рендерим таски на страницу (если есть на сервере)
  });

  initTodoListHandlers(); // запускаем обработчики
});
// кобэк для ивента на сторэдж
const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange); // обработчик для сторэджа
