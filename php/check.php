<?php
require("srcsrv.php");

$ipo = "46.174.54.245:9999";
$servero = new SrcSrv($ipo);
$infoo = $servero->Info();

?>