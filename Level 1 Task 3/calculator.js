let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
    } catch {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
