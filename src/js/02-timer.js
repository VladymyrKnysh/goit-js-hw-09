import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  spanDays: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true;

const CURRENT_DAY = new Date();
let SELECTED_DAY = new Date();
let timeDiffence = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < CURRENT_DAY) {
      Notiflix.Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
      Notiflix.Notify.success('This is correct time');
      SELECTED_DAY = selectedDates[0];
    }
  },
};

flatpickr(refs.input, options);
require('flatpickr/dist/themes/confetti.css');

refs.btnStart.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  // console.log(timeDiffence);
  refs.btnStart.disabled = true;
  timerId = setInterval(() => {
    timeDiffence = SELECTED_DAY - Date.now();
    let convertTime = convertMs(timeDiffence);
    if (timeDiffence <= 0) {
      Notiflix.Notify.info('Time is over! Please reload the page');
      clearInterval(timerId);
    } else {
      makeTimerInterface(convertTime);
      refs.input.disabled = true;
    }
  }, 1000);
  // console.log(convertMs(timeDiffence));
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function makeTimerInterface(converTime) {
  refs.spanDays.textContent = addLeadingZero(converTime.days);
  refs.spanHours.textContent = addLeadingZero(converTime.hours);
  refs.spanMinutes.textContent = addLeadingZero(converTime.minutes);
  refs.spanSeconds.textContent = addLeadingZero(converTime.seconds);
}



