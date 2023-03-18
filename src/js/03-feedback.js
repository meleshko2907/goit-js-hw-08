import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const MY_KEY = 'feedback-form-state';

updateOutput();

form.addEventListener(
  'input',
  throttle(function saveData() {
    const data = {
      email: this.email.value,
      message: this.message.value,
    };
    const data1 = JSON.stringify(data);

    localStorage.setItem(MY_KEY, data1);
  }, 500)
);

function updateOutput() {
  try {
    const saveData = localStorage.getItem(MY_KEY);

    if (saveData === null) {
      return undefined;
    } else {
      const parseData = JSON.parse(saveData);
      email.value = parseData.email;
      message.value = parseData.message;
    }
  } catch (error) {
    console.error('Get state error', error.message);
  }
}

form.addEventListener('submit', fillingField);

function fillingField(event) {
  event.preventDefault();
  console.dir({ email: email.value, message: message.value });

  localStorage.removeItem(MY_KEY);
  form.reset();
}
