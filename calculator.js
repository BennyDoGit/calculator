class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }

    updateDisplay() {
        this.currentOperand.innerText = this.currentOperandInDisplay;
        this.previousOperand.innerText = this.previousOperandInDisplay;
    }

    selectedOperation(operation) {
        if(this.currentOperandInDisplay === '') return;
        if(this.previousOperandInDisplay !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperandInDisplay = this.currentOperandInDisplay + operation;
        this.currentOperandInDisplay = '';
    }

    compute() {
        let computation;
        const previous = parseFloat(this.previousOperandInDisplay);
        const current = parseFloat(this.currentOperandInDisplay);

        if(isNaN(previous) || isNaN(current)) return;
        switch(this.operation) {
            case '+': computation = previous + current; break;
            case '-': computation = previous - current; break;
            case '*': computation = previous + current; break;
            case '÷': computation = previous / current; break;
            default: return;
        }

        this.currentOperandInDisplay = computation;
        this.operation = undefined;
        this.previousOperandInDisplay = '';
    }

    appendNumber(number) {
        if(number === ',' && this.currentOperandInDisplay.includes(',')) return;
        this.currentOperandInDisplay = this.currentOperandInDisplay.toString() + number.toString();
    }

    clear() {
        this.currentOperandInDisplay = '';
        this.previousOperandInDisplay = '';
        this.operation = undefined;
    }
}

const previousOperand = document.querySelector('[data-previousOperand]');
const currentOperand = document.querySelector('[data-currentOperand]');
const equalButton = document.querySelector('[data-equal]');
const delteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const operationButton = document.querySelectorAll('[data-operation]');
const numberButton = document.querySelectorAll('[data-number]');

const calculator = new Calculator(previousOperand, currentOperand);

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute();
})

operationButton.forEach(button => {
    button.addEventListener('keyup', (e) =>{
        if(e.keyCode === 13){
            calculator.selectedOperation(button.innerText);
            calculator.updateDisplay();
        }
    })

    button.addEventListener('click', () =>{
        calculator.selectedOperation(button.innerText);
        calculator.updateDisplay();
    })
})