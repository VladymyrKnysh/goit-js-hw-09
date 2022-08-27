
const formEl = document.querySelector('.form')
const buttonEl = document.querySelector('button')
const amountEl = document.querySelector('input[name = "amount"]')
const delayEl = document.querySelector('input[name = "delay"]')
const stepEl = document.querySelector('input[name = "step"]')


formEl.addEventListener('input', onFormElInput)
formEl.addEventListener('submit', onFormElSubmit)

function onFormElInput(e) {

}

function onFormElSubmit(e) {
  e.preventDefault()
  let counter = 0
  if (counter < amountEl.value) {
    setInterval(() => {
  createPromise(1, delayEl.value)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
})
  })
}
counter +=1
 
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
    if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
},delay)
 })
}



