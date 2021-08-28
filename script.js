const previousText = document.querySelector("[data-previous-operand");
const currentText = document.querySelector("[data-current-operand]");
const deleteBtn = document.querySelector("[data-delete]");
const output = document.querySelector("[data-output]");
const clearAll = document.querySelector("[data-clear-all]");
const operands = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operator]");

let prevOperand = previousText.innerText;
let currentOperand = currentText.innerText;
let operation;

function clearAll(){
    currentOperand = "";
    prevOperand= "";
    operation= undefined;
}

function delete(){
    currentOperand = currentOperand.toString().slice(0,-1);
}

function addNum(num){
    if(num === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + num.toString();
}

function calcOperation (){
    let result ;
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        
    }
}