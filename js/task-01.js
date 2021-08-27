const refs = {
    categories: document.getElementById('categories'),
    item: document.querySelectorAll('#categories .item'),
};
console.log(`В списке ${refs.categories.childElementCount} категории.`);

refs.item.forEach(item => {
    item.querySelectorAll('h2').forEach(name => console.log(`Категория: ${name.textContent}`)),
        console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
