document.getElementById("btn-alerta").addEventListener("click", function() {
    alert("Este é um alerta!");
  });
  
  document.getElementById("btn-comparar").addEventListener("click", function() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
  
    let maior = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
  
    let resultado = document.createElement("div");
    resultado.classList.add("alert", "alert-info");
    resultado.textContent = `O maior número é: ${maior} e o menor número é: ${menor}`;
    document.getElementById("resultado").appendChild(resultado);
  });