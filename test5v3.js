
//Test 1
console.log("Test 1- Printing stars")

const readline = require('readline-sync');

function starDust (){

  const str = '*';

  let arr = [];
  const arrsize = 5;
  for(let i=0; i<arrsize; i++) {

arr[i] = readline.question("type number here: " );
//the for loop here is in place to fill the contents of the array 'set', with 5 numbers from the user, along with module 'readline'
  }
  //console.log(str.repeat(set[i]))


  for ( let j=0; j<arr.length; j++)
  {

console.log(str.repeat(arr[j])) //the for loop here prints out str which is '*' in multiples of the content of array 'set'

}
}
starDust();


//Test 2

console.log("Test 2- Word Revers");

string = readline.question("type word here: ") //get word from user


   const alphaOrder = () =>  string.split('').reverse().join('');//split word, reverse and join

let input = alphaOrder(string)

   console.log(input)


  alphaOrder();

  //Test 3
console.log("Test 3- Eleminating multiples of 5")

  const set = [];
const size = 5;
for(let i=0; i<size; i++) {

	set[i] = readline.question('Enter Element ' + (i+1) + ':'); //fill the array 'set' with input from user
}
function barFive (b) {
b = b % 5  ;
if (b != 0) {
return (b);
}// function barFive checks the remainder of variable b for mod 5, and returns b when remainder is not zero
}

console.log(set.filter(barFive));//set.filter(barFive) filters the values of 'set' with respect to the criteria defined in barFive function

//Test 4
console.log("Test 4 - String Count")

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
  console.log(string1 + "appears " + count + "in " + string2);
}

charCount2();

//Test 5
console.log("Test 5 - Biggest 3")
let num = [];
const numsize = 5;
for(let i=0; i<numsize; i++) {

  num[i] = readline.question("Enter number: ");
}
  const numberSorter = (a, b) => b - a;
  num.sort(numberSorter);

num = num.slice(0,3)
  console.log(num)

  console.log("end of program")
