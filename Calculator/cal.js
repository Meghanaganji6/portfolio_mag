const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
