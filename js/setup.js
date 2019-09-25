'use strict';
var WIZARDS_OBJECT = 4;
var WIZARDS_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list'); // Покажем блок с похожими персонажами.
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Найдём шаблон, который мы будем копировать. template элемент, в который мы будем вставлять похожих магов.
// Случайное число из массива
var getRandom = function (rand) {
  return rand[Math.floor(Math.random() * rand.length)];
};
// Генерирует волшебника с рандомными свойствами
var getRandomWizard = function () {
  var wizard = {
    name: [getRandom(WIZARDS_NAMES)] + ' ' + [getRandom(WIZARDS_SURNAMES)],
    coatColor: getRandom(COATS_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  };

  return wizard;
};
// цикл перебора волшебников от 1 до 4
for (var i = 0; i < WIZARDS_OBJECT; i++) {
  wizards[i] = getRandomWizard();
}
// создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
