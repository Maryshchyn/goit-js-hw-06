
const titleEl = document.querySelector('h1');
titleEl.classList.add('page-title');
const refs = {
    inpute: document.querySelector('#name-input'),
    nameInput: document.querySelector('#name-output'),
}

refs.inpute.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    refs.nameInput.textContent = (event.currentTarget.value);
    console.log(event.currentTarget.value)
}
