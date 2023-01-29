<?php

// Connect to the database
$host = "localhost";
$username = "database_username";
$password = "database_password";
$dbname = "database_name";

$conn = mysqli_connect($host, $username, $password, $dbname);

// Check the connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form has been submitted
if (isset($_POST['submit'])) {
  // Get the values from the form inputs
  $name = $_POST['name'];
  $command = $_POST['command'];
  $description = $_POST['description'];

  // Prepare the SQL statement
  $sql = "INSERT INTO commands (name, command, description)
          VALUES ('$name', '$command', '$description')";

  // Execute the SQL statement
  if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}

// Close the database connection
mysqli_close($conn);

?>
