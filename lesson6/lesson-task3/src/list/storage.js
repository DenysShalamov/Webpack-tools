// ф-ция добавляем лист айтем в локал сторэдж
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// ф-ция получаем лист айтем с локал сторэдж
export const getItem = key => JSON.parse(localStorage.getItem(key));
