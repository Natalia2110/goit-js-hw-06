const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
  } 
  refs.inputEl.addEventListener("input", onInputChange)
  
  function onInputChange(event) {
  
    const inputValue = event.currentTarget.value.trim();
    refs.spanEl.textContent = inputValue? inputValue : "Anonymous";
  }
      
      
    