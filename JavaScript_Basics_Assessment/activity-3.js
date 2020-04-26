var studentNames = ["Alice", "Becky", "Catherine"];
for(var i = 0; i < 3; i++) {
    var userInput = prompt("Enter new student name:");
    studentNames.push(userInput);
}
for(var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}