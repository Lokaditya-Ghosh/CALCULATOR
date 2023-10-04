let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (
      e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (
      e.target.innerHTML == '⬅️') {
      // string = "-1";
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
      //display.innerText = display.innerText.slice(0, -1)
      //    const display = document.getElementById('display');
      // const currentValue = display.value;

      // Remove the last character from the display value
      //display.value = currentValue.slice(0, -1);

    }

    else if (
      e.target.innerHTML == 'AC') {
      string = " ";
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})
