<?php
header("Access-Control-Allow-Origin:*");
mysql_connect("localhost","root","");
mysql_select_db("exam");
mysql_query("set names 'utf8'");
$sql="SELECT *FROM info";
$result=mysql_query($sql);
$arr1=array();
while ($arr = mysql_fetch_array($result)){
		array_push($arr1,$arr);
	}
echo  json_encode($arr1);




?>