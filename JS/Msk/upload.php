<?php
$uploadDir = 'uploads/';
$uploadedFile = $uploadDir . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadedFile)) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}
?>