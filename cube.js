
const prompt = require ("prompt-sync")()

const main = (() =>
{

    const cube = (number) =>
    {
        const cube = number **3

        return cube
    }

    const number = parseInt(prompt("Please enter a number: "))

    const cubeOfNumber = cube(number)

    console.log(`The cube of ${number} is ${cubeOfNumber}`)
})()