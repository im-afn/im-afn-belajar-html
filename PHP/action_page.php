<?php
if (isset($_GET['x']) && isset($_GET['y'])) {
    $x = $_GET['x'];
    $y = $_GET['y'];

    // Proses koordinat (x, y) sesuai kebutuhan aplikasi
    // Misalnya, mencari informasi lokasi berdasarkan koordinat
    // Misal, mengirim kembali informasi tentang lokasi tersebut

    echo "Anda mengklik pada koordinat: ($x, $y)";
} else {
    echo "Koordinat tidak tersedia.";
}
?>
