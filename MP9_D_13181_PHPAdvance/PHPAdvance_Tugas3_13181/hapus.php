<?php
    require 'koneksi.php';

    $conn = mysqli_connect('localhost', 'root', '', 'mp9_film');

    if(!$conn){
        die('Koneksi gagal: ' . mysqli_connect_error());
    }

    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        $id = trim($_GET['id'] ?? '');
        
        if($id === '' || !ctype_digit($id)) {
            echo '<p style="color:red;">!! ID tidak valid. !!</p>';
        }else{
            $stmt = mysqli_prepare($conn, 'DELETE FROM film WHERE id = ?');
            mysqli_stmt_bind_param($stmt, 'i', $id);
            mysqli_stmt_execute($stmt);

            if(mysqli_stmt_affected_rows($stmt)){
                echo '<p>Data berhasil dihapus</p>';
            }else{
                echo '<p>Data tidak ditemukan</p>';
            }
        }
    }
?>