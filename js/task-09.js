function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector('body'),
  text: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

elements.button.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor(event) {
  elements.text.textContent = getRandomHexColor();
  elements.body.style.backgroundColor = elements.text.textContent;
}
