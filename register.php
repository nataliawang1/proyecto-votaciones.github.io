<?php
include "config.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

   
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Correo inválido']);
        exit;
    }

    $stmt = $conn->prepare("SELECT email FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(['status' => 'error', 'message' => 'El usuario ya existe']);
    } else {
        $stmt = $conn->prepare("INSERT INTO usuarios (email, password, voto) VALUES (?, ?, 0)");
        $stmt->bind_param("ss", $email, $password);

        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Registro exitoso']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Error en el registro']);
        }
    }
    $stmt->close();
}

$conn->close();
?>