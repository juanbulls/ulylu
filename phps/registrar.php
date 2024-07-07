<?php
include('marlene.php');
$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);

$cols_result = q("SHOW COLUMNS FROM $base.$tabla");
$cols = [];
while ($row = mysqli_fetch_assoc($cols_result)) {
    if (ctype_upper($row['Field'][0])) {
        $cols[] = $row['Field'];
    }
}

$insert_data = [];
foreach ($_REQUEST as $key => $value) {
    if (!in_array($key, ['base', 'tabla'])) {
        $insert_data[$key] = $value;
    }
}

$fields = implode(",", array_keys($insert_data));
$values = implode("','", array_map('mysqli_real_escape_string', array_values($insert_data)));
$insert_result = q("INSERT INTO $base.$tabla ($fields) VALUES ('$values')");

if (!$insert_result) {
    $response = [
        "error" => "error inserting"
    ];
} else {
    $data_result = q("SELECT * FROM $base.$tabla ORDER BY id DESC LIMIT 1");
    $data = [];
    while ($row = mysqli_fetch_assoc($data_result)) {
        $data[] = $row;
    }

    $response = [
        "cols" => $cols,
        "data" => $data
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
