//FUNCION DE CALCULAR CON CONSOLE.LOG
function calcularPorcentaje() {
    const numero = parseFloat(document.getElementById("numero").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
    console.log("Número ingresado:", numero);
    console.log("Porcentaje ingresado:", porcentaje);

    const resultado = (numero * porcentaje) / 100;
    console.log(`Resultado del cálculo: (${numero} * ${porcentaje}) / 100 = ${resultado}`);
    document.getElementById("resultado").textContent = resultado;
}

//FUNCION DE LIMPIAR CAMPOS CON CONSOLE.LOG
function limpiarCampos() {
    document.getElementById("numero").value = "";
    document.getElementById("porcentaje").value = "";
    document.getElementById("resultado").textContent = 0;

    console.log("Campos reseteados")
}

//FUNCION ECUACION 2DO GRADO
function calculoEcuacion() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

    const x2 = (- b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

    console.log("Resultado de la primera raiz", x1);
    console.log("Resultado de la segunda raiz", x2);

    document.getElementById("raiz1").textContent = x1.toFixed(2);
    document.getElementById("raiz2").textContent = x2.toFixed(2);

}

//FUNCION LIMPIAR
function limpia() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("raiz1").textContent = 0;
    document.getElementById("raiz2").textContent = 0;

    console.log("Campos reseteados")
}

document.getElementById("calcularBtn").addEventListener("click", calcularPorcentaje);
document.getElementById("limpiarBtn").addEventListener("click", limpiarCampos);
document.getElementById("calculo").addEventListener("click", calculoEcuacion);
document.getElementById("limpio").addEventListener("click", limpia);