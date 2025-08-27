<?php
include 'config.php';

$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT); // cifrar contraseña

// Verificar si el usuario ya existe
$sql = "SELECT * FROM usuarios WHERE email='$email'";
$result = $conn->query($sql);

if($result->num_rows > 0){
    echo json_encode(['status' => 'error', 'message' => 'El usuario ya existe']);
} else {
    $sql = "INSERT INTO usuarios (email, password) VALUES ('$email', '$password')";
    if($conn->query($sql)){
        echo json_encode(['status' => 'success', 'message' => 'Registro exitoso']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error en registro']);
    }
}

$conn->close();
?>
