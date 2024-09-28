<?php

$pass = isset($_REQUEST["pass"]) ? $_REQUEST["pass"] : (isset($argv[1]) ? $argv[1] : null);
$hash = isset($_REQUEST["hash"]) ? $_REQUEST["hash"] : (isset($argv[2]) ? $argv[2] : null);

// echo password_hash($pass, PASSWORD_DEFAULT);
if (password_verify($pass, $hash)) {
    echo "bien";
} else {
    echo"mal";
}

?>