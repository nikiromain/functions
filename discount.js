const prompt = require("prompt-sync")();

const main = (() =>{

const billTotal = (total)=>
{
    const VAT = 0.15 
   const billTotalPlusVat = total + (total * VAT)

    return billTotalPlusVat
}

const discount = (discountCode)=>
{
    const billToDiscount = billTotal(total)
    const discountTotal = billToDiscount - (billToDiscount * (discountCode/100))

    return discountTotal.toFixed(2)
}

const name = prompt("Enter the Customer Name: ")
const customerNumber = parseInt(prompt ("Enter the Customer Number: "))
const total = parseFloat(prompt("Enter the Total: "))
const discountCode = parseFloat(prompt("Enter the Discount: "))


console.log("\n")
console.log(`Name: ${name}\n`)
console.log(`Customer Number: ${customerNumber}\n`)
console.log(`Total Bill: ${total}\n`)
console.log(`Bill Amount After VAT: $${billTotal(total)}\n`)
console.log(`Bill Total After Discount: ${discount(discountCode)}\n`)

})()