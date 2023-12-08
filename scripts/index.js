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

function salRea() {
  // Obtém o salário atual
  var salario = parseFloat(document.getElementById("salario").value);

  // Obtém o percentual de reajuste
  var reajuste = parseFloat(document.getElementById("reajuste").value);

  // Calcula o valor do aumento
  //var aumento = (salario * reajuste) / 100;

  // Calcula o novo salário
  var novoSalario = salario + (salario * reajuste) / 100;

  // Mostra o novo salário
  alert("O novo salário é de R$" + novoSalario);
}

function semana() {
  // Obtém o número do dia da semana
  var data = document.getElementById("data").value;

  // Verifica se o número está entre 1 e 7
  if (data < 1 || data > 7) {
    alert("O número deve estar entre 1 e 7.");
    return;
  }

  // Obtém o dia da semana correspondente
  var dia = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  var diaSemana = dia[data - 1];

  // Mostra o dia da semana
  alert("O dia da semana é " + diaSemana);
}

function valoresPar(n) {
  if (n < 1) {
    document.write("O número deve ser maior que zero.");
  } else if (n % 2 !== 0) {
    alert("O número deve ser par.");
  } else {
    for (let i = 1; i <= n; i++) {
      document.write(i + "<br>");
    }
  }
}

function somarAnteriores() {
  // Obtém o número
  var nume = document.getElementById("nume").value;

  // Verifica se o número é positivo
  if (nume % 2 !== 0) {
    alert("O número deve ser par.");
    return;
  }

  // Usa um for loop para iterar sobre os números
  var soma = 0;
  for (var i = 1; i < nume; i++) {
    // Soma o número atual
    soma += i;
  }
  // Mostra a soma
  document.getElementById("soma").innerHTML = soma;
}

function imparAnteriores() {
  // Obtém o número
  var impar = document.getElementById("impar").value;

  // Verifica se o número é positivo
  if (Math.sign(impar) === -1) {
    alert("O número deve ser positivo.");
    return;
  }

  // Limpa o conteúdo do elemento `numeros`
  document.getElementById("numeros").innerHTML = "";

  // Usa um for loop para iterar sobre os números
  for (var i = 1; i <= impar; i += 2) {
    // Mostra o número atual
    document.getElementById("numeros").innerHTML += i + " ";
  }
}

  