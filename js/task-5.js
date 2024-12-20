function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const bodyColor = document.querySelector('body');

btnEl.addEventListener('click', () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorText.textContent = bodyColor.style.backgroundColor;
});
