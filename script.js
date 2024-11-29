

let targetNum = Math.floor(Math.random() * 100 + 1);
console.log(`targetNum: ${targetNum}`);

let guesses = new Array();

function compareValues() {
//store the users input in a varible
let userInput = parseInt($('.form-control').val());
  guesses.push(userInput);

//compare the 2 values $targetNum and userInput 
//TOO HIGH



if (userInput > targetNum) {
  $('#feedback').text("THAT'S TOO HIGH");
  $('#feedback').css("color", "red");
} else if (userInput < targetNum) {
  // TOO LOW
  $("#feedback").text("THAT'S TOO LOW"); // Changed "HIGH" to "LOW"
  $("#feedback").css("color", "blue");
} else if (userInput == targetNum) { // Removed the extra semicolon (;)
  $("#feedback").text("THAT'S RIGHT"); // Changed "THATS" to "THAT'S"
  $("#feedback").css("color", "green");
  $("#guesses").text("Great Job, it only took you this number of tries: "+ guesses.length);

} else {
  // error message
  $("#feedback").text("OUT OF RANGE, TRY AGAIN");

}








}














