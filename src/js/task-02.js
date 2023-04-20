const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElement = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const liElement = document.createElement("LI");
  liElement.textContent = ingredient;
  liElement.classList.add('item');

  ulElement.append(liElement);
});
