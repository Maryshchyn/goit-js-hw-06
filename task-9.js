const btnEl = document.querySelector('.change-color');
const spanElColor = document.querySelector('.color');

btnEl.addEventListener("click", () => {
    let changeColor = [getRandomHexColor()];
    document.body.style.backgroundColor = changeColor;
    spanElColor.textContent = changeColor;
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}