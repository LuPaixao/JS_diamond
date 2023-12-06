function verificar() {
    // Obtém o valor do campo
    var numero = document.getElementById("numero").value;
  
    // Verifica se o número é par
    if (numero % 2 === 0) {
      alert("O número " + numero + " é par.");
    } else {
      alert("O número " + numero + " é ímpar.");
    }
  }