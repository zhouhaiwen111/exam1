<?php
$username = $_GET['username'];
$password = $_GET['password'];
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf8");

mysql_connect("127.0.0.1","root","");
mysql_select_db("exam");

$sql = "INSERT INTO register (username,password) VALUES ('$username','$password')";

mysql_query("set names 'utf8'");

$isSucc = mysql_query($sql);
if($isSucc){
	echo '{"code":1}';
}else{
	echo '{"code":0}';
}
mysql_close();
?>