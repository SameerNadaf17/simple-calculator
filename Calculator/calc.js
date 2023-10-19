function appendToDisplay(value) {
    document.getElementById('display').value += value;

}

function clearLastDigit() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue); // Using eval for simplicity, but be cautious in real applications
    document.getElementById('display').value = result;
}