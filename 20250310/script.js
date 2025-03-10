// Evento al hacer click en "Calcular"
document.getElementById("calcularBtn").addEventListener("click", function () {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    // Calculo del IMC
    let imc = peso / (altura * altura);
    document.getElementById("resultado").textContent = imc.toFixed(2);
});