 var readline = require('readline-sync')

   function alphaOrder(str)
     {
   str= readline.question("type word here") //get word from user
   var input= str.split('').reverse().join('');//split word, reverse and join

   console.log(input)
     }

  alphaOrder();
