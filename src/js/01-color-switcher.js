const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
let timerId = null;


startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
    startBtn.removeEventListener('click', onStartBtnClick)
    timerId = setInterval(() => {
      function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }
        const color = getRandomHexColor()
    document.body.style.backgroundColor =  color  
    }, 1000); 
}
   

function onStopBtnClick() {
    startBtn.addEventListener('click', onStartBtnClick)
  clearInterval(timerId);
}

  






