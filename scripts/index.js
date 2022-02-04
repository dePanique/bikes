/*const picdown = document.querySelector('.bikes__picture-background');

picdown.addEventListener('pointerdown', (event) => {
  console.log(event.layerX)
  picdown.addEventListener('pointerup', (event) => {
    console.log(event)
  })
})

const bikes = document.querySelector('.bikes');

let scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);

console.log(scrollWidth);

window.onresize = function() {
  scrollWidth = Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.body.clientWidth,
  );
  console.log(scrollWidth);
};*/

const bikesObject = {
  shosse:[
    {
      link: './images/bikes/Shosse1.jpg',
      name: 'one'
    },
    {
      link: './images/bikes/Shosse2.jpg',
      name: 'two'
    },
    {
      link: './images/bikes/Shosse3.jpg',
      name: 'three'
    }
  ],
  gravel: {},
  tt: {}
}

const bikesNav = document.querySelector('.bikes__bikes-nav');

const bikeTypes = document.querySelectorAll('.bikes__bikes-nav-element');
const shosseButton = bikeTypes[0];
const gravelButton = bikeTypes[1];
const ttButton = bikeTypes[2];

console.log(shosseButton)

// Присваиваем секцию Bikes
const bikes = document.querySelector('.bikes');

// Присваиваем bikesShowFrame
const bikesShowFrame = bikes.querySelector('.bikes__show-frame');

// Присваиваем bikeCard
const bikeCard = document.querySelector('#bikes-card').content;

// Функция создания карточки
function createCard(bikeObj) {
  let bikeObjs = bikeObj;
  const element = bikeCard.querySelector('.bikes__card-frame').cloneNode(true);
console.log(bikeObj)
  /*element.querySelector('.bikes__picture').src = bikeObjs[0].link;
  element.querySelector('.bikes__bike-name').textContent = bikeObjs[0].name;*/

  return element
}

bikesShowFrame.append(createCard());

shosseButton.addEventListener('click', (event) => {
  createCard(bikesObject.shosse[0])
})