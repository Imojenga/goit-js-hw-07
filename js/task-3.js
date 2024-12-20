const textInput = document.querySelector('input');
const output = document.querySelector('span');

textInput.addEventListener('input', event => {
  if (textInput.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = textInput.value.trim();
  }
});
