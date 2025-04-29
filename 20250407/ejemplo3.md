## EJERCICIO 1

Crear un objeto JSON que represente un pedido online. Este onjeto debe de contener:
* ID del pediro (tipo numerico)
* Fecha del pedido (cadena de texto)
* Cliente (objeto con nombre, email y direccion (otro objeto con calle, ciudad y codigo postal))
* Lista de productos  ( array de objetos (nombre, cantidad y precio))
* Envio urgente (tipo booleano)
* Estado del pedido (puede ser de tipo "pendiente", "enviado", "entregado", null si aun no se ha procesado en tienda)
* Total del pedido (tipo numerico, aqui sera la suma del precio y la cantidad de los productos)