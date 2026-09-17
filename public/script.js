const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const output = document.getElementById("output");

function addition() {
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);
    const result = firstNumber + secondNumber;
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#333333";
    }
}

function subtraction() {
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);
    const result = firstNumber - secondNumber;
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#333333";
    }
}

function multiplication() {
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);
    const result = firstNumber * secondNumber;
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#333333";
    }
}

function division() {
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);
    const result = firstNumber / secondNumber;
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#333333";
    }
}

function power() {
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);
    let result = 1;
    for (let i = 0; i < secondNumber; i++) {
        result = result * firstNumber;
    }
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#333333";
    }
}

function clearCalculator() {
    number1.value = "";
    number2.value = "";
    output.innerHTML = "";
    output.style.color = "#333333";
}