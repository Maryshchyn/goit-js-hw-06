





const numberOfCategories = document.getElementById('categories').children.length;
console.log(`Number of categories: ${numberOfCategories}`)



const numberOfCategoriesw = document.getElementById('categories')

const firstChildren = numberOfCategoriesw.firstElementChild;
const firstChildrenbeginning = firstChildren.lastElementChild;
const firstChildrenLast = firstChildrenbeginning.children.length;
const firstNamebeginning = firstChildren.firstElementChild;
const firstNameEnd = firstNamebeginning.textContent;

console.log(`Category:${firstNameEnd}`)
console.log(`Elements:${firstChildrenLast}`)


const secondChildren = numberOfCategoriesw.children[1];
const secondChildrenMiddle = secondChildren.children[1];
const secondChildrenLast = secondChildrenMiddle.children.length;
const secondChildrenName = secondChildren.children[0];
const secondChildrenNameEnd = secondChildrenName.textContent;

console.log(`Category:${secondChildrenNameEnd}`)
console.log(`Elements:${secondChildrenLast}`)



const thirdChildren = numberOfCategoriesw.lastElementChild;
const thirdChildrenEnd = thirdChildren.lastElementChild;
const thirdChildrenLast = thirdChildrenEnd.children.length;
const thirdNameEnd = thirdChildren.firstElementChild;
const thirdChildrenNameEnd = thirdNameEnd.textContent;

console.log(`Category:${thirdChildrenNameEnd}`)
console.log(`Elements:${thirdChildrenLast}`)










