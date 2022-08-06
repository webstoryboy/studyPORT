<?php
if (!isset($_SESSION['memberID'])) {
    Header('Location: ../pages/error.html');
    exit();
}
?>
