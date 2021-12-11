class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }

    updateDisplay() {
        this.currentOperand.innerText = this.currentOperandInDisplay;
    }

    selectedOperation(operation) {

    }

    appendNumber(number) {
        if(number === ',' && this.currentOperandInDisplay.includes(',')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    clear() {
        this.currentOperandInDisplay = '';
        this.previousOperandInDisplay = '';
        this.operation = undefined;
    }
}

const calculator = new Calculator(previousOperand, currentOperand);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button);
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

const previousOperand = document.querySelector('[data-previousOperand]');
const currentOperand = document.querySelector('[data-currentOperand]');
const equalButton = document.querySelector('[data-equal]');
const delteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const operationButton = document.querySelectorAll('[data-operation]');
const numberButton = document.querySelectorAll('[data-number]');
