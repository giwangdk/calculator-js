const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const result = document.querySelector('.result');
const numbers = keys.querySelectorAll('.number');
const operators = keys.querySelectorAll('.operator');
const equal = keys.querySelector('.equal');
const clearAll = keys.querySelector('.clearAll');
const clear = keys.querySelector('.clear');

let num1 = "";
let num2 = "";
let output = "";
let lastOperation = "";
let haveDot = false;



numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        num2 += e.target.innerText;
        display2.innerText = num2;
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (!num2) return;
        haveDot = false;
        const operatorName = e.target.innerText;
        if (num1 && num2 && lastOperation) {
            mathOperation();
        } else {
            output = parseFloat(num2);
        }
        clearCal(operatorName);
        lastOperation = operatorName;
        console.log(output);
    })
})

function clearCal(name = ""){
    num1 += num2 + "" + name + "";
    display1.innerText = num1;
    display2.innerText = "";
    num2 = "";
    result.innerText = output
}

function mathOperation() {
    if (lastOperation === "*") {
        output = parseFloat(output) * parseFloat(num2);
    } else if (lastOperation === "+") {
        output = parseFloat(output) + parseFloat(num2);
    } else if (lastOperation === "-") {
        output = parseFloat(output) - parseFloat(num2);
    } else if (lastOperation === "/") {
        output = parseFloat(output) / parseFloat(num2);
    } else if (lastOperation === "%") {
        output = parseFloat(output) % parseFloat(num2);
    }
}

equal.addEventListener("click", () => {
    if (!num1 || !num2) return;
    haveDot = false;
    mathOperation();
    clearCal();

})

clearAll.addEventListener("click", () => {
    num1 = "";
    num1 = "";
    display1.innerText = "";
    display2.innerText = "";
    output = "";
    result.innerText = "";
});

clear.addEventListener("click", () => {
    display2.innerText = "";
    num2 = "";
});

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButtonEl(e.key);
        // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("x");
        // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    }
    // console.log(e.key)
});

function clickButtonEl(key) {
    numbers.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}

function clickOperation(key) {
    operators.forEach((operator) => {
        if (operator.innerText === key) {
            operator.click();
        }
    });
}

function clickEqual() {
    equal.click();
}