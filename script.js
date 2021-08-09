//Arithmetic operations
function add(arg1, arg2){
return console.log(arg1 + arg2)
};

function subtract(arg1, arg2){
    return console.log(arg1 - arg2)
};

function multiply(arg1, arg2){
    return console.log(arg1 * arg2)
};

function divide(arg1, arg2){
    return console.log(arg1 / arg2)
};

function operate(operater,number1,number2){
    switch (operater) {
        case 'add':
            add(number1, number2);
        break;
        case 'subtract':
            subtract(number1, number2);
        break;
        case 'multiply':
            multiply(number1, number2);
        break;
        case 'divide':
            divide(number1, number2);
        break;
        default : 
        console.log("Sorry no value");
    }
}


//Calculator screen display declaration and variables

let displayValue = []
let storedValue = []
let screen = document.querySelector('#screenDisplayBottom');


//Numerical & Operation button click feature (test)
let testClick = document.querySelectorAll('.calculatorBtn').forEach(testClick =>
testClick.addEventListener('click',(z)=>{
    console.log(z.target);
    console.log(z);
    console.log(z.target.value);
    screen.textContent = z.target.value
    displayValue.push(z.target.value);
   
    screen.textContent =  displayValue.join(' ');
}));

let clearClick = document.querySelector('#calculatorBtnClear').addEventListener("click", ()=>{
    displayValue = [];
    screen.textContent = displayValue
})










    