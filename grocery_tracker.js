function groceryTracker(amount1, amount2, amount3) {
  // Convert values to numbers and sum them
  const total = Number(amount1) + Number(amount2) + Number(amount3);
  return total;
}

function calculateTotal() {
  // Get input values
  const grocery1 = document.getElementById('grocery1').value;
  const grocery2 = document.getElementById('grocery2').value;
  const grocery3 = document.getElementById('grocery3').value;

  // Calculate total using the function
  const totalAmount = groceryTracker(grocery1, grocery2, grocery3);

  // Display the result
  document.getElementById('totalDisplay').innerText = `Total Grocery Amount: $${totalAmount.toFixed(2)}`;
}