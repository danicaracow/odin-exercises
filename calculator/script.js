let num1;
let num2;
let operator;


function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return substract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

console.log(operate(5,2,"+"));
console.log(operate(10, 5,"-"));
console.log(operate(5, 4,"*"));
console.log(operate(20, 2,"/"));