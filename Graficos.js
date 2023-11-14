// Cuando el documento esté listo
$(document).ready(function() {
    // Realiza una solicitud AJAX para obtener los datos desde el archivo PHP
    $.ajax({
        url: 'datos.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Datos recibidos:', data);
        
            // Llena la tabla de Temperatura
            console.log('Datos de temperatura:', data.temperatura);
            llenarTablaT('tablaTemperatura', data.temperatura);
        
            // Llena la tabla de Humedad
            console.log('Datos de humedad:', data.humedad);
            llenarTabla('tablaHumedad', data.humedad);
        },
        error: function(xhr, status, error) {
            console.error('Error al obtener datos:', error);
            console.log('Detalles:', xhr.responseText);
        }
    });

    // Función para llenar la tabla con datos
    function llenarTablaT(idTabla, datos) {
        var tabla = $('#' + idTabla + ' tbody');
        // Asumiendo que los datos son un array de objetos con la propiedad 'ambiente'
        datos.forEach(function(dato) {
            var fila = $('<tr>');
            fila.append($('<td>').text(dato.ambiente));
            
            tabla.append(fila);
        });
    }
// Función para llenar la tabla con datos
function llenarTabla(idTabla, datos) {
    var tabla = $('#' + idTabla + ' tbody');
    // Asumiendo que los datos son un array de objetos con la propiedad 'humedad'
    datos.forEach(function(dato) {
        var fila = $('<tr>');
        fila.append($('<td>').text(dato.humedadd));

        tabla.append(fila);
    });
}

});





