<?php
    echo "<h1>Pendaftaran Akun</h1>";
    echo '<form method="POST" action="">
        <p>Nama     : <br /><input type="text" name="nama" /></p>
        <p>Telepon  : <br /><input type="text" name="telepon" /></p>
        <p>Verifikasi :</p>
        <select name="verifikasi" id="verifikasi">
            <option>WhatsApp</option>
            <option>SMS</option>
        </select>
        <button type="submit">Kirim</button>
    </form>';
?>
