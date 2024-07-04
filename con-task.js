/* Conditionals Task */

/* Let's say you have x amount of money. 

   if you have more than 80,000, then you will buy a mac.
   if more than 60,000 then you will buy gaming laptop.
   if you more than 40,000 then  you will buy Lenovo Yoga.
   if you have more than 20, 000 then  you will buy an used laptop otherwise, you will use you mobile phone. *******/

  
function XAmount(money) {
   if (money > 80000) {
       return "Buy a macbook";
   } else if (money > 60000) {
       return "Buy a gaming laptop";
   } else if (money > 40000) {
       return "Buy a Lenovo Yoga";
   } else if (money > 20000) {
       return "Buy use mobail phone";
   } else {
       return "Not a buy other equipment";
   }
}


var myAmount = 38000;
var buyequipment= XAmount(myAmount);
console.log(buyequipment);