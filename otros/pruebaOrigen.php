<?php

function llamado() {
    $backtrace = debug_backtrace();
    $caller = $backtrace[0]['file'] ?? 'unknown';
    echo basename($caller);
}

?>