const prompt = require("prompt-sync")();

const main = (()=>
{

    const factors = (num)=>
    {
        for (let i=1; i<=num; i++)
        {
            if(num % i === 0)
            {
               console.log(i)
            }
        }
    }

    const number1 = parseInt(prompt("Enter a number to determine it's factors: "))
    const number2 = parseInt(prompt("Enter a number to determine it's factors: "))
    const number3 = parseInt(prompt("Enter a number to determine it's factors: "))

    console.log (`The factors of ${number1}:`); factors(number1)
    console.log (`The factors of ${number2}: `); factors(number2)
    console.log (`The factors of ${number3}: `); factors(number1)


})()
