/* AddCandy function
Create a function called addCandy. It has two parameters:

candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
weight - specifies the weigth of the candy in grams 
Candy table prices

Candy type	Price per gram
Sweet	0.5
Chocolate	0.7
Toffee	1.1
Chewing-gum	0.03
Can i buy more?
Now create a variable called amountToSpend and assign it to Math.random() * 100. You can read about Math.random here

Create a new function called canBuyMoreCandy. This function returns a boolean indicating if the user can buy more candy using the boughtCandy array.

Try use the function by adding some pieces of candy and checking if you can buy more. If the user can buy more candy the console.log the following: "You can buy more, so please do!". If the user cant buy more console.log the following: "Enough candy for you!"

Hint: Use a for loop to calculate the total price of the candy pieces.

Optional Use a while loop instead of a for loop.*/

 const candyPrices = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03
 }

 const boughtCandy = [];

 const amountToSpend = Math.random() * 100;
function addCandy(candyType, weight) {
if (candyPrices[candyType]) {
    const totalCandyPrice = weight * candyPrices[candyType];
    boughtCandy.push({candyType, weight, totalCandyPrice});
}

function canBuyMoreCandy(boughtCandy) {
    if (amountToSpend > totalCandyPrice) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}

addCandy("chocolate", 100);

console.log(canBuyMoreCandy());