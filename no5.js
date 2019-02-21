readline= require('readline-sync')

let set = [];
const size = 5;
for(let i=0; i<size; i++) {

  set[i] = readline.question("Enter number: ");
}
  const numberSorter = (a, b) => b - a;
  set.sort(numberSorter);

set = set.slice(0,3)
  console.log(set)
