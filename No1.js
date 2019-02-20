

var readline = require('readline-sync');

function starDust (){

  var str = '*';

console.log("test 1")
  var set = [];
  var size = 5;
  for(var i=0; i<size; i++) {

set[i] = readline.question("type number here " );
//the for loop here is in place to fill the contents of the array 'set', with 5 numbers from the user, along with module 'readline'
  }
  //console.log(str.repeat(set[i]))


  for ( var j=0; j<set.length; j++)
  {

console.log(str.repeat(set[j])) //the for loop here prints out str which is '*' in multiples of the content of array 'set'

}
}
starDust();
