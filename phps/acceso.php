<?php
include('marlene.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$email = isset($_REQUEST["email"]) ? $_REQUEST["email"] : (isset($argv[2]) ? $argv[2] : null);
$pass = isset($_REQUEST["pass"]) ? $_REQUEST["pass"] : (isset($argv[3]) ? $argv[3] : null);

$data_result = q("SELECT * FROM $base.usuarios WHERE Email='$email' AND Hash='$pass' AND Rol <> 'INACTIVO';");


// Tokenize
if (mysqli_num_rows($data_result) == 0) {
    $response = [ "error" => "invalidado" ];
} else {
    $token = bin2hex(random_bytes(23));
    $row = mysqli_fetch_assoc($data_result);
    $rol = $row['Rol'];

    $insert_result = q("INSERT INTO $base.uszAccesos (`hash`, email, rol) VALUES ('$token', '$rol')");
    $response = [
        "token" => $token
    ];
    
}

header('Content-Type: application/json');
echo json_encode($response);
?>

