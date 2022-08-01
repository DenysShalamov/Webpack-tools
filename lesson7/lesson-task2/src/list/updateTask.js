/* eslint-disable no-param-reassign */
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTasks, deleteTask } from './tasksGateway.js';

const deleteTaskElem = target => {
  const parent = target.closest('.list-item').querySelector(`input[type="checkbox"]`);
  const taskId = parent.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
// колбэк для ивента клика по списку
export const onToggleTask = ({ target }) => {
  if (target.tagName === 'LI') {
    target = target.querySelector(`input[type="checkbox"]`); // если кликнули по лист айтему то находим нужный чекбокс и меняем значение
    target.checked = !target.checked;
  } else if (target.classList.contains('list-item__delete-btn')) {
    deleteTaskElem(target); // если кликнули по крестику то удаляем таску (на странице и на сервере)
    return;
  }

  const taskId = target.dataset.id; // получаем id таски
  const done = target.checked; // получаем статус
  const tasksList = getItem('tasksList'); // получаем весь список тасок
  const { text, createDate } = tasksList.find(task => task.id === taskId); // находим таску которую необходимо обновить
  // создаем обновленную таску
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toString() : null,
  };

  updateTasks(taskId, updatedTask) // добавляем ее на сервер
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList); // возвращаем новый список
      renderTasks(); // заново рендерим таски с нового списка
    });
};
