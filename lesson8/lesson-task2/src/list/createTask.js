import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTasks, getTasksList } from './tasksGateway.js';
// колбек для обработчика на кнопку создания таски
export const onCreateTask = () => {
  const taskInputField = document.querySelector('.task-input'); // находим поле ввода

  const text = taskInputField.value; // текс в инпуте

  if (!text) {
    return; // если нет текста то не создаем таску
  }

  taskInputField.value = ''; // после нажатия на кнопку очищаем инпут

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(), // формируем новую таску
    id: Math.random().toString(),
  };

  createTasks(newTask) // добавляем таску на сервер
    .then(() => getTasksList()) // получаем от сервера обновленный список тасок
    .then(newTasksList => {
      setItem('tasksList', newTasksList); // добавляем оновленный список с сервера в локал сторэдж
      renderTasks(); // заново рендерим на страницу с новой таской
    });
};
