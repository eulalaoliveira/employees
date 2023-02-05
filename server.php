<?php
//Allow cors 
header("Access-Control-Allow-Origin:*"); 
// Get the json file
$json = file_get_contents('employees.json');
// Decode the json into an array
$data = json_decode($json, true);
// Get query params from request 
$queryParams = $_GET; 
// Add new row to data array based on query params 
array_push($data, $queryParams); 
// Set the response header to JSON 
header('Content-Type: application/json'); 
// Return the data as JSON 
echo json_encode($data); 