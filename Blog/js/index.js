'use strict';

const articles = document.querySelectorAll('.article'),
  dropMenu = document.querySelector('.articles__droplist'),
  btnSubmit = document.querySelector('.btn--submit'),
  writeMeFormTextarea = document.querySelector('.write-me__form-textarea'),
  messageForm = document.querySelector('.write-me__form');


dropMenu.addEventListener('change', () => {
  for (const article of articles) {
    if (dropMenu.value === article.dataset.tag || dropMenu.value === 'все статьи' || dropMenu.value === '') {
      article.classList.remove('article--hidden');
    } else {
      article.classList.add('article--hidden');
    }
  }
});

writeMeFormTextarea.addEventListener('input', () => {
  if (writeMeFormTextarea.value.length >= 10 && writeMeFormTextarea.value.length <= 200) {
    writeMeFormTextarea.classList.remove('feedback__textarea--warning');
  } else {
    writeMeFormTextarea.classList.add('feedback__textarea--warning');
  }
});

const formInputs = [...messageForm.elements]
  .filter(formInput => formInput.tagName !== 'BUTTON' && formInput.type !== 'submit');

messageForm.addEventListener('input', () => {
  const isValid = formInputs.every(formElem => formElem.value.length >= 10);
  btnSubmit.disabled = !isValid;
});