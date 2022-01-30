const prompt = require("prompt-sync")();

const main = (()=>
{

   const calDeliveryCharge = (weight)=>
   {
       let deliveryCharge = 0;

       if (weight <= 0 || isNaN(weight))
       {
           deliveryCharge = null
       }

       else if(weight < 2.5 )
       {
           deliveryCharge = 3.50 * weight
       }

       else if (weight>=2.5 && weight <5)
       {
           deliveryCharge = 2.85 * weight
       }

       else if (weight >= 5 && weight <7)
       {
           deliveryCharge = 2.45 * weight 
       }

       else 
       {
           deliveryCharge = 3.25 * weight 
       }

       return deliveryCharge
   }

   const  weight = parseFloat(prompt("Enter the weight of the package: "))

   const charge = calDeliveryCharge(weight)

   if (charge!=null)
   {
   console.log (`The package weight: ${weight} and the delivery charge: ${charge}`)
   }

   else
   console.log ("Error")
})()