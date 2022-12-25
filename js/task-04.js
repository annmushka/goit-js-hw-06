const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');
let counterValue = 0;


const handleDecrBtn = () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};
decrementButton.addEventListener('click', handleDecrBtn);


const handleIncrBtn = () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
};
incrementButton.addEventListener('click', handleIncrBtn);


