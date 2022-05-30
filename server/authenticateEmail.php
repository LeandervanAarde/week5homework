<?php
    include 'db_connetcion.php';

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);

    $email = $data -> email; 

    if($email === ""){
        echo ""; 
    } else {
        $sql = "SELECT * FROM users WHERE email = '$email';";
        $result = mysqli_query($conn, $sql);
        $results_check = mysqli_num_rows($result);

        if( $result_check > 0){
            echo true;
        } else{
            echo false; 
        }
    }
?>