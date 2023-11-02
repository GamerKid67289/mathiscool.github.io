<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the submitted video details
  $videoTitle = $_POST["videoTitle"];
  $videoLink = $_POST["videoLink"];

  // Process the video data as per your requirements (e.g., store in a database)
  // For demonstration purposes, let's just print the video details
  echo "Video Title: " . $videoTitle . "<br>";
  echo "Video Link: " . $videoLink;
}
?>
