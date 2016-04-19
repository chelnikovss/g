<?php
//header('Content-Type: text/html; charset=utf-8');
include('variables.php');
@$conn = new mysqli($serverName, $userName, $password, $dbname);

if(!$conn)
{
    die("Error !".mysqli_connect_error());
}
$conn->query("SET NAMES 'utf8'");

$data = $_POST['officesPost'];

$dataIdCity = explode('|', $data);

$sql = "SELECT * FROM $dataIdCity[1] WHERE  id = $dataIdCity[0]";

$res = $conn->query($sql);

if($res->num_rows>0)
{
    while($row = $res->fetch_assoc())
    {
        $coordinate['latlocation'] = $row['latlocation'];
        $coordinate['lnglocation'] = $row['lnglocation'];
        $coordinate['indexmail'] = $row['indexmail'];

        echo json_encode($coordinate);

    }
}

$conn->close();




