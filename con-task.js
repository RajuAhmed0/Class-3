/* Conditionals Task */

/* Let's say you have x amount of money. 

   if you have more than 80,000, then you will buy a mac.
   if more than 60,000 then you will buy gaming laptop.
   if you more than 40,000 then  you will buy Lenovo Yoga.
   if you have more than 20, 000 then  you will buy an used laptop otherwise, you will use you mobile phone. *******/


   var BuyAMac = 80000;
   var BuyGamingLaptop = 60000;
   var BuyLenovoYoga = 40000;
   var BuyPhone =  20000;

   var XAmount = 20000;

   if (XAmount == BuyAMac) {
    console.log("Mac Buy Now");
   }
   else if (XAmount <= BuyAMac){
    console.log("Not Buy Mac");
   }


   if (XAmount == BuyGamingLaptop) {
    console.log("Buy Gaming Laptop Now");
   }
   else if (XAmount <= BuyGamingLaptop){
    console.log("Not Buy Gaming Laptop ");
   }


   if (XAmount == BuyLenovoYoga) {
    console.log("Buy Lenovo Yoga Now");
   }
   else if (XAmount <= BuyLenovoYoga){
    console.log("Not Buy Lenovo Yoga");
   }


   if (XAmount == BuyPhone) {
    console.log("Buy Phone Now");
   }
   else if (XAmount <= BuyAMac){
    console.log("Not Buy Phone ");
   }