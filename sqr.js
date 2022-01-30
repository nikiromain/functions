
const prompt = require("prompt-sync")()

const main = (()=>
{
    const sqr = (number)=>
    {
        const answer = number **2

        return answer
    }

    const number = parseInt (prompt ("Please enter a number to determine the square: "))

    const squareOfNumber = sqr(number)

    console.log(`The square of ${number} is ${squareOfNumber}`)

})()
