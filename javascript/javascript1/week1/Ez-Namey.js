/* Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate".
Create a variable called startupName that will contain the created startup name.
Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"
Hint: you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.
const randomNumber = Math.floor(Math.random() * 10);*/

const firstWords = ["Easy", "Awesome", "Corporate", "Innovative","Tech", "Smart", "Dynamic", "Global", "Creative", "NextGen"];
const secondWords = ["Corporation", "Startup", "Company",   "Technologies", "Ventures", 
"Inc", "Works", "Group", "Enterprises", "Partners"];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

console.log(`The startup: ${startupName} contains ${startupName.length} characters`);
