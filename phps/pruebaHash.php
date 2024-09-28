<?php

$pass = isset($_REQUEST["pass"]) ? $_REQUEST["pass"] : (isset($argv[3]) ? $argv[3] : null);

echo password_hash($pass);

?>