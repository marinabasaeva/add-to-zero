// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

var value = false
var j = 0
for (var i = 0; i < array.length; i++){
  if (value == true) {
    break;
  }
  for (j; j < array.length; j++) {
    // console.log (array[i], array[j])
    if (i !== j && array[i] + array[j] === 0) {
      value = true;
    }
  } 
  j = i+1
  } console.log (value)

