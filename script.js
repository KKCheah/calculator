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
        case 'x':
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
let screenBottom = document.querySelector('#screenDisplayBottom');
let screenTop = document.querySelector('#screenDisplayTop');
let operatorClickStatus = false;
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
    
    if (screenBottom.textContent != [] && equalClickStatus == true){
    screenBottom.textContent = z.target.value
    displayValueBottom = screenBottom.textContent
    equalClickStatus = false;}
    else if (screenBottom.textContent == [] || operatorClickStatus == false){
    screenBottom.textContent += z.target.value
    displayValueBottom = screenBottom.textContent;
    } else if (operatorClickStatus == true){
    screenBottom.textContent = []
    screenTop.textContent =  displayValueBottom;
    displayValueTop = displayValueBottom;
    displayValueBottom = [];
    screenBottom.textContent += z.target.value
    displayValueBottom = screenBottom.textContent;
    operatorClickStatus = false;
    }


    
}));

let clearClick = document.querySelector('#calculatorBtnClear').addEventListener("click", ()=>{
displayValueBottom = [];
displayValueTop = [];   
storeOperation = [];
screenBottom.textContent = displayValueBottom;
screenTop.textContent = displayValueTop;

})

let operatorBtnClick = document.querySelectorAll('.operator').forEach(operatorBtnClick =>
    operatorBtnClick.addEventListener('click',(e)=>{
        console.log(e.target.value + "Operation Test")
        switch (e.target.value){
            case '+':
                storeOperation = '+'
                console.log("switch +")
                operatorClickStatus = true;
                screenBottom.textContent += "+"
            break 
            case '-':
                storeOperation = '-'
                console.log("switch -")
                operatorClickStatus = true;
                screenBottom.textContent += "-"
            break 
            case 'x':
                storeOperation = 'x'
                console.log("switch x")
                operatorClickStatus = true;
                screenBottom.textContent += "x"
            break 
            case '÷':
                storeOperation = '÷'
                console.log("switch /")
                operatorClickStatus = true;
                screenBottom.textContent += "/"
            break 
            default: 
                console.log("switch for operation failed")
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
        screenTop.textContent = displayValueTop + " " + storeOperation + " " + displayValueBottom;
        operatorClickStatus = false;
        displayValueTop = displayValueTop;
        memStoredValue = screenBottom.textContent;
        displayValueBottom = [];
        console.log("equal button was succesfully clicked");
        
        }));
 
    
        
    
       