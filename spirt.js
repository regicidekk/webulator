function plus() {
  let resul = document.getElementById('resul');
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  resul.value= num1+num2
}

function minus() {
  let resul = document.getElementById('resul');
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  resul.value= num1-num2
}

function umnoj() {
  let resul = document.getElementById('resul');
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  resul.value= num1*num2
}

function delit() {
  let resul = document.getElementById('resul');
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  resul.value= num1/num2
}
