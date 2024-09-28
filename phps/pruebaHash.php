<?php

$pass = isset($_REQUEST["pass"]) ? $_REQUEST["pass"] : (isset($argv[1]) ? $argv[1] : null);
$hash = isset($_REQUEST["hash"]) ? $_REQUEST["hash"] : (isset($argv[2]) ? $argv[2] : null);

// echo password_hash($pass, PASSWORD_DEFAULT);
if (password_verify($pass, '$2y$10$yqgzDyPRok1CW7xOryfxzOM0lT/gsI6rt0McDRxpqzPzGx/UfqWjy')) {
    echo "bien";
} else {
    echo"mal";
}

?>