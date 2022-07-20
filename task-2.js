const ingredientsEl = document.getElementById('ingredients')

const firstName = document.createElement('li');
firstName.classList.add('item');
firstName.textContent = "Potatoes";
const secondName = document.createElement('li');
secondName.classList.add('item');
secondName.textContent = "Mushrooms";
const thirdName = document.createElement('li');
thirdName.classList.add('item');
thirdName.textContent =  "Garlic";
const fourthName = document.createElement('li');
fourthName.classList.add('item');
fourthName.textContent =  "Tomatos";
const fifthName = document.createElement('li');
fifthName.classList.add('item');
fifthName.textContent = "Herbs";
const sixthName = document.createElement('li');
sixthName.classList.add('item');
sixthName.textContent = "Condiments";

ingredientsEl.append(firstName, secondName, thirdName, fourthName, fifthName, sixthName)
console.log(ingredientsEl)