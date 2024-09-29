<?php
include('marlene.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$usr = isset($_REQUEST["usr"]) ? $_REQUEST["usr"] : (isset($argv[2]) ? $argv[2] : null);
$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : (isset($argv[3]) ? $argv[3] : null);

$data_result = q("SELECT * FROM $base.uszAccesos WHERE hash='$token' AND email='$usr';");

if (mysqli_num_rows($data_result) == 1) {
    $row = mysqli_fetch_assoc($data_result);
    $modificado = new DateTime($row['modificado']);
    $hace3meses = new DateTime();
    $hace3meses->modify('-90 days');
    if ($modificado < $hace3meses) {
        $response = [ "error" => "vencido" ];
    } else {
        $actualizar = q("UPDATE $base.uszAccesos SET email = $usr;");
    }
} else {
    $response = [ "error" => "invalidado" ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>