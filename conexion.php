<?php
// Establece la conexión a la base de datos
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "Temperatura";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener datos de temperatura
$sql = "SELECT temperatura FROM temperatura";
$result = $conn->query($sql);

// Imprime los datos en formato de tabla HTML
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["temperatura"]. "</td></tr>";
    }
} else {
    echo "<tr><td colspan='1'>No hay datos disponibles</td></tr>";
}

// Cierra la conexión a la base de datos
$conn->close();
?>