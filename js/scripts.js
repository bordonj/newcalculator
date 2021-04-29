function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

let clickedBtn;
let result ="";
let temp_result = "";
let oper = "";
let num1 = 0;
let num2 = 0;
let finalVal = 0;


$(document).ready(function() {
  const answerInput = document.getElementById("answer");
  $(".numbers").click(function(e1) {
    e1.preventDefault();
    clickedBtn = this.id;
    result += clickedBtn;
    temp_result += clickedBtn;
    answerInput.value = result;
  });
  $(".operator").click(function(e2) {
    e2.preventDefault();
    num1 = parseInt(result);
    temp_result = "";
    clickedBtn = this.id;
    oper = clickedBtn;
    result += clickedBtn;
    answerInput.value = result;
  });
  $(".eq").click(function(e3) {
    e3.preventDefault();
    num2 = parseInt(temp_result);
    if(oper === "+") {
      finalVal = add(num1, num2);
    } else if(oper === "-") {
      finalVal = subtract(num1, num2);
    } else if(oper === "*") {
      finalVal = multiply(num1, num2);
    } else {
      finalVal = divide(num1, num2);
    }
    num1 = finalVal;
    result = finalVal.toString();
    answerInput.value = finalVal;
  });
  $(".cl").click(function(e4) {
    e4.preventDefault();
    result = "";
    temp_result = "";
    num1 = 0;
    num2 = 0
    oper = "";
    finalVal = 0;
    answerInput.value = "";
  });
});