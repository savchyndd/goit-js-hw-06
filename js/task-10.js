function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumRef = document.querySelector('#controls > input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', onCreateBoxesClick);

function onCreateBoxesClick() {
  divBoxesRef.insertAdjacentHTML('beforeend', createBoxes(inputNumRef.value));

  btnDestroyRef.addEventListener('click', onDestroyBoxesClick);
}

function onDestroyBoxesClick() {
  while (divBoxesRef.firstChild) {
    divBoxesRef.removeChild(divBoxesRef.firstChild);
  }
}

function createBoxes(amount) {
  let divBoxes = '';
  let divSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    divBoxes += `<div style="width:${divSize}px; height:${divSize}px; background-color:${getRandomHexColor()}"></div>`;
    divSize += 10;
  }

  return divBoxes;
}
