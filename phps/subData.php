<?php
include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);
$patron = isset($_REQUEST["patron"]) ? $_REQUEST["patron"] : (isset($argv[3]) ? $argv[3] : null);

v($base);

$data_result = q("SELECT Nombre FROM $base.$tabla WHERE Nombre LIKE '%$patron%' ORDER BY Nombre LIMIT 5;");
$data = [];
while ($row = mysqli_fetch_assoc($data_result)) {
    $data[] = $row['Nombre'];
}

$response = [
    "data" => $data
];

header('Content-Type: application/json');
echo json_encode($response);
?>

