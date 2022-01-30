const prompt = require("prompt-sync")();

const main = (()=>
{

    const oddAverage = (num)=>
    {
        const NUMTOCALCULATE = 6
        let totalOfOddNumbers = 0;
        let noOfOddNumbers = 0;

        for (let n =1 ; n<NUMTOCALCULATE; n++)
        {
            prompt("Enter a number: ")

            for (let i = 1; i<=NUMTOCALCULATE; i++)
            {

                 if(num % 2 !== 0)
                 {
                  noOfOddNumbers++
                  totalOfOddNumbers += num
                }
            }
        }
             const average = totalOfOddNumbers / noOfOddNumbers

            return average
    }
    const num = parseInt(prompt("Enter a number: "))
    const average = oddAverage(num)
    console.log (`The average is ${average}`)
    

})()


