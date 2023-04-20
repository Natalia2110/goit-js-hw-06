let counterValue = 0;

const buttonDecrementEl = document.querySelector('[data-action = "decrement"]');
// console.log(buttonDecrementEl);

const buttonIncrementEl = document.querySelector('[data-action = "increment"]');
// console.log(buttonIncrementEl);

const spanEl = document.querySelector('#value');
// console.log(spanEl);

buttonDecrementEl.addEventListener("click", () => {
    // console.log("Button was clicked");
    counterValue -= 1;

    spanEl.textContent = counterValue;
  });

buttonIncrementEl.addEventListener("click", () => {
    // console.log("Button was clicked");
     counterValue += 1;

    spanEl.textContent = counterValue;

  });