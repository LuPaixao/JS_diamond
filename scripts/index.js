function imparPar() {
  // Obtém o valor do campo
  var num = document.getElementById("num").value;
  
  // Verifica se o número é par
  if (num % 2 === 0) {
    alert("O número: " + num + " é par.");
  } else {
    alert("O número: " + num + " é ímpar.");
  }
}
  
function maiorNum() {
  // Obtém os valores dos campos
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  
  // Verifica qual é o maior número
  if (num1 > num2) {
    alert("O maior número é " + num1);
  } else if (num2 > num1) {
    alert("O maior número é " + num2);
  } else {
    alert("Os números são iguais.");
  }
}

function votacao() {
  // Obtém o ano de nascimento
  var nascimento = document.getElementById("nascimento").value;

  // Calcula a idade da pessoa
  var idade = 2023 - nascimento;

  // Verifica se a pessoa pode votar
  if (idade >= 18) {
    alert("A pessoa pode votar.");
  } else {
    alert("A pessoa não pode votar.");
  }
}
  