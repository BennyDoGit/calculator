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
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

const previousOperand = document.querySelectorAll('[data-previousOperand]');
const currentOperand = document.querySelectorAll('[data-currentOperand]');
const equalButton = document.querySelectorAll('[data-equal]');
const delteButton = document.querySelectorAll('[data-delete]');
const clearButton = document.querySelectorAll('[data-clear]');
const operationButton = document.querySelectorAll('[data-operation]');
const numberButton = document.querySelectorAll('[data-number]');
