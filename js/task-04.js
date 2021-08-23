const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    spanValue: document.getElementById('value'),
    currentValue: 0,
};

refs.btnIncrement.addEventListener('click', increment);
refs.btnDecrement.addEventListener('click', decrement);

function increment() {
    refs.spanValue.textContent = refs.currentValue += 1;
}
function decrement() {
    refs.spanValue.textContent = refs.currentValue -= 1;
}
