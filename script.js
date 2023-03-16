// Создание параграфов с каждым десятым числом в промежутке от 100 до 50

const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
  const paragraph = document.createElement('p');
  paragraph.textContent = i;
  numbersDiv.appendChild(paragraph);
}


// Написать цикл, который проходится по массиву строк, 
// для каждой строки создает параграф и добавляет его в div с классом strings_container.
//  Строки взять произвольные.


const strings = ['строка 1', 'строка 2', 'строка 3']; // Замените на свои строки
const stringsContainer = document.querySelector('.strings_container');

for (const str of strings) {
  const paragraph = document.createElement('p');
  paragraph.textContent = str;
  stringsContainer.appendChild(paragraph);
}

// Написать цикл, который проходится по массиву с объектами -
//  у объектов свойства first_name, last_name и  age (данные взять произвольные) - 
//  и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени,
//   фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
  { first_name: 'Иван', last_name: 'Иванов', age: 25 },
  { first_name: 'Петр', last_name: 'Петров', age: 17 },
  { first_name: 'Сергей', last_name: 'Сергеев', age: 21 }
];

const usersContainer = document.querySelector('.users_container');

for (const user of users) {
  if (user.age >= 18) {
    const card = document.createElement('div');
    card.classList.add('card');

    const fullName = document.createElement('p');
    fullName.textContent = `Имя: ${user.first_name} ${user.last_name}`;
    card.appendChild(fullName);

    const age = document.createElement('p');
    age.textContent = `Возраст: ${user.age}`;
    card.appendChild(age);

    usersContainer.appendChild(card);
  }
}
