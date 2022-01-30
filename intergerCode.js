
const prompt = require ("prompt-sync")()

const main = (()=>
{

    const numCalculation = (num1,num2,operation)=>
    {
        const SUM_OPERATION = 1; 
        const MINUS_OPERATION = 2;
        const PRODUCT_OPERATION = 3; 
        const DIVIDE_OPERATION = 4
        let answer;

        if (operation === SUM_OPERATION)
        {
            answer = num1 + num2
    
        }

        else if(operation === MINUS_OPERATION)
        {
            answer = num1 - num2
        }

        else if(operation===PRODUCT_OPERATION)
        {
            answer = num1 * num2
        }

        else
       {
            if(operation === DIVIDE_OPERATION)
            {
                
                if(num2 === 0)
                {
                  answer = null
                }
            
            else
            {
                answer = num1/num2
            }

            }
        }

        return answer
       

    }

    const num1 = parseFloat(prompt("Enter the first number: "))
    const num2 = parseFloat(prompt("Enter the second number: "))
    const operation = parseInt(prompt("Enter a code to perform the operation:  1: add, 2: substract, 3: multiply, 4: divde: "))

    if(operation === 1 || operation ===2 || operation ===3 || operation ===4)
    {

    const answer = numCalculation(num1, num2, operation)
    if (answer!=null)
    {
    console.log (`Code entered: ${operation}\nNumber 1: ${num1} \nNumber 2 : ${num2}\nAnswer: ${answer}`)
    }

    else console.log ("Second number for division cannot be zero")
    }

    else
    {
        console.log("The code must be 1, 2, 3, 4")
    }

})()