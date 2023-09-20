function getNumberInput(id) {
    return parseFloat(document.getElementById(id).value);
}

function add() {
    const num1 = getNumberInput("num1");
    const num2 = getNumberInput("num2");
    const result = num1 + num2;
    document.getElementById("result").textContent = `Result: ${result}`;
}

function subtract() {
    const num1 = getNumberInput("num1");
    const num2 = getNumberInput("num2");
    const result = num1 - num2;
    document.getElementById("result").textContent = `Result: ${result}`;
}

function multiply() {
    const num1 = getNumberInput("num1");
    const num2 = getNumberInput("num2");
    const result = num1 * num2;
    document.getElementById("result").textContent = `Result: ${result}`;
}

function divide() {
    const num1 = getNumberInput("num1");
    const num2 = getNumberInput("num2");
    if (num2 === 0) {
        document.getElementById("result").textContent = "Result: Cannot divide by zero";
    } else {
        const result = num1 / num2;
        document.getElementById("result").textContent = `Result: ${result}`;
    }
}
