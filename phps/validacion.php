<?php
include('marlene.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : (isset($argv[2]) ? $argv[2] : null);

$data_result = q("SELECT * FROM $base.uszAccesos WHERE hash='$token';");

if (mysqli_num_rows($data_result) == 1) {
    $row = mysqli_fetch_assoc($data_result);
    $modificado = new DateTime($row['modificado']);
    $email = $row['email'];
    $id = $row['id'];
    $hace3meses = new DateTime();
    $hace3meses->modify('-90 days');
    if ($modificado < $hace3meses) {
        $response = [ "error" => "vencido" ];
    } else {
        $actualizar = q("UPDATE $base.uszAccesos SET hash = '$token' WHERE id=$id;");
        $response = [ "email" => $email ];
    }
} else {
    $response = [ "error" => "invalidado" ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>