<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$universidad = $data['universidad'] ?? '';

if (empty($email) || empty($universidad)) {
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
    exit;
}


$stmt = $conn->prepare("SELECT voto FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['status' => 'error', 'message' => 'Usuario no encontrado']);
    exit;
}

$user = $result->fetch_assoc();
if ($user['voto'] == 1) {
    echo json_encode(['status' => 'error', 'message' => 'Ya has votado']);
    exit;
}


$stmt = $conn->prepare("UPDATE votos SET cantidad = cantidad + 1 WHERE universidad = ?");
$stmt->bind_param("s", $universidad);
if ($stmt->execute()) {
   
    $stmt2 = $conn->prepare("UPDATE usuarios SET voto = 1 WHERE email = ?");
    $stmt2->bind_param("s", $email);
    $stmt2->execute();
    $stmt2->close();

    echo json_encode(['status' => 'success', 'message' => 'Voto registrado']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error al votar']);
}

$stmt->close();
$conn->close();
?>