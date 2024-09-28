<?php

$pass = isset($_REQUEST["pass"]) ? $_REQUEST["pass"] : (isset($argv[1]) ? $argv[1] : null);

echo password_hash($pass);

?>