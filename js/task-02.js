const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElement = document.querySelector('#ingredients');

const liElements = ingredients.map((ingredient) => {
  const liElement = document.createElement("LI");
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  return liElement;
  
});

ulElement.append(...liElements);
