// import greetingMessage from './test-import.js';

// function init() {
//   console.log('Start App');
//   greetingMessage('Team Timer App');
// }

// init();

const onSubmit = (event) => {
  debugger;
  event.preventDefault();
  console.log(event)
}

document.querySelector('#js-form').addEventListener('submit', onSubmit)