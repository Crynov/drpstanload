<?php
require("srcsrv.php");

$ip = urldecode($_GET['ip']);
$server = new SrcSrv($ip);
$info = $server->Info();
$players = $server->Players();
if ($info) {
	$text = $info["name"];
	if ($info["password"]) {
	 	$text = $info["name"] . " (Под паролем)";
	}
	echo "  Название: " . $text . PHP_EOL . "  Адрес: " . $ip . PHP_EOL . "  Игроки: " . $info["players"] . " из " . $info["max"] . PHP_EOL . "  Карта: " . $info["map"];
	echo PHP_EOL . PHP_EOL . "ᅠᅠ~ <Игроки> ~" . PHP_EOL;
	foreach ($players as $player) {
		$time = $player['time'];
		echo "  " . $player['name'] . "(" . date('h:m:s', mktime(0, 0, $time)) . ")" . PHP_EOL;
	}
} else {
	echo "  Адрес: " . $ip . PHP_EOL . "  Не работает! :С";
}
?>