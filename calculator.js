const input = document.getElementById("input");
let currentNumber = "";
let previousNumber = "";
let operator = "";

// Add event listener to the buttons container
document.getElementById("buttons").addEventListener("click", (event) => {
  const data = event.target.innerText;

  if (!isNaN(data) || data === ".") {
    handleNumber(data);
  } else if (data === "C") {
    clearInput();
  } else if (data === "=") {
    calculateResult();
  } else {
    handleOperator(data);
  }
});

function handleNumber(num) {
  if (num === "." && currentNumber.includes(".")) {
    return;
  }
  currentNumber += num;
  updateInputDisplay(currentNumber);
}

function handleOperator(op) {
  if (currentNumber === "") return;

  if (previousNumber && currentNumber && operator) {
    calculateResult();
  }

  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
  updateInputDisplay(previousNumber + " " + operator);
}

function calculateResult() {
  if (!previousNumber || !currentNumber || !operator) return;

  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      return;
  }

  updateInputDisplay(result);
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
}

function clearInput() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateInputDisplay("");
}

function updateInputDisplay(value) {
  input.value = value;
}
