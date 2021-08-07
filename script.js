let arg1 = 10;
let arg2 = 2;

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
    