const prompt = require ("prompt-sync")();

const main = (()=>
{


    const sum = (num1, num2)=>
    {
        
        const sum = num1 + num2

        return sum

    }

    const num1 = parseFloat(prompt ("Please enter the first number: "))
    const num2 = parseFloat(prompt(" Please enter the second number: "))

    const sumOfNumbers = sum (num1, num2)

    console.log (`The sum of ${num1} and ${num2} is: ${sumOfNumbers}`)


})()