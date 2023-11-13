$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Temperatura";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener datos de la tabla 'humedad'
$sql = "SELECT * FROM humedad";
$result = $conn->query($sql);

// Obtener los datos y enviarlos como JSON
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

// Cerrar la conexión
$conn->close();
?>