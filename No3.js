readline = require('readline-sync')

  var set = [];
var size = 5;
for(var i=0; i<size; i++) {

	set[i] = readline.question('Enter Element ' + (i+1)); //fill the array 'set' with input from user
}
function barFive (b) {
b = b % 5  ;
if (b != 0) {
return (b);
}// function barFive checks the remainder of variable b for mod 5, and returns b when remainder is not zero
}

console.log(set.filter(barFive));//set.filter(barFive) filters the values of 'set' with respect to the criteria defined in barFive function
