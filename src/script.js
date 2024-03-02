// Get references to the necessary HTML elements
const billInput = document.querySelector('#billAmount');
const tipSelect = document.querySelector('#tipPercentage');
const peopleInput = document.querySelector('#numberOfPeople');
const tipAmountSpan = document.querySelector('#tipAmount');
const totalAmountSpan = document.querySelector('#totalAmount');
const resetButton = document.querySelector('#resetButton');

// Function to calculate tip and total amounts
function calculateAmounts() {
    // Retrieve input values
    const billAmount = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipSelect.value) / 100;
    const numberOfPeople = parseInt(peopleInput.value);

    // Calculate tip amount per person
    const tipAmount = (billAmount * tipPercentage) / numberOfPeople;
    // Calculate total amount per person
    const totalAmount = (billAmount + (billAmount * tipPercentage)) / numberOfPeople;

    // Display the calculated amounts
    tipAmountSpan.textContent = '$' + tipAmount.toFixed(2);
    totalAmountSpan.textContent = '$' + totalAmount.toFixed(2);
}

// Event listeners for input and select elements
billInput.addEventListener('input', calculateAmounts);
tipSelect.addEventListener('change', calculateAmounts);
peopleInput.addEventListener('input', calculateAmounts);

// Reset button event listener
resetButton.addEventListener('click', function() {
    // Clear input fields
    billInput.value = '';
    tipSelect.value = '15';
    peopleInput.value = '';
    // Reset displayed amounts
    tipAmountSpan.textContent = '$0.00';
    totalAmountSpan.textContent = '$0.00';
});
