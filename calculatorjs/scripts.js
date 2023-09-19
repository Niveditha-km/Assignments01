function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

console.log(add(5, 3));      
console.log(subtract(8, 2)); 
console.log(multiply(4, 7)); 
console.log(divide(10, 2));  
