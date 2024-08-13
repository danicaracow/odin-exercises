let num1 = null;
let num2 = null;
let currentNum = "";
let operator = "";
let result = "";
const operators = ["+", "-", "x", "/"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const regex = /^((\-)?\d+(\.\d+)?)([+\-x\/])(\d+(\.\d+)?)$/;
let isOperator = false;
let isValidOperation = false;
let isError = false;


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

function displayResult(text){
    screen.textContent = text;
}

function displayOperation(event){
    screen.textContent += event.target.textContent;
}

function addCurrentNum(char){
    currentNum += char;
}

function getResult(){
    if(num2===0 && operator === "/"){
        isError = true;
        displayResult("ERROR");
        return;
    }
    result = parseFloat(operate(num1, num2, operator).toFixed(2));
    currentNum = result;
    displayResult(currentNum);
    num1 = null;
    num2 = null;
    operator = "";
}

function parseOperation(operation){
    let match = operation.match(regex);
    
    if (match) {
        console.log(match);
        num1 = parseFloat(match[1]);  // First number
        
        if(match[4] === "x") operator = "*"; //Operator
        else operator = match[4];

        num2 = parseFloat(match[5]);  // Second number

        isValidOperation = true;
    }
    else isValidOperation = false;
}

function cleanData(){
    screen.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    isOperator = false;
    isError = false;
}

const container = document.querySelector("#container");
const screen = document.querySelector("#screen");


container.addEventListener("click", (event) => {
    //If container is clicked do nothing
    if(event.target.id === "container"){
        return;
    }

    const input = event.target.textContent;
    if(/[0-9]/.test(input)){
        if(screen.textContent==="ERROR"){
            cleanData();
        }
        displayOperation(event);
        parseOperation(screen.textContent);
    } 
    else if(input === "AC"){
        cleanData();
    } 
    else if(input === "="){
        if(isValidOperation){
            getResult();
            isOperator = false;
            isValidOperation = false;
        }
    }
    else if(operators.includes(input)){
        if(isError){
            return;
        }
        if(!isOperator){
            displayOperation(event);
            parseOperation(screen.textContent);
            isOperator = true;
        }
        else{
            if(num2 !== null){
                getResult();
                displayOperation(event);
            }
        }
    }
});