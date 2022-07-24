const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector(`.gallery`);
console.log(listEl);
const createElement = img => {
  return `<li> <img src="${img.url}" alt="${img.alt}" width = 200 height = 150> </li>`
  
}
const galleryList = document.querySelector("#gallery");

document.body.style.backgroundImage = "linear-gradient(to right, #00008B, #FFFF00)"



listEl.setAttribute("style", "list-style-type:none; display: flex; justify-content: center; " );

const markUp = images.map(createElement).join("")
console.log(markUp);
listEl.insertAdjacentHTML("beforeend", markUp)



