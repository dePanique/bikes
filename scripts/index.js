let scrollWidth = Math.max(
  document.body.scrollWidth,
  document.body.offsetWidth,
  document.body.clientWidth
);

const shosse = {
  one: ['Cervelo Caledonia-5', './images/bikes/Shosse1.jpg'],
  two: ['Cannondale Systemsix Himod', './images/bikes/Shosse2.jpg'],
  three: ['Trek Domane SL-7', './images/bikes/Shosse3.jpg']
}

const gravel = {
  one: ['Cervelo Aspero GRX 810', './images/bikes/gravel1.jpg'],
  two: ['Specialized S-Works Diverge', './images/bikes/gravel2.jpg'],
  three: ['Cannondale Topstone Lefty 3', './images/bikes/gravel3.jpg']
}

const tt = {
  one: ['Specialized S-Works Shiv', './images/bikes/TT1.jpg'],
  two: ['BMC Timemachine 01 ONE', './images/bikes/TT2.jpg'],
  three: ['Cervelo P-Series', './images/bikes/TT3.jpg']
}

// Переменная для отслеживания выбранного пользователем типа байка
let currentBikeObject = shosse;

// Присваиваем секцию Bikes
const bikes = document.querySelector('.bikes');

const bikeTypes = bikes.querySelectorAll('.bikes__bikes-nav-element');
const shosseButton = bikeTypes[0];
const gravelButton = bikeTypes[1];
const ttButton = bikeTypes[2];
let currentActiveButton = shosseButton;

let currentActivePoint = {};

// Присваиваем bikesShowFrame
const bikesShowFrame = bikes.querySelector('.bikes__show-frame');
let getBikesShowFrameStatus = 3;

// Присваиваем bikeCard
const bikeCard = bikes.querySelector('#bikes-card').content;

// Присваиваем
const bikesSelect = bikes.querySelector('.bikes__option-menu');


/* Functions */

// Проверить ширину документа
function getResolutionSize() {
  scrollWidth = Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.body.clientWidth,
  );
}

// Функция создания карточки bikes__card-frame
function createCard(bikeObj, bikeNumber) {

  let element = bikeCard.querySelector('.bikes__card-frame').cloneNode(true);

  element.querySelector('.bikes__bike-name').textContent = bikeObj[bikeNumber][0];
  element.querySelector('.bikes__picture').src = bikeObj[bikeNumber][1];

  if (scrollWidth < 1200) {
    const bikesPoint = element.querySelectorAll('.bikes__point');

    currentActivePoint = bikesPoint[0];

    bikesPoint[0].addEventListener('click', () => {
      element.querySelector('.bikes__bike-name').textContent = bikeObj['one'][0];
      element.querySelector('.bikes__picture').src = bikeObj['one'][1];
      toggleClass(currentActivePoint, 'bikes__point_active_true');
      currentActivePoint = bikesPoint[0];
      toggleClass(currentActivePoint, 'bikes__point_active_true');
    });

    bikesPoint[1].addEventListener('click', () => {
      element.querySelector('.bikes__bike-name').textContent = bikeObj['two'][0];
      element.querySelector('.bikes__picture').src = bikeObj['two'][1];
      toggleClass(currentActivePoint, 'bikes__point_active_true');
      currentActivePoint = bikesPoint[1];
      toggleClass(currentActivePoint, 'bikes__point_active_true');
    });

    bikesPoint[2].addEventListener('click', () => {
      element.querySelector('.bikes__bike-name').textContent = bikeObj['three'][0];
      element.querySelector('.bikes__picture').src = bikeObj['three'][1];
      toggleClass(currentActivePoint, 'bikes__point_active_true');
      currentActivePoint = bikesPoint[2];
      toggleClass(currentActivePoint, 'bikes__point_active_true');
    });

  }

  return element

}

// Функция добавляет карточку в конец bikes__show-frame
function appendBikeCard(element) {
  bikesShowFrame.append(element);
}

// Очистить bikes__show-frame от карточек
function cleanShowFrame() {

  while (bikesShowFrame.firstChild) {
    bikesShowFrame.removeChild(bikesShowFrame.firstChild);
  };

}
// Заполнить bikes__show-frame карточками с байками
function fillShowFrame(bikeObj) {

  cleanShowFrame();

  currentBikeObject = bikeObj;

  if (scrollWidth > 1200) {

    appendBikeCard(createCard(bikeObj, 'one'));
    appendBikeCard(createCard(bikeObj, 'two'));
    appendBikeCard(createCard(bikeObj, 'three'));

    getBikesShowFrameStatus = 3;

  } else {

    appendBikeCard(createCard(bikeObj, 'one'));

    getBikesShowFrameStatus = 1;

  }

}

// Toggle классов
function toggleClass(target, className) {
  target.classList.toggle(className);
  console.log(target)
}

// toggle для bikes-nav
function toggleBikesNavElementClass() {

}

/*Listeners*/

// Проверяем разрешение и чтобы изменить количество карточек
window.onresize = function() {

  scrollWidth = Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.body.clientWidth,
  );

  if (scrollWidth < 1200 && getBikesShowFrameStatus === 3) {

    cleanShowFrame();

    fillShowFrame(currentBikeObject);

  }

  if (scrollWidth > 1200 && getBikesShowFrameStatus === 1) {

    cleanShowFrame();

    fillShowFrame(currentBikeObject);

  }


};

// Кнопка байков Шоссе
shosseButton.addEventListener('click', (event) => {

  cleanShowFrame();

  if (scrollWidth < 1200) {
    fillShowFrame(shosse);
  } else {
    fillShowFrame(shosse)
  }

  bikesSelect.value = '1';

  toggleClass(currentActiveButton, 'bikes__bikes-nav-element_active_true');
  toggleClass(event.target, 'bikes__bikes-nav-element_active_true');
  currentActiveButton = event.target;
})

// Кнопка байков gravel
gravelButton.addEventListener('click', (event) => {

  cleanShowFrame();

  if (scrollWidth < 1200) {
    fillShowFrame(gravel);
  } else {
    fillShowFrame(gravel)
  }

  bikesSelect.value = '2';

  toggleClass(currentActiveButton, 'bikes__bikes-nav-element_active_true');
  toggleClass(event.target, 'bikes__bikes-nav-element_active_true');
  currentActiveButton = event.target;

})

// Кнопка байков TT
ttButton.addEventListener('click', (event) => {

  cleanShowFrame();

  if (scrollWidth < 1200) {
    fillShowFrame(tt);
  } else {
    fillShowFrame(tt)
  }

  bikesSelect.value = '3';

  toggleClass(currentActiveButton, 'bikes__bikes-nav-element_active_true');
  toggleClass(event.target, 'bikes__bikes-nav-element_active_true');
  currentActiveButton = event.target;

})

// Лисенер селекта в секции bikes
bikesSelect.addEventListener('change', (event) => {

  event.target.value === '1' ?
  fillShowFrame(shosse) :
  event.target.value === '2' ?
  fillShowFrame(gravel) : fillShowFrame(tt);

});

// Добавляем карточки при начальном открытие страницы
fillShowFrame(shosse);
toggleClass(currentActiveButton, 'bikes__bikes-nav-element_active_true');
