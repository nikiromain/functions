const prompt = require ("prompt-sync")()

const main = (()=>
{
    const isOdd = (number)=>
    {
        const answer = number % 2!=0 ? true: false 
        return answer
    }

    const number = parseInt(prompt("Enter a number to determine if it is odd: "))

    const answer = isOdd(number)

    console.log (`The number ${number} is odd: ${answer}`)

})()