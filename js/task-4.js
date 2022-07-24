const refs = {
  downIncrement: document.querySelector("[data-action='increment']"),
  upIncrement: document.querySelector("[data-action='decrement']"),
  upDown: document.querySelector("#value"),
};

let counter = 0;
const increment = () => {
  counter += 1;

 refs.upDown.textContent = counter;
};

const decrement = () => {
  counter -= 1;

  refs.upDown.textContent = counter;
};

refs.downIncrement.addEventListener("click", increment);
refs.upIncrement.addEventListener("click", decrement);