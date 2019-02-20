readline= require('readline-sync')


var count= 0;
function charCount2 (string1,string2){
  string1 = readline.question("type first word")
  string2 = readline.question("type second word")

var i = -1;
var j=  string1.length
var k=  string2.length
//console.log(j)
//console.log(k)


  for (var j; j<= string2.length; j++)
  {
    i++;

    if (string2.substring(i,j)==string1){
      count++



    }
  }
  console.log(count);
}

charCount2();
