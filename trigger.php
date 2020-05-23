<?php
$con=mysqli_connect('127.0.0.1','root','');
if(!$con)
{
    echo 'NOT CONNECTED TO SERVER';
}
if(!mysqli_select_db($con,'todo'))
{
    echo 'DATABASE NOT SELECTED';
}
$title=$_POST['title'];

$deadline=$_POST['deadline'];


$sql="INSERT INTO todo (Title,Deadline) VALUES ('$title','$deadline')";

if(!mysqli_query($con,$sql))
{
    echo 'NOT INSERTED';
}
else
{
    echo 'INSERTED';
}
header("refresh:24;url=main.html");
mysqli_close($con);

?>