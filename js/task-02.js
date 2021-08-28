const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const getIngredients = document.getElementById('ingredients');

const setIngredientsData = ingredients.map(ingredient => {
    let li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

getIngredients.append(...setIngredientsData);
