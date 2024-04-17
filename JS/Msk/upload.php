<?php
$uploadDir = 'uploads/';
$fileName = 'tegami01'; // Nama file yang diinginkan
$fileExtension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION); // Ekstensi file yang diunggah

// Hapus file yang sudah ada jika ada
$existingFileName = $uploadDir . $fileName . '.' . $fileExtension;
if (file_exists($existingFileName)) {
    unlink($existingFileName);
}

// Gabungkan nama file baru dengan ekstensi
$newFileName = $uploadDir . $fileName . '.' . $fileExtension;

// Pindahkan file yang diunggah ke lokasi baru dengan nama baru
if (move_uploaded_file($_FILES['file']['tmp_name'], $newFileName)) {
    echo json_encode(array('success' => true, 'newFileName' => $newFileName));
} else {
    echo json_encode(array('success' => false));
}
?>
