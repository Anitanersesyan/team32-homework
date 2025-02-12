/* Create a function (that you have to name) that has temperature as parameter. Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.

An example is:

const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt" */ 


const clothesToWear = function (todaysTemperature) {
    if (todaysTemperature < 0) {
        return "Wear a hat";
    } else if (todaysTemperature < 15) {
        return "Wear a jacket";
    } else if (todaysTemperature < 25) {
        return "Wear a sweatshirt";
    } else {  
        return "Wear a t-shirt";
    }
};

console.log(clothesToWear(-5));
console.log(clothesToWear(10));
console.log(clothesToWear(15));
console.log(clothesToWear(20)); 
console.log(clothesToWear(30));