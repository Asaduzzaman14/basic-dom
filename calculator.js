const input = document.getElementById("input");

let number;
let operator;
let result;

document.getElementById("buttons").addEventListener("click", (event) => {
  const data = event.target.innerText;
  console.log(data);

  if (data >= 0 && data < 10) {
    number = data;
    input.value = input.value + data;
  } else if (isNaN(data) && data != "=") {
    operator = data;
    input.value = input.value + data;
  } else if (data == "=") {
    let res = eval(input.value);
    console.log(res);
    input.value = res;
  }
});
