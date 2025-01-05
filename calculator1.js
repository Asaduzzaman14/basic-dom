const input = document.getElementById("input");

const appendNumber = (number) => {
  input.value = input.value + number;
};

const appendOperator = (operator) => {
  console.log(operator);
  input.value = input.value + operator;
};

const clearinput = () => {
  input.value = "";
  console.log(input.value);
};

const calculate = () => {
  console.log(input.value);

  const result = eval(input.value);
  console.log(result);
  input.value = result;
};
