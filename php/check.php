<?php
require("srcsrv.php");

$ipr1 = "46.174.54.245:9999";
$serverr1 = new SrcSrv($ipr1);
$infor1 = $serverr1->Info();
?>