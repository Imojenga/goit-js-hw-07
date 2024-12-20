function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const createInput = document.querySelector('input');
const boxesDiv = document.getElementById('boxes');

function createBoxes(amount) {
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const boxColor = getRandomHexColor();
    const boxSize = 30 + i * 10;
    boxesMarkup += `<div style='width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};'></div>`;
  }
  boxesDiv.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

const onCreateBtnClick = () => {
  const amount = createInput.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    createInput.value = '';
  }
};

const onDestroyBtnClick = () => {
  destroyBoxes();
};

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
