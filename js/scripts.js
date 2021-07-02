//business logic:
/*
*/
function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function modulo(number1, number2) {
  return number1 % number2;
}

// user interface logics:

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const input1 = parseInt($("#input1").val());
    const input2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result = ""
    if (operator === "add") {
      result = add(input1, input2);
    } else if (operator === "subtract") {
      result = subtract(input1, input2);
    } else if (operator === "multiply") {
      result = multiply(input1, input2);
    } else if (operator === "divide") {
      result = divide(input1, input2);
    } else if (operator === "modulo") {
      result = modulo(input1, input2);
    }
    $("#output").text(result);
  });
});