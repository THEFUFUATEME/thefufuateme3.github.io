let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        alert('Invalid input');
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '=') {
        if (key === '=' || key === 'Enter') {
            calculate();
        } else if (key === 'Escape' || key === 'Delete') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});
