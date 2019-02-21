

 const readline = require('readline-sync')

   
string = readline.question("type word here") //get word from user


   const alphaOrder = () =>  string.split('').reverse().join('');//split word, reverse and join

let input = alphaOrder(string)

   console.log(input)


  alphaOrder();
