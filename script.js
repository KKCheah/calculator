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

let displayValueBottom = []
let displayValueTop = []
let storedValue = []
let storeOperation = [];
let screenBottom = document.querySelector('#screenDisplayBottom');
let screenTop = document.querySelector('#screenDisplayTop');
let operatorClickStatus = false;

//Numerical & Operation button click feature (test)
let testClick = document.querySelectorAll('.calculatorBtn').forEach(testClick =>
testClick.addEventListener('click',(z)=>{
    console.log(z.target);
    console.log(z);
    console.log(z.target.value);
    /*screenBottom.textContent = z.target.value
    displayValueBottom.push(z.target.value);
    screenBottom.textContent =  displayValueBottom.join(' ');*/

    if (displayValueBottom == [] || operatorClickStatus == false){
    screenBottom.textContent = z.target.value
    displayValueBottom.push(z.target.value);
    screenBottom.textContent =  displayValueBottom.join(' ');
    } else if (operatorClickStatus == true){
    displayValueBottom = [];
    screenTop.textContent =  screenBottom.textContent;
    displayValueBottom.push(z.target.value);
    screenBottom.textContent =  displayValueBottom.join(' ')
    operatorClickStatus = false
    }


    
}));

let clearClick = document.querySelector('#calculatorBtnClear').addEventListener("click", ()=>{
    displayValueBottom = [];
    screenBottom.textContent = displayValueBottom

})

let operatorBtnClick = document.querySelectorAll('.operator').forEach(operatorBtnClick =>
    operatorBtnClick.addEventListener('click',(e)=>{
        console.log(e.target.value + "Operation Test")
        switch (e.target.value){
            case '+':
            storeOperation = 'add'
            console.log("switch +")
            operatorClickStatus = true;
            break 
            case '-':
            storeOperation = 'subtract'
            console.log("switch -")
            operatorClickStatus = true;
            break 
            case 'x':
            storeOperation = 'multiply'
            console.log("switch x")
            operatorClickStatus = true;
            break 
            case '/':
            storeOperation = 'divide'
            console.log("switch /")
            operatorClickStatus = true;
            break 
            default: 
            console.log("switch for operation failed")
        }
        
    })
    );









    