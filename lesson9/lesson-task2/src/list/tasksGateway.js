const baseUrl = 'https://62d6fb0b51e6e8f06f16d24a.mockapi.io/tasks'; // сервер

// получить данные с сервера
// делаем запрос на сервер
export const getTasksList = () => fetch(baseUrl).then((response) => response.json());

// ф-ция создаем таску на сервере
export const createTasks = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});
// ф-ция обновляем таску на сервере
export const updateTasks = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});
// удаляем таску на сервере
export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
