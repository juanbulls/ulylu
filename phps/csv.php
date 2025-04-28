<?php
include('marlene.php');
include('valentina.php');
include('roles.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);

$rol = v($base);
if (!in_array('eliminarNotas', $roles[$rol])) {
    echo json_encode(["error" => "Usuario sin permisos"]);
    exit;
}

$cols_result = q("SHOW COLUMNS FROM $base.$tabla");
$cols = [];
while ($row = mysqli_fetch_assoc($cols_result)) {
    if (ctype_upper($row['Field'][0])) {
        $cols[] = $row['Field'];
    }
}

$data_result = q("SELECT * FROM $base.$tabla ORDER BY id DESC;");
$data = [];

// Add column headers as first row
$data[] = $cols;

// Add data rows
while ($row = mysqli_fetch_assoc($data_result)) {
    $values = [];
    foreach ($cols as $col) {
        $values[] = $row[$col];
    }
    $data[] = $values;
}

header('Content-Type: application/json');
echo json_encode(['data' => $data]);
?>