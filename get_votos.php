<?php
include "config.php";

$sql = "SELECT universidad, cantidad FROM votos";
$result = $conn->query($sql);

$votos = [];
while ($row = $result->fetch_assoc()) {
    $votos[] = $row;
}

echo json_encode($votos);

$conn->close();
?>