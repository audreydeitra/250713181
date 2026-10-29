function fn_ValForm() {
    var sMsg = "";
    var info;
    var pilihan;
    var umur = document.getElementById("umur").value;
    var email = document.getElementById("email").value;
    var kategori = document.getElementById("kategori").value;
    var nama = document.getElementById("nama").value;

    if (nama == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (umur == "") {
        sMsg += "\n* Anda belum mengisikan umur";
    } else {
        if (umur < 15 || umur > 60) {
            sMsg += "\n* Umur harus dalam rentang 15 sampai 60";
        } else {
            if (umur <= 25) {
                info = "Peserta Mahasiswa";
            } else {
                info = "Peserta Umum";
            }
        } 
    }

    var valEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!valEmail.test(email)) {
        sMsg += "\n* Email belum valid";
    }

    if (kategori == "") {
        sMsg += "\n* Anda belum mengisikan jenis acara";
    }

    switch(kategori) {
        case "W":
            pilihan = "Workshop";
            break;
        case "S":
            pilihan = "Seminar";
            break;
        case "L":
            pilihan = "Lomba Coding";
    }


    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        alert("Terima kasih " + nama + " ! " + "Anda terdaftar di acara " + pilihan + " (" + info +")");
        return true;
    }
}

