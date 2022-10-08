function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const btnChangeColorRef = document.querySelector('.change-color');

btnChangeColorRef.addEventListener('click', bodyChangeColor);

function bodyChangeColor() {
  const randomHexColor = getRandomHexColor();

  bodyRef.style.backgroundColor = randomHexColor;
  spanRef.textContent = randomHexColor;
}
