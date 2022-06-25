let num1 = parseInt(prompt("Please enter your first number"))

while (!num1) {
   num1 = parseInt(prompt("Please enter a number"))
}

let operator = prompt("Please enter an arithmetic operator: ('+','-', '*', '/')")
switch (operator) {
   case "+":
      let num2 = parseInt(prompt("Please enter your second number"));
      add(num1, num2);
      break;

   case "-":
      let num3 = parseInt(prompt("Please enter your second number"));
      subtract(num1, num3);
      break;

   case "/":
      let num4 = parseInt(prompt("Please enter your second number"));
      divide(num1, num4);
      break;

   case "*":
      let num5 = parseInt(prompt("Please enter your second number"));
      multiply(num1, num5);
      break;

   default:
      alert("put in a valid operator and try again");

};

function add(x, y) {
   while (!y) {
      y = parseInt(prompt("Please enter a number"))
   }
   alert(x + y)
}

function subtract(x, y) {
   while (!y) {
      y = parseInt(prompt("Please enter a number"))
   }
   alert(x - y)
}

function multiply(x, y) {
   while (!y) {
      y = parseInt(prompt("Please enter a number"))
   }
   alert(x * y)
}

function divide(x, y) {
   while (!y) {
      y = parseInt(prompt("Please enter a number"))
   }
   alert(x / y)
}