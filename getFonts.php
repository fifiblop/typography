<?php

function listFolder($path) {
    if ($path)
        return array_values(array_diff(scandir($path), array('..', '.')));
    return false;
}

$fontsPath = "fonts/";
$fontsFolder = listFolder($fontsPath);
$fontArray = array();

if ($fontsFolder) {
    foreach($fontsFolder as $folder) {
        array_push($fontArray, $folder);
        $folderPath = $fontsPath . $folder . "/";
        $fontArray[$folder] = listFolder($folderPath);
    }
}
$fontArray = json_encode($fontArray);