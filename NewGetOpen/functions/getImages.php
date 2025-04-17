<?php
$folder = $_GET['folder'];

// Costruisci il percorso assoluto alla cartella immagini
$basePath = realpath(__DIR__ . '/../img/' . $folder) . '/';

if (!is_dir($basePath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Cartella non trovata', 'path' => $basePath]);
    exit;
}

// Trova tutte le immagini nella cartella
$imageFiles = glob($basePath . "*.{jpg,png,gif,JPG,PNG,GIF}", GLOB_BRACE);

if ($imageFiles === false || empty($imageFiles)) {
    http_response_code(500);
    echo json_encode(['error' => 'Nessuna immagine trovata', 'path' => $basePath]);
    exit;
}

// Funzione per ricavare dinamicamente il nome della cartella principale (es. "NewGetOpen")
function getRootFolderName() {
    $currentDir = realpath(__DIR__ . '/..'); // sali dalla cartella functions
    return basename($currentDir);            // prendi solo il nome (es. "NewGetOpen")
}

$projectRoot = getRootFolderName();

// Costruisci i percorsi pubblici per il browser
$imageURLs = array_map(function ($file) use ($folder, $projectRoot) {
    return "/$projectRoot/img/$folder/" . basename($file);
}, $imageFiles);

header('Content-Type: application/json');
echo json_encode($imageURLs);
