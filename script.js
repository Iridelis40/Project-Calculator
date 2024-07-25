const display = document.querySelector("#display");

const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
const timesBtn = document.querySelector("#timesBtn");
const divideBtn = document.querySelector("#divideBtn");

let operator = "";


plusBtn.addEventListener("click", ()=> {
    return operator = "+";
})
minusBtn.addEventListener("click", ()=> {
    return operator = "-";
})
timesBtn.addEventListener("click", ()=> {
    return operator = "-";
})
divideBtn.addEventListener("click", ()=> {
    return operator = "/";
})



function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    return operator = "";
}

function calculate() {
   let operationString = display.value;
   console.log(operationString);
   let Arr = operationString.split(/[+-/*]/);
   console.log(Arr);
   let result = "";
    if(operator == "+") {
        result = Number(Arr[0]) + Number(Arr[1]);
        display.value = result;
    } else if(operator == "-") {
        result = Number(Arr[0]) - Number(Arr[1]);
        display.value = result;
    } else if(operator == "*") {
        result = Number(Arr[0]) * Number(Arr[1]);
        display.value = result;
    } else if(operator == "/") {
        result = Number(Arr[0]) / Number(Arr[1]);
        display.value = result;
    }

} 