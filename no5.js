readline= require('readline-sync')

var set = [];
var size = 5;
for(var i=0; i<size; i++) {

  set[i] = readline.question("Enter Element");
}
  const numberSorter = (a, b) => b - a;
  set.sort(numberSorter);

set = set.slice(0,3)
  console.log(set)
