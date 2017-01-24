"use strict";

const fontArray = JSON.parse(fontsString); // got Fontstring from php
const fontName = fontArray[0];

const body = document.body;
const head = document.head;

createFontCard('Montserrat');
createFontCard('Verdana');
createFontCard('Avenir');
createFontCard('Palatino');
createFontCard('Optima');
createFontCard('Helvetica');
createFontCard('Athelas');
createFontCard('Charter');
createFontCard('Seravek');

function createFontCard(fontName) {
    let typeCardElem = document.createElement('div');
    typeCardElem.classList.add('type-card');
    typeCardElem.id = fontName;
    typeCardElem.style.fontFamily = fontName;

    let cardInfoElem = document.createElement('div');
    cardInfoElem.classList.add('type-card__info');
    typeCardElem.appendChild(cardInfoElem);

    let fontNameSpan = document.createElement('span');
    fontNameSpan.classList.add('font-name');
    fontNameSpan.innerHTML = `${fontName}`;
    cardInfoElem.appendChild(fontNameSpan);

    let fontSizeSlider = document.createElement('input');
    fontSizeSlider.setAttribute('type', 'range');
    fontSizeSlider.setAttribute('min', '15');
    fontSizeSlider.setAttribute('max', '70');
    fontSizeSlider.style.float = 'right';
    fontSizeSlider.classList.add('font-size-range');
    cardInfoElem.appendChild(fontSizeSlider);

    let fontWeightSlider = document.createElement('input');
    fontWeightSlider.setAttribute('type', 'range');
    fontWeightSlider.setAttribute('min', '100');
    fontWeightSlider.setAttribute('max', '900');
    fontWeightSlider.setAttribute('step', '100');
    fontWeightSlider.style.float = 'right';
    fontWeightSlider.classList.add('font-weight-range');
    cardInfoElem.appendChild(fontWeightSlider);

    let fontSpaceSlider = document.createElement('input');
    fontSpaceSlider.setAttribute('type', 'range');
    fontSpaceSlider.setAttribute('min', '0');
    fontSpaceSlider.setAttribute('max', '1');
    fontSpaceSlider.setAttribute('step', '0.1');
    fontSpaceSlider.style.float = 'right';
    fontSpaceSlider.classList.add('font-size-range');
    cardInfoElem.appendChild(fontSpaceSlider);

    let cardTypeElem = document.createElement('div');
    cardTypeElem.classList.add('type-card__body');
    typeCardElem.appendChild(cardTypeElem);

    let inputType = document.createElement('input');
    inputType.classList.add('font-action');
    inputType.classList.add('font-test-input');
    inputType.setAttribute('type', 'text');
    inputType.setAttribute('value', 'type here');
    cardTypeElem.appendChild(inputType);

    let alphabetLowercase = document.createElement('p');
    alphabetLowercase.classList.add('font-action');
    alphabetLowercase.classList.add('alphabet__lowercase');
    alphabetLowercase.innerHTML = "abcdefghijklmnopqrstuvwxyz";
    cardTypeElem.appendChild(alphabetLowercase);

    let alphabetUppercase = document.createElement('p');
    alphabetUppercase.classList.add('font-action');
    alphabetUppercase.classList.add('alphabet__lowercase');
    alphabetUppercase.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    cardTypeElem.appendChild(alphabetUppercase);

    let testSentence = document.createElement('p');
    testSentence.classList.add('font-action');
    testSentence.classList.add('alphabet-sentence');
    testSentence.innerHTML = "The quick brown fox jumps over the lazy dog";
    cardTypeElem.appendChild(testSentence);


    let actionFontElems = cardTypeElem.querySelectorAll('.font-action');

    cardTypeElem.style.fontSize = '25px';
    fontSizeSlider.value = 25;
    fontWeightSlider.value = 100;
    fontSpaceSlider.value = 0;

    const typeCardContainer = document.querySelector('.card-container');
    typeCardContainer.appendChild(typeCardElem);

    let isClick = false;

    function changeFontSize(eventData) {
        if (isClick)
            actionFontElems.forEach((elem) => {
                elem.style.fontSize = `${this.value}px`;
            });
    }
    fontSizeSlider.addEventListener('mousemove', changeFontSize);
    fontSizeSlider.addEventListener('mousedown', () => isClick = true);
    fontSizeSlider.addEventListener('mouseup', () => isClick = false);

    function changeFontWeight(eventData) {
        if (isClick)
            actionFontElems.forEach(elem => {
                elem.style.fontWeight = `${this.value}`;
            });
    }
    fontWeightSlider.addEventListener('mousemove', changeFontWeight);
    fontWeightSlider.addEventListener('mousedown', () => isClick = true);
    fontWeightSlider.addEventListener('mouseup', () => isClick = false);

    function changeLetterSpace(eventData) {
        if (isClick)
            actionFontElems.forEach(elem => {
                elem.style.letterSpacing = `${this.value}em`;
            });
    }
    fontSpaceSlider.addEventListener('mousemove', changeLetterSpace);
    fontSpaceSlider.addEventListener('mousedown', () => isClick = true);
    fontSpaceSlider.addEventListener('mouseup', () => isClick = false);
}


