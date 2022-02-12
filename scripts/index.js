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

const landscapeObject = {
  'shosse': ['./images/landscape/Picture1.jpg', './images/landscape/Picture2.jpg', 'tt', 'gravel', 'Шоссе', `На\u00A0шоссейном велосипеде можно ездить по\u00A0 асфальту на\u00A0разных градиентах: будь\u00A0то горы или равнины. Гонки проходят в\u00A0командном пелотоне, но\u00A0тренироваться можно и\u00A0 самостоятельно.`, 'landscape__label-mark_bike-type_shosse'],
  'gravel': ['./images/landscape/Picture2.jpg', './images/landscape/Picture3.jpg', 'shosse', 'tt', 'Грэвел', `Грэвел похож на\u00A0шоссейный велосипед, но\u00A0конструкция рамы немного отличается, и\u00A0на\u00A0нём стоят более широкие покрышки, всё для того чтобы проехать по\u00A0лёгкому бездорожью.`, 'landscape__label-mark_bike-type_gravel'],
  'tt': ['./images/landscape/Picture3.jpg', './images/landscape/Picture1.jpg', 'gravel', 'shosse', 'ТТ', `ТТ\u00A0\u2014 это велосипед для триатлона или раздельного старта, гооняют на\u00A0таком велике только по\u00A0равнинному асфальту, велик очень быстрые и\u00A0аэродинамичный.`, 'landscape__label-mark_bike-type_tt']
}

let currentLandscapePictures = landscapeObject.shosse;

// Переменная для отслеживания выбранного пользователем типа байка
let currentBikeObject = shosse;

// Секция Header //

const header = document.querySelector('.header');
const burgerMenu =  header.querySelector('.header__burger-menu');
const burgerMenuLines =  header.querySelectorAll('.header__burger-line');
const headerNavigationPanel = header.querySelector('.header__navigation-panel');
const headerSwitch = header.querySelector('.switch_place_header');
const headerSwitchPoint = header.querySelector('.switch__point');

// Секция Bikes //

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

// Секция landscape //

const landscape = document.querySelector('.landscape');
// Картинки landscape
const landscapePictures = landscape.querySelectorAll('.landscape__picture');
// Кнопки landscape
const landscapeButtons = landscape.querySelectorAll('.landscape__button');
const landscapeLeftArrow = landscapeButtons[0];
const landscapeRightArrow = landscapeButtons[1];
// Текст lanscape
const landscapeTitle = landscape.querySelector('.landscape__title');
const landscapeDescription = landscape.querySelector('.landscape__description');
// Значок типа байка
const landscapeLabelMark = landscape.querySelector('.landscape__label-mark');


// Секция footer //

const footer = document.querySelector('.footer');
const input = footer.querySelector('.footer__input');
const submitButton = footer.querySelector('.footer__submitemail');
const form = footer.querySelector('.footer__emailform');
const switchPoint = footer.querySelector('.switch__point');


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
}

// toggle для bikes-nav
function toggleBikesNavElementClass() {

}

// Рендер меню

function renderMobileMenu() {
  toggleClass(burgerMenuLines[0], 'header__burger-line_active_true');
  toggleClass(burgerMenuLines[1], 'header__burger-line_active_true');
  toggleClass(burgerMenuLines[2], 'header__burger-line_active_true');
  toggleClass(header, 'header__menu_active');
  toggleClass(headerNavigationPanel, 'header__navigation-panel_menu_active');
  toggleClass(headerSwitch, 'switch_visible_false');
}

// Удалить меню

function deleteMobileMenu() {
  burgerMenuLines[0].classList.remove('header__burger-line_active_true');
  burgerMenuLines[1].classList.remove('header__burger-line_active_true');
  burgerMenuLines[2].classList.remove('header__burger-line_active_true');
  header.classList.remove('header__menu_active');
  headerNavigationPanel.classList.remove('header__navigation-panel_menu_active');
  headerSwitch.classList.add('switch_visible_false');
}

/*Listeners*/

// Header

burgerMenu.addEventListener('click', () => {
  renderMobileMenu();
})

headerSwitchPoint.addEventListener('click', () => {
  toggleClass(headerSwitchPoint, 'switch__point_active_true');
  toggleClass(switchPoint, 'switch__point_active_true');
})

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

    deleteMobileMenu();

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

function renderLandscapeSection(type) {
  landscapePictures[0].src = landscapeObject[type][0];
  landscapePictures[1].src = landscapeObject[type][1];
  landscapeTitle.textContent = landscapeObject[type][4]
  landscapeDescription.textContent = landscapeObject[type][5];
  toggleClass(landscapeLabelMark, currentLandscapePictures[6]);
  currentLandscapePictures = landscapeObject[type];
  toggleClass(landscapeLabelMark, currentLandscapePictures[6]);
}

landscapeLeftArrow.addEventListener('click', () => {
  renderLandscapeSection(currentLandscapePictures[2]);
})

landscapeRightArrow.addEventListener('click', () => {
  renderLandscapeSection(currentLandscapePictures[3]);
})

// Footer
submitButton.addEventListener('click', function() {

})

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  input.value = "Круто!";
  toggleClass(submitButton, 'footer__submitemail_active_true');
})

input.addEventListener('click', () => {
  if (submitButton.classList.contains('footer__submitemail_active_true') === false) {
    toggleClass(submitButton, 'footer__submitemail_active_true');
    input.value = "";
  }
})

input.addEventListener('input', () => {
  if (submitButton.classList.contains('footer__submitemail_active_true') === false) {
    toggleClass(submitButton, 'footer__submitemail_active_true');
  }
})

switchPoint.addEventListener('click', () => {
  toggleClass(switchPoint, 'switch__point_active_true');
  toggleClass(headerSwitchPoint, 'switch__point_active_true');
})

// Добавляем карточки при начальном открытие страницы
fillShowFrame(shosse);
toggleClass(currentActiveButton, 'bikes__bikes-nav-element_active_true');