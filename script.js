const previousText = document.querySelector("[data-previous-operand");
const currentText = document.querySelector("[data-current-operand]");
const deleteBtn = document.querySelector("[data-delete]");
const output = document.querySelector("[data-output]");
const clearBtn = document.querySelector("[data-all-clear]");
const operands = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operator]");

let prevOperand = previousText.innerText;
let currentOperand = currentText.innerText;
let operation;

function clearAll() {
    currentOperand = "";
    prevOperand = "";
    operation = undefined;
}

function deleteOp() {
    currentOperand = currentOperand.toString().slice(0, -1);
}

function addNum(num) {
    if (num === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + num.toString();
}


function operationSelection(operate){
    if(currentText === "") return;
    if(previousText !== ""){
        calcOperation();
    }
    operation = operate;
    prevOperand = currentOperand;
    currentOperand = ""
}

function calcOperation() {
    let result;
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = Number(prev) + Number(currentOperand);
            break;
        case "-":
            result = prev - currentOperand;
            break;
        case "x":
            result = prev * currentOperand;
            break;
        case "/":
            result = prev / currentOperand;
            break;

            default:
                return;
    }

    currentOperand = result;
    operation = undefined;
    prevOperand = "";
    previousText.innerText = "";
}

function displayNum(){
    currentText.innerText = currentOperand.toLocaleString("en");
    if(operation !== undefined){
        previousText.innerText = `${prevOperand} ${operation.toString('en')}`;
    }else{
        previousText.innerText = prevOperand;
    }
}

clearBtn.addEventListener("click", ()=>{
    clearAll();
    displayNum();
})

deleteBtn.addEventListener("click", ()=>{
    deleteOp();
    displayNum();
})

operands.forEach((operand)=>{
    operand.addEventListener("click", ()=>{
        addNum(operand.innerText);
        displayNum();
    })
})

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        operationSelection(operator.innerText);
        displayNum()
    })
})

output.addEventListener("click", ()=>{
    calcOperation();
    displayNum();
})