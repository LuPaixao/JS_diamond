function imparPar() {
  var num = document.getElementById("num").value;
  
  if (num % 2 === 0) {
    alert("O número: " + num + " é par.");
  } else {
    alert("O número: " + num + " é ímpar.");
  }
}
  
function maiorNum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  
  if (num1 > num2) {
    alert("O maior número é " + num1);
  } else if (num2 > num1) {
    alert("O maior número é " + num2);
  } else {
    alert("Os números são iguais.");
  }
}

function votacao() {
  var nascimento = document.getElementById("nascimento").value;

  var idade = 2023 - nascimento;

  if (idade >= 18) {
    alert("A pessoa pode votar.");
  } else {
    alert("A pessoa não pode votar.");
  }
}

function salRea() {
  var salario = parseFloat(document.getElementById("salario").value);

  var reajuste = parseFloat(document.getElementById("reajuste").value);

  var novoSalario = salario + (salario * reajuste) / 100;

  alert("O novo salário é de R$" + novoSalario);
}

function semana() {
  var data = document.getElementById("data").value;

  if (data < 1 || data > 7) {
    alert("O número deve estar entre 1 e 7.");
    return;
  }

  var dia = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  var diaSemana = dia[data - 1];

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
  var nume = document.getElementById("nume").value;

  if (nume % 2 !== 0) {
    alert("O número deve ser par.");
    return;
  }

  var soma = 0;
  for (var i = 1; i < nume; i++) {
    soma += i;
  }
  document.getElementById("soma").innerHTML = soma;
}

function imparAnteriores() {
  var impar = document.getElementById("impar").value;

  if (Math.sign(impar) === -1) {
    alert("O número deve ser positivo.");
    return;
  }
  document.getElementById("numeros").innerHTML = "";

  for (var i = 1; i <= impar; i += 2) {
    document.getElementById("numeros").innerHTML += i + " ";
  }
}


function listArray() {
  const numbers = document.getElementById("numbers").value;
  const numbersArray = numbers.split("-").map(Number);
  const sum = numbersArray.filter(number => number < 30).reduce((a, b) => a + b, 0);
  document.getElementById("resultArray").innerHTML = sum;
}


function arrayMenor() {
  const numbers = document.getElementById("numbers").value;
  const count = countNumbers50(numbers);
  document.getElementById("result").innerHTML = count;
}

function countNumbers50(numbers) {
  const numbersArray = numbers.split("/").map(Number);
  const count = numbersArray.filter(number => number > 50).length;
  return count;
}

function inverter() {
  var string = document.getElementById("string").value;
  var inverso = "";
  for (var i = string.length - 1; i >= 0; i--) {
    inverso += string[i];
  }
  document.getElementById("inverso").innerHTML = inverso;
}

function finalDigito() {
  const digito = document.getElementById("digito").value;
  const capitalized = letrasMaiores(digito);
  document.getElementById("digitoFinal").innerHTML = "A string com a primeira e a última letra maiúsculas é: " + capitalized;
}

function letrasMaiores(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const lastLetter = str.charAt(str.length - 1).toUpperCase();
  const middleLetters = str.slice(1, -1);
  return firstLetter + middleLetters + lastLetter;
}