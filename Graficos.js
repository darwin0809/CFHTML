document.addEventListener('DOMContentLoaded', function () {
    // Obtener la referencia a la tabla
    var tabla = document.getElementById('miTabla');
    var tbody = tabla.getElementsByTagName('tbody')[0];

    // Realizar una solicitud para obtener datos del backend (PHP)
    fetch('get_data.php')
        .then(response => response.json())
        .then(data => {
            // Llenar la tabla con datos desde la respuesta del backend
            data.forEach(rowData => {
                var fila = tbody.insertRow();
                var celda = fila.insertCell(0);
                celda.innerHTML = rowData.temperatura; // Ajusta la propiedad según tu estructura de datos
            });
        })
        .catch(error => console.error('Error:', error));
});