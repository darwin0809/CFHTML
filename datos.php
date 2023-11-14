<?php

header("Access-Control-Allow-Origin: *"); // Permitir solicitudes desde cualquier origen (ajusta según sea necesario)
header("Content-Type: application/json");

// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Temperatura";

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener datos de la tabla Temperatura
$sqlTemperatura = "SELECT * FROM temperatura";
$resultTemperatura = $conn->query($sqlTemperatura);

// Consulta para obtener datos de la tabla Humedad
$sqlHumedad = "SELECT * FROM humedad";
$resultHumedad = $conn->query($sqlHumedad);

// Cierra la conexión a la base de datos
$conn->close();

// Retorna los resultados como un array JSON
$data = [
    'temperatura' => $resultTemperatura->fetch_all(MYSQLI_ASSOC),
    'humedad' => $resultHumedad->fetch_all(MYSQLI_ASSOC),
];

echo json_encode($data);
?>