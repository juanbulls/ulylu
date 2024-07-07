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

// Mockeando
$_REQUEST = [
    "base" => "your_base_value",
    "tabla" => "your_tabla_value",
    "Cliente_r" => "Ruiz",
    "Vendedor_r" => "Rodriguez",
    "Fecha_d" => "2024-07-11",
    "Ndoc" => "1234",
    "Tdoc" => "dasd",
    "Cuenta" => "AUQ",
    "Cantidad" => "1",
    "Descripcion" => "prueba error handeling",
    "Comentario" => "prueba numero 4"
];

$insert_data = [];
foreach ($_REQUEST as $key => $value) {
    if (!in_array($key, ['base', 'tabla'])) {
        $insert_data[$key] = $value;
    }
}

$fields = implode(",", array_keys($insert_data));
$values = implode("','", array_map(function($value) use ($con) {
    return mysqli_real_escape_string($con, $value);
}, array_values($insert_data)));
try {
    $insert_result = q("INSERT INTO $base.$tabla ($fields) VALUES ('$values')");

    $data_result = q("SELECT * FROM $base.$tabla ORDER BY id DESC LIMIT 1");
    $data = [];
    while ($row = mysqli_fetch_assoc($data_result)) {
        $data[] = $row;
    }
    $response = [
        "cols" => $cols,
        "data" => $data
    ];
} catch (mysqli_sql_exception $e) {
    $response = [
        "error" => "Error inserting: " . $e->getMessage()
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
