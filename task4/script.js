
const replaceText = document.querySelector('#text');

replaceText.addEventListener('click', () => {
    document.querySelector('#text').textContent = prompt('Текст изменится на тот, что ты введёшь');
})

replaceText.addEventListener('click', (evt) => {
    evt.preventDefault();
})





/*
const replaceText = document.querySelector('#text');

replaceText.addEventListener('click', () => {
  const newText = prompt('Введи что-нибудь');
  document.querySelector('#text').textContent = newText;
})


const replaceText = document.querySelector('#text');

replaceText.addEventListener('click', () => {
  document.querySelector('#text').textContent = prompt('Введи что-нибудь');
})


document.querySelector('#text').onclick = function() {
    document.querySelector('#text').textContent = prompt('Что напишешь, то и получишь');
}
*/