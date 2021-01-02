'use strict';

const userName = document.querySelector('.feedback__input-name'),
  userEmail = document.querySelector('.feedback__input-email'),
  userComment = document.querySelector('.feedback__textarea'),
  like = document.querySelector('.like-icon'),
  btnSubmitFeedback = document.querySelector('.feedback__submit'),
  feedbbacks = document.querySelector('.feedbacks'),
  feedbackForm = document.querySelector('.feedback__form');

let likeCount = document.querySelector('.like__count');


const fbForm = [...feedbackForm.elements]
  .filter(formInput => formInput.tagName !== 'BUTTON' && formInput.type !== 'submit');

like.addEventListener('click', () => {
  if (like.matches('.like-icon--active')) {
    like.classList.remove('like-icon--active');
    likeCount.textContent--;
  } else {
    like.classList.add('like-icon--active');
    likeCount.textContent++;
  }
});

userComment.addEventListener('input', () => {
  if (userComment.value.length >= 10 && userComment.value.length <= 200) {
    userComment.classList.remove('feedback__textarea--warning');
  } else {
    userComment.classList.add('feedback__textarea--warning');
  }
});

feedbackForm.addEventListener('input', () => {
  const isValid = fbForm.every(formElem => formElem.value.length >= 10);
  btnSubmitFeedback.disabled = !isValid;
});

btnSubmitFeedback.addEventListener('click', (e) => {
  e.preventDefault();

  feedbbacks.insertAdjacentHTML('beforeend', `
  <div class="feedbacks__item">
    <div class="feedbacks__body">
      <img class="feedbacks__avatar" src="./ico/avatar-icon.webp" alt="avatar logo">
      <h4 class="feedbacks__full-name">${userName.value}</h4>
    </div>
    <p class="feedbacks__comment">${userComment.value}</p>
  </div>
  `);

  userName.value = '';
  userEmail.value = '';
  userComment.value = '';

  btnSubmitFeedback.disabled = true;
});