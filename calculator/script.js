let num1 = null;
let num2 = null;
let currentNum = "";
let operator = "";
let result = "";
const operators = ["+", "-", "x", "/"];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const regex = /^(\d+)([+\-x\/])(\d+)$/;
let isOperator = false;


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
    console.log(num1);
    console.log(num2);
    console.log(operator);
    result = operate(num1, num2, operator);
    // num1 = result;
    currentNum = result;
    displayResult(currentNum);
    num1 = null;
    num2 = null;
    operator = "";
    // console.log(result);
}

function setCurrentNum(){
    if(num1 === null && num2 === null){
        num1 = currentNum;
        // displayOperation(event);
        // console.log("hey!");
    }
    else if(num1 !== null && num2 === null){
        num2 = currentNum;
    }
    else if(num1 !== null && num2 !== null){
        getResult();
    }
    currentNum = "";
}

function parseOperation(operation){
    let match = operation.match(regex);
    console.log(match);
    if (match) {
        num1 = parseInt(match[1], 10);  // First number
        
        if(match[2] === "x") operator = "*"; //Operator
        else operator = match[2];

        num2 = parseInt(match[3], 10);  // Second number
    }
    // array = [...operation];
    // // console.log(array);
    // array.forEach(char => {
    //     if(digits.includes(char)){
    //         addCurrentNum(char);
    //     }
    //     if(operators.includes(char)){
    //         if(operator === ""){
    //             setCurrentNum();
    //             switch(char){
    //             case "+":
    //                 operator = "+";
    //                 break;
    //             case "-":
    //                 operator = "-";
    //                 break;
    //             case "x":
    //                 operator = "*";
    //                 break;
    //             case "/":
    //                 operator = "/";
    //                 break;
    //             }
    //         }
    //         //If a second operator is detected
    //         else{
    //             getResult();
    //             // screen.textContent += char;
    //         }
    //     }
    // });
    
}

const container = document.querySelector("#container");
const screen = document.querySelector("#screen");


container.addEventListener("click", (event) => {
    const input = event.target.textContent;
    if(/[0-9]/.test(input)){
        // addCurrentNum(event);
        displayOperation(event);
        parseOperation(screen.textContent);
    } 
    else if(input === "AC"){
        screen.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
    } 
    else if(input === "="){
        getResult();
        isOperator = false;
    }
    else if(operators.includes(input)){
        if(!isOperator){
            displayOperation(event);
            parseOperation(screen.textContent);
            isOperator = true;
        }
        else{
            console.log("doble operator!");
        }
        

    }

    // console.log("result");
    
});


















// container.addEventListener("click", (event) => {
//     const input = event.target.textContent;
//     if(/[0-9]/.test(input)){
//         addCurrentNum(event);
//         displayOperation(event);
//     } 
//     else if(input === "AC"){
//         screen.textContent = "";
//         num1 = "";
//         num2 = "";
//         operator = "";
//     } 
//     else if(input === "="){
//         getResult();
//     }
//     else if(input === "+" || input === "-" || input === "x" || input === "/"){
//         if(num1 !== null && num2 !== null){
//             setCurrentNum();
//             getResult();
//             displayOperation(input);
            
//         }
//         else{
//             setCurrentNum();
//             // displayOperation(event);
            
//         }
//     }
//     // console.log("result");
    
// });



// console.log(typeof(screen.textContent));