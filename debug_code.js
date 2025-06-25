function performOperation() {
    // Get user input from input fields
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    // Try to convert to numbers
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    // Introduce debugger to inspect character input
    if (isNaN(num1) || isNaN(num2)) {
        debugger; // See what kind of characters were entered
        displayResult('❌ Please enter valid numbers (you might have typed a character)');
        return;
    }

    // Perform all operations and get result string
    let result = performAllOperations(num1, num2);

    // Display the result
    displayResult(result);
}

function performAllOperations(a, b) {
    debugger; // Observe which operation runs and how
    let addition = a + b;
    let multiplication = a * b;
    let division = b !== 0 ? (a / b) : '⚠️ Cannot divide by zero';

    return `
        ✅ Inputs: ${a} and ${b} <br>
        ➕ Addition: ${addition} <br>
        ✖️ Multiplication: ${multiplication} <br>
        ➗ Division: ${division}
    `;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result;
}
