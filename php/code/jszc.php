<?php
	$id = $_GET["id"];
	
	$mysql = new mysqli("localhost","root","","item");
	if ($mysql->connect_errno) {
		# code...
		die($mysql->connect_errno);
	}
	$mysql->query("set names utf8");
	$sqlstr = "select*from jszc where id =\"$id\"";
	$result = $mysql->query($sqlstr);
	$myArray = array();
	while ($record = $result->fetch_assoc()) {
		array_push($myArray, $record);
	}
	// var_dump($myArray)
	$a = json_encode($myArray);
	echo $a;
?>