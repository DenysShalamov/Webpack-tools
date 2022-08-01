import { initTodoListHandlers } from './list/todoList.js';
import { renderTasks } from './list/renderer.js';
import { getTasksList } from './list/tasksGateway.js';
import { setItem } from './list/storage.js';
import './index.scss';
// когда страница загрузилась
document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks(); // при загрузке страници рендерим таски на страницу (если есть на сервере)
  });

  initTodoListHandlers(); // запускаем обработчики
});
// кобэк для ивента на сторэдж
const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange); // обработчик для сторэджа
