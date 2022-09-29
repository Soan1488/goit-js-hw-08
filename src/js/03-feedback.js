import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
let feedbackFormState = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSumbit);

function onFormSumbit(e) {
  e.preventDefault();
  console.log('Email:', refs.email.value);
  console.log('Message:', refs.textarea.value);
  localStorage.removeItem('feedback-form-state');
  refs.email.value = '';
  refs.textarea.value = '';
}

function onFormInput(e) {
  if (e.target.nodeName === 'INPUT') {
    feedbackFormState.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    feedbackFormState.message = e.target.value;
  }
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
populateEmail();

function populateEmail() {
  const savedValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedValue) {
    refs.email.value = savedValue.email;
  }
  if (savedValue) {
    refs.textarea.value = savedValue.message;
  }
}
