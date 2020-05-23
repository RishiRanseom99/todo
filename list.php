<!DOCTYPE html>
<html>
<body>

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
$sql = "SELECT * FROM todo";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["ID"]. " - Title: " . $row["Title"]. " " . $row["Deadline"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($con);
?>

</body>
</html>