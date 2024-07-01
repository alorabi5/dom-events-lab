/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let opResult, num1, num2, opType;
/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/

function init(){
    opResult = 0;
    num1 = 0;
    num2 = 0;
    opType = '';
    display.textContent = '0'
}

function resutl(num1, num2, opType){
    switch(opType){
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        case '+':
            return Number(num1) + Number(num2);
        case '-':
            return num1 - num2;
        default:
            return;
    }
}

init();

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);
    const input = event.target.innerText;
    // Example
    if (event.target.classList.contains('number')) {
        
        if(!opType){
            
            num1 += event.target.innerText;
            display.textContent = `${num1}`;
            
        }
        else {
            num2 += event.target.innerText;
            display.textContent = `${num1} ${opType} ${num2}`;
            
        }
    }
  
    // Example
    else if (input === 'C') {
      // Do something with this operator
        init();
    }
    else if (input === '=') {
        // Do something with this operator
        opResult = resutl(num1, num2, opType);
        num1 = opResult;
        num2 = 0;
        opType = '';
        display.textContent = ` ${opResult} `;
    }
    else if(input === '+' || input === '*' || input === '/' || input === '-'){
        opType = event.target.innerText;
        display.textContent = `${num1} ${opType} `;
    }
  });