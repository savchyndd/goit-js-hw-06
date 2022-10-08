const inputRangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', changeSize);

function changeSize(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
