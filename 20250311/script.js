let contador = 0;
const contadorElemento = document.getElementById("contador");
const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");
const resetear = document.getElementById("resetear");

//Evento de aumentar
aumentar.addEventListener("click", function () {
    contador++;
    actualizarContador();
});

//Evento de disminuir
disminuir.addEventListener("click", function () {
    contador--;
    actualizarContador();
});

//Evento de resetear
resetear.addEventListener("click", function () {
    contador = 0;
    actualizarContador();
});

//Funcion para actualizar el contador en la pantalla
function actualizarContador(){
    contadorElemento.textContent = contador;
}