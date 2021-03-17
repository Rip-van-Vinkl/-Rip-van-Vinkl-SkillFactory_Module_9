document.querySelector('#consoleLog').onclick = function() {
    alert('Этот метод выводит сообщение в консоль');
  }

  document.querySelector('#alert').onclick = function() {
    alert('Этот метод выводит сообщение в диалоговое окно с кнопкой OK');
  }

  const promptt = document.querySelector('#prompt');
  promptt.addEventListener('click', () => {
    alert('Этот метод выводит диалоговое окно с запросом на ввод текста');
  })



consoleLogText.onclick = function() {
  console.log('Щелчок достиг цели');
}

alertText.onclick = function() {
  alert('ПТИЧКА!!!');
}

promptText.onclick = function() {
  const Vecher = prompt('Название первого сборника стихов Ахматовой?');
  if (Vecher == 'Вечер') {
    alert('Точно!');
  } else if (Vecher == 'вечер') {
    alert('точно!');
  } else {
    alert('Увы, но нет');
  }
}

