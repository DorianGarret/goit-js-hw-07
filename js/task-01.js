const categories = document.getElementById('categories');
console.log(`В списке ${categories.childElementCount} категории.`);

console.log(`Категория: ${categories.children[0].firstElementChild.textContent}`);
console.log(`Количество элементов: ${categories.children[0].lastElementChild.childElementCount}`);
console.log(`Категория: ${categories.children[1].firstElementChild.textContent}`);
console.log(`Количество элементов: ${categories.children[1].lastElementChild.childElementCount}`);
console.log(`Категория: ${categories.children[2].firstElementChild.textContent}`);
console.log(`Количество элементов: ${categories.children[2].lastElementChild.childElementCount}`);
