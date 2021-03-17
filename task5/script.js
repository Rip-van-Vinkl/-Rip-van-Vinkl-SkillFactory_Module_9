inputText.oninput = function() {
    duplicateField.innerHTML = inputText.value;
  };

const button = document.querySelector('#buttonText');
button.addEventListener('click', () => {
    console.log(inputText.value);
    duplicateField.textContent = "";
    inputText.value = "";
  })




/*
    duplicateField.innerHTML = "";
  })
тоже, кстати, работает
а как при помощи preventDefault() удалить из поля ввода я не успел придумать
*/