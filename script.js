//Arithmetic operations
function add(arg1, arg2){
    arg1 = parseInt(arg1)
    arg2 = parseInt(arg2)
    return (arg1 + arg2)
};

function subtract(arg1, arg2){
    arg1 = parseInt(arg1)
    arg2 = parseInt(arg2)
    return arg1 - arg2
};

function multiply(arg1, arg2){
    arg1 = parseInt(arg1)
    arg2 = parseInt(arg2)
    return arg1 * arg2
};

function divide(arg1, arg2){
    arg1 = parseInt(arg1)
    arg2 = parseInt(arg2)
    return arg1 / arg2
};
let results;
function operate(operater,number1,number2){
    switch (operater) {
        case '+':
            results = add(number1, number2);
            
        break;
        case '-':
            results = subtract(number1, number2);
            
        break;
        case '×':
            results = multiply(number1, number2);
            
        break;
        case '÷':
            results = divide(number1, number2);
            
        break;
        default : 
        console.log("Sorry no value");
    }

    return results
}


//Calculator screen display declaration and variables

let displayValueBottom = [];
let displayValueTop = [];
let memStoredValue
let storeOperation = [];
let storeOperationStatus = false
let screenBottom = document.querySelector('#screenDisplayBottom');
let screenTop = document.querySelector('#screenDisplayTop');
let operatorClickStatus = false;
let operatorClickStatusPast = false;
let equalClickStatus = false;
//Numerical & Operation button click feature (test)
let testClick = document.querySelectorAll('.calculatorBtn').forEach(testClick =>
testClick.addEventListener('click',(z)=>{
    console.log(z.target);
    console.log(z);
    console.log(z.target.value);
    /*screenBottom.textContent = z.target.value
    displayValueBottom.push(z.target.value);
    screenBottom.textContent =  displayValueBottom.join(' ');*/

    if (screenBottom.textContent == []){
        screenBottom.textContent = z.target.value
        displayValueBottom = screenBottom.textContent
    } else if (screenBottom.textContent != [] && operatorClickStatus == false && equalClickStatus == false){
        screenBottom.textContent += z.target.value
        displayValueBottom = screenBottom.textContent
    } else if (screenBottom.textContent != [] && operatorClickStatus == true){
        screenBottom.textContent = []
        screenTop.textContent =  displayValueBottom + " " + storeOperation;
        displayValueTop = displayValueBottom;
        displayValueBottom = [];
        screenBottom.textContent += z.target.value 
        displayValueBottom = screenBottom.textContent;
        operatorClickStatus = false; 
        operatorClickStatusPast = true;
    } else if (screenBottom.textContent != [] && screenTop.textContent != [] && operatorClickStatusPast == true){
        screenBottom.textContent = operate(storeOperation, displayValueTop, displayValueBottom);
        screenTop.textContent = displayValueTop + " " + storeOperation + " " + displayValueBottom;
        operatorClickStatus = false;
        displayValueTop = displayValueTop;
        memStoredValue = screenBottom.textContent;
        displayValueBottom = screenBottom.textContent
        console.log("equal button was succesfully clicked");
        operatorClickStatusPast = false;
        storeOperation = [];
    }
    

    /* if (screenBottom.textContent != [] && equalClickStatus == true){
        screenBottom.textContent = z.target.value
        displayValueBottom = screenBottom.textContent
        equalClickStatus = false;
    }else if (screenBottom.textContent == [] || operatorClickStatus == false){
        screenBottom.textContent += z.target.value
        displayValueBottom = screenBottom.textContent;
    } else if (operatorClickStatus == true){
        screenBottom.textContent = []
        screenTop.textContent =  displayValueBottom;
        displayValueTop = displayValueBottom;
        displayValueBottom = [];
        screenBottom.textContent += z.target.value
        displayValueBottom = screenBottom.textContent;
        operatorClickStatus = true; 
    }
    if (screenBottom.textContent != [] && equalClickStatus == false && screenTop.textContent != [] && operatorClickStatus == true ){
        screenBottom.textContent = operate(storeOperation, displayValueTop, displayValueBottom);
        screenTop.textContent = displayValueTop + " " + storeOperation + " " + displayValueBottom;
        operatorClickStatus = false;
        displayValueTop = displayValueTop;
        memStoredValue = screenBottom.textContent;
    }
    */
}));

let clearClick = document.querySelector('#calculatorBtnClear').addEventListener("click", ()=>{
displayValueBottom = [];
displayValueTop = [];   
storeOperation = [];
operatorClickStatus = false;
operatorClickStatusPast = false;
equalClickStatus = false;
storeOperationStatus = false;
screenBottom.textContent = displayValueBottom;
screenTop.textContent = displayValueTop;

})

let operatorBtnClick = document.querySelectorAll('.operator').forEach(operatorBtnClick =>
    operatorBtnClick.addEventListener('click',(e)=>{
        if (operatorClickStatus == true) {
            return alert("clicked operator multiple times")
        }
        console.log(e.target.value + "Operation Test")
        let oldOperation = storeOperation;
        switch (e.target.value){
            case '+':
                storeOperation = '+'
                console.log("switch +")
                operatorClickStatus = true;
                screenBottom.textContent += "+"
                storeOperationStatus = true;
            break 
            case '-':
                storeOperation = '-'
                console.log("switch -")
                operatorClickStatus = true;
                screenBottom.textContent += "-"
                storeOperationStatus = true;
            break 
            case '×':
                storeOperation = '×'
                console.log("switch ×")
                operatorClickStatus = true;
                screenBottom.textContent += "×"
                storeOperationStatus = true;
            break 
            case '÷':
                storeOperation = '÷'
                console.log("switch ÷")
                operatorClickStatus = true;
                screenBottom.textContent += "÷"
                storeOperationStatus = true;
            break 
            default: 
                console.log("switch for operation failed")
        }

        let swapValue;
        if (screenBottom.textContent != [] && screenTop.textContent != [] && operatorClickStatusPast == true){
            swapValue = operate(oldOperation, displayValueTop, displayValueBottom)
            screenBottom.textContent = swapValue +  " " + storeOperation;
            screenTop.textContent = [];
            screenTop.textContent = displayValueTop + " " + oldOperation + " " + displayValueBottom;
            operatorClickStatus = true;
            displayValueTop = displayValueTop;
            memStoredValue = screenBottom.textContent;
            displayValueBottom = swapValue;
            console.log("The past operator has been activated");
            operatorClickStatusPast = false;
            /* storeOperation = []; */  
        }
    })
    );
    
    let equalClick = document.querySelectorAll('.equal').forEach(equalClick =>
        equalClick.addEventListener('click',()=>{
        console.log("equal button was succesfully clicked");
        equalClickStatus = true;
        if (screenBottom.textContent == [] && equalClickStatus == true) {
            alert("Don't crash the calculator with equaling nothing please");
            console.log("SEAGNFISGBO");
            return
         }
        screenBottom.textContent = operate(storeOperation, displayValueTop, displayValueBottom);
        screenTop.textContent = displayValueTop + " " + storeOperation + " " + displayValueBottom + " = " + " ";
        operatorClickStatus = false;
        displayValueTop = displayValueTop;
        memStoredValue = screenBottom.textContent;
        displayValueBottom = [];
        console.log("equal button was succesfully clicked");
        storeOperationStatus = false;
        storeOperation = [];
        }));
 
    
        
    
       