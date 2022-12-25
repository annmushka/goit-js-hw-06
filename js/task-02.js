const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {

  const ingredientsElList = document.createElement('li');

  ingredientsElList.textContent = ingredient;
  ingredientsElList.classList.add('item');
  ingredientsList.appendChild(ingredientsElList);
});
