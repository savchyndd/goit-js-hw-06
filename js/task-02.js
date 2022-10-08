const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredientsRef = document.querySelector('#ingredients');

const itemsList = ingredients.map(ingredient => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.textContent = ingredient;
  ingredientsItemRef.classList.add('.item');

  return ingredientsItemRef;
});

listIngredientsRef.append(...itemsList);
