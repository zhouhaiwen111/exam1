<?php
	header("Access-Control-Allow-Origin:http://localhost:2333");
	$username = $_GET['username'];
	
	if ($username !== "") {
		header("Access-Control-Allow-Origin:*");
		mysql_connect("localhost","root","");
		mysql_select_db("exam");
		$sql = "SELECT * FROM register WHERE username = '$username'";
		mysql_query("set names 'utf8'");
		$query = mysql_query($sql);
		$result = array();
		while ($arr = mysql_fetch_array($query)) {
			array_push($result, $arr);
		}
		echo json_encode($result);
		mysql_close();
	}

?>
