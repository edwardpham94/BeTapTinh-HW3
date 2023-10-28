function validateNumberInput(inputElement) {
  let value;
  var valueAnncount;
  var resultDiv = document.getElementById("result-box");
  var resultAnnounce = document.getElementById("announce-box");
  var inputValue = parseFloat(inputElement.value);
  if (isNaN(inputValue)) {
    valueAnncount = "Kiểu dữ liệu không phải số thực! RE-ENTER PLS!";
    inputElement.value = "";
    resultAnnounce.innerHTML = valueAnncount;
  } else {
    valueAnncount = "";
    resultAnnounce.innerHTML = valueAnncount;
  }
}

function getValue() {
  var selectedOption = document.querySelector('input[name="radio"]:checked');
  if (selectedOption) {
    var value = selectedOption.value;
    console.log(value);
  }
}

function calculate() {
  let value;
  var valueAnncount;
  var resultDiv = document.getElementById("result-box");
  var resultAnnounce = document.getElementById("announce-box");

  var n1 = parseFloat(document.getElementById("number1").value);
  var n2 = parseFloat(document.getElementById("number2").value);

  var radios = document.getElementsByName("radio");
  var operation;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      operation = radios[i].value;
      break;
    }
  }

  if (isNaN(n1) && isNaN(n2)) {
    value = " ";
    valueAnncount = "Bạn chưa nhập Số 1 & 2";
  } else if (isNaN(n1)) {
    value = " ";
    valueAnncount = "Bạn chưa nhập Số 1";
  } else if (isNaN(n2)) {
    value = " ";
    valueAnncount = "Bạn chưa nhập Số 2";
  } else if (operation == undefined) {
    value = " ";
    valueAnncount = "Bạn chưa chọn phép tính";
  } else {
    valueAnncount = "Dễ vậy cũng tính!!! :>";
    switch (operation) {
      case "+":
        value = n1 + n2;
        break;
      case "-":
        value = n1 - n2;
        break;
      case "*":
        value = n1 * n2;
        break;
      case "/":
        value = n1 / n2;
        break;
    }
  }

  resultDiv.innerHTML = value;
  resultAnnounce.innerHTML = valueAnncount;
}
