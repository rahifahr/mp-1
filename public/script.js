function addition() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 + number2;

    document.getElementById("output").innerHTML = result;

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#333333";
    }
}


function subtraction() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 - number2;

    document.getElementById("output").innerHTML = result;

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#333333";
    }
}


function multiplication() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 * number2;

    document.getElementById("output").innerHTML = result;

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#333333";
    }
}


function division() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 / number2;

    document.getElementById("output").innerHTML = result;

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#333333";
    }
}


function power() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = 1;

    for (let i = 0; i < number2; i++) {
        result = result * number1;
    }

    document.getElementById("output").innerHTML = result;

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#333333";
    }
}


function clearCalculator() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "#333333";
}