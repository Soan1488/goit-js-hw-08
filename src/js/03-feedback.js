import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSumbit);

function onFormSumbit(e) {
  e.preventDefault();
  let values = {
    email: `${refs.email.value}`,
    message: `${refs.textarea.value}`,
  };
  console.log(values);
  localStorage.removeItem('feedback-form-state');
  refs.email.value = '';
  refs.textarea.value = '';
}

function onFormInput(e) {
  let values = {
    email: `${refs.email.value}`,
    message: `${refs.textarea.value}`,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(values));
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
