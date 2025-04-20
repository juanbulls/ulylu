<?php

include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);

v($base); // Descomentar cuando termine debugg

$cols_result = q("SHOW COLUMNS FROM $base.$tabla");
$cols = [];
while ($row = mysqli_fetch_assoc($cols_result)) {
    if (ctype_upper($row['Field'][0])) {
        $cols[] = $row['Field'];
    }
}

$data_result = q("SELECT * FROM $base.$tabla;");
$data = [];
while ($row = mysqli_fetch_assoc($data_result)) {
    $data[] = $row;
}

$response = [
    "cols" => $cols,
    "data" => $data
];

header('Content-Type: application/json');
echo json_encode($response);
?>
