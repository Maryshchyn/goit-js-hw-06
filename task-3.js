const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",},
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",},
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",},
];



const newLi = document.createElement('li')
newLi.classList.add('gallery-item')
const galleryAddEl = document.querySelector('.gallery')
const elements = [];
for (let i = 0; i < images.length; i += 1){
    const option = images[i]
    
    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery-item__image')
    imgEl.src = option.url;
    imgEl.alt = option.alt;
    imgEl.style.width = 50;
    elements.push(imgEl);
}
newLi.append(...elements)


galleryAddEl.append(newLi)
console.log(galleryAddEl)





