$(document).ready(function() {
  // An array to store the commands
  var commands = [];

  // Submit the form
  $("#submit").click(function(e) {
    e.preventDefault();

    // Get the values from the form inputs
    var name = $("#name").val();
    var command = $("#command").val();
    var description = $("#description").val();

    // Create a command object
    var commandObj = {
      name: name,
      command: command,
      description: description
    };

    // Add the command object to the array of commands
    commands.push(commandObj);

    // Clear the form inputs
    $("#name").val("");
    $("#command").val("");
    $("#description").val("");

    // Call the function to display the list of commands
    displayCommands(commands);
  });

  // Display the list of commands
  function displayCommands(commands) {
    var commandList = "";
    for (var i = 0; i < commands.length; i++) {
      var name = commands[i].name;
      var command = commands[i].command;
      var description = commands[i].description;
      commandList +=
        "<p>" +
        "Name: " +
        name +
        "<br>" +
        "Command: " +
        command +
        "<br>" +
        "Description: " +
        description +
        "</p>";
    }
    $("#commandList").html(commandList);
  }
});
