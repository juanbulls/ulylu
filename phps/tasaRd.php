<?php
include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);

v($base);

$data_result = q("SELECT Valor FROM $base.setup WHERE Param='TRM';");

if (mysqli_num_rows($data_result) != 1) {
    $response = [ "error" => "invalidado" ];
} else {
    $row = mysqli_fetch_assoc($data_result);
    $response = [
        "tasa" => $row['Valor']
    ];
    
}

header('Content-Type: application/json');
echo json_encode($response);
?>

