let counterValue = 0;

const btnDecrementRef = document.querySelector('#counter [data-action="decrement"]');
const btnIncrementRef = document.querySelector('#counter [data-action="increment"]');
const counterValueRef = document.querySelector('#counter span');

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
