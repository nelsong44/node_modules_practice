
//practice module

function createIntro() { //function to create and output a message
  var today = new Date(); //first need to determine date, 'today' is now a Date object
  var message = 'Today is ' + today.toLocaleDateString() + '.';
  // intermediary variable that concatenates a string with our variable

  // can't output number data types, need to be strings
  return message;
}

//now need to export a reference to the function
//overriding the built-in module object by reassinging it to createIntro
//the export property is whatever functionality we want to make available when we use our module

module.exports = createIntro;
