<?php
include('marlene.php');
function v($base) {
    $token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : null;

    $data_result = q("SELECT * FROM $base.uszAccesos WHERE hash='$token';");
    
    echo "contador: ". count($argv);
    if (is_null($token) || !mysqli_num_rows($data_result) == 1) {
        echo json_encode(["error" => "invalidado"]);
        exit;
    }
}
v('bauer');
?>