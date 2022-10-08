const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', changeText);

function changeText(event) {
  spanRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    spanRef.textContent = 'Anonymous';
  }
}
