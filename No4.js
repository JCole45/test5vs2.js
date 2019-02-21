readline= require('readline-sync')


let count= 0;
function charCount2 (string1,string2){
  string1 = readline.question("type first word: ")
  string2 = readline.question("type second word: ")

let i = -1;
let j=  string1.length
let k=  string2.length
//console.log(j)
//console.log(k)


  for ( j; j<= string2.length; j++)
  {
    i++;

    if (string2.substring(i,j)==string1){
      count++



    }
  }
  console.log(count);
}

charCount2();
