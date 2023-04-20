const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

const dataLengthEl = inputEl.getAttribute('data-length');
// console.log(dataLengthEl);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    const valueLength = event.target.value.trim().length;
    if(valueLength === Number(dataLengthEl)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')
        
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
        
    }
};
