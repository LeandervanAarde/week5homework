<?php
    include 'db_connetcion.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);

    $username = $data -> username; 

    if($username === ""){
        echo ""; 
    } else {
        $sql = "SELECT * FROM users WHERE username = '$username';";
        $result = mysqli_query($conn, $sql);
        $resultsChek = mysqli_num_rows($result);

        if($resultsChek > 0){
            echo false;
        } else{
            echo true; 
        }
    }
?>