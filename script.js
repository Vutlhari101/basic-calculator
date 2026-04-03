//DOM elements
const display = document.querySelector(".output");
const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operand");
const equals = document.querySelector(".equals");

//member variabkes
let num1 = "";
let num2 = "";
let result = "";
let operation = "";
let numBuilder = "";

numbers.forEach((num) =>{
    num.addEventListener("click", e => {
        display.textContent = numBuilder += num.textContent;
    });
});

operations.forEach((oper) => {
    oper.addEventListener("click", e => {
        if(display.textContent.match(/[+*/*]/)){
            console.log("matches")
            return;
        }
        num1 = Number.parseFloat(display.textContent);
        operation = oper.textContent;
        numBuilder = "";
        display.textContent = operation;
    })
});

equals.addEventListener("click", e => {
    num2 = parseFloat(display.textContent);
    result = operate(num1, num2, operation);
    display.textContent = result;
    numBuilder = 0;
});

//methods
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        display.textContent = "NaN: Cannot divide by 0";
        return NaN;
    }
    return a / b
}

function operate(a, b, operand){
    switch (operand) {
        case "+":{
            return add(a, b);
            break;
        }
        case "-":{
            return subtract(a, b);
            break;
        }
        case "/":{
            return divide(a, b);
            break;
        }
        case "*":{
            return multiply(a, b);
            break;
        }
        
        default:
            break;
    }
}

console.log(`num1=${num1}: num2=${num2}: result=${result}: operation=${operation}`)