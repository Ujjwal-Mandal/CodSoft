let expression = '';
const display = document.getElementById('display');

function appendCharacter(char) {
    expression += char;
    display.value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function clearLastCharacter() {
    expression = expression.slice(0, -1);
    display.value = expression;
}
