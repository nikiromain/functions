const prompt = require("prompt-sync")();

const main = (()=>
{

     const isEven = (number)=>
     {
        const answer = number%2 === 0 ? true : false
        return answer
     }

     const num = parseInt(prompt("Enter a number to determine if the number is even or odd true or false: "))
     const answer = isEven(num)

     console.log(`It is ${answer} that ${num} even`)

})()