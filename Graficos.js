// Datos en variables en JavaScript
var datos = [1, 2, 3, 4, 5, 6, 7, 800, 9, 10];

// Obtener la referencia a la tabla
var tabla = document.getElementById('miTabla');
var tbody = tabla.getElementsByTagName('tbody')[0];
var mostrarGraficosBtn = document.getElementById('botonG');
var contenidoInicial = document.getElementById('inicio');
    var contenidoGraficos = document.getElementById('graficos');


// Llenar la tabla con datos desde la variable
for (var i = 0; i < datos.length; i++) {
    var fila = tbody.insertRow(i);
    var celda = fila.insertCell(0);
    celda.innerHTML = datos[i];
}