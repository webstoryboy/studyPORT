<?php
include '../connect/connect.php';

$sql = 'create table port03Board(';
$sql .= 'boardID int(10) unsigned NOT NULL AUTO_INCREMENT,';
$sql .= 'memberID int(10) unsigned NOT NULL,';
$sql .= 'boardTitle varchar(50) NOT NULL,';
$sql .= 'boardContent longtext NOT NULL,';
$sql .= 'regTime int(10) unsigned NOT NULL,';
$sql .= 'PRIMARY KEY(boardID)';
$sql .= ') CHARSET=utf8';

$result = $dbConnect->query($sql);

if ($result) {
    echo 'Create Tables Complete';
} else {
    echo 'Create Tables False';
}
?>
