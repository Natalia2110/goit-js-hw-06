const inputEl = document.querySelector('#font-size-control');
// console.log(inputEl);

const textEl = document.querySelector('#text');
// console.log(textEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    const eventValue = event.currentTarget.value;
    textEl.style.fontSize = `${eventValue}px`;
}

