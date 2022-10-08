const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onBlur);

function onBlur(event) {
  event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');

  if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  }
}
