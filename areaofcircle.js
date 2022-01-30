

const prompt = require ("prompt-sync")()

const main =(()=>
{
    const PI = 3.1416


    const areaCircle = (pi , radius)=>
    {

    const area = pi * (radius **2)

    return area

    }


    const radius = console.log(parseFloat(prompt("Please enter a radius: ")))

    const areaOfCircle = areaCircle(PI,radius)

    console.log (`the area of the circle with radius ${radius} is ${areaOfCircle}`)
})()