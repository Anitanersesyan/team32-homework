

const user1 = {
    username: "Anita",
    age: 23,
    isMentor: false,
}

console.log(user1);

const user2 = {
    username: "Maria",
    age: 88, 
    isMentor: true,
    "100percentGreat": true, 
    children: ["Danny", "Donna"],
    mom: {
        age: 110, 
        username: "Mrs Mommy",
        isMentor: false,
        mom: {
            username: "Mrs Grandma",
            mom: {
                username: "Mrs GreatGrandma"

            }
        }
    }

}

const gradMotherName = user2.mom.mom.mom.username;
console.log(user2.mom.mom.username);

console.log(user2["100percentGreat"]);

user2.isCool = true;
console.log(user2);

user2.isCool = false;
console.log(user2);

user2.isCool = null; /* removing the value */
console.log(user2);

delete user2.isCool;  /* delete completely */
console.log(user2); 

user2.isCool = true;
const isMariaCool = user2.isCool; /* access the value */
console.log(isMariaCool);

user2.isCool = true;
console.log(user2.isMariaCool); /* access the value */



/* Tasks
Create an object called car with the following properties:
brand (e.g., "Toyota")
model (e.g., "Corolla")
year (e.g., 2020)
color (e.g., "red")
Print the car object to the console.
Access and print the brand and year properties separately.
Modify the color property to a new color.
Add a new property called isElectric (set it to false).
Print the updated object */

const car = {
    brand: "Toyota",
    model: "Corolla", 
    year: 2020,
    color: "red",
}

console.log(car);
console.log(car.brand);
console.log(car.year)

car.color = "blue";
car.isElectric = false;
console.log(car);

/* Bonus Tasks
make function which can count how many time a given name has won*/ 

const winners = ["Michael", "Brian", "Ana", "Ana", "Niels", "Ana", "Brian", "ChatGPT 4.0", "ChatGPT 4.0"];
const looser = ["Michael"];
    function countWinners (name) {
    let count = 0;
for ( let i = 0; i < winners.length; i++) {
    let winner = winners[i];
    if (winner === name) {
        count++;
    }
}
return count;
}

console.log("Ana", countWinners("Ana"));
console.log("Brian", countWinners("Brian"));

function histogram () {
    const histo = {};
    console.log(histo);

    for ( let i = 0; i < winners.length; i++) {
        let winner = winners[i];
        console.log(winner);
        if (histo[winner] === undefined) {
            histo[winner] = 1;
        }
        else {
            histo[winner] += 1;
        }
    }
    return histo;
}   
console.log(histogram());


/* Arrays */

/* Tasks
Define an array of 5 items that are all numbers
Add one number at the end of the array
Add another number at the beginning of the array
Print out how many items you have in your array
Remove the items you just added at the beginning and at the end
Again print out how many items you have in your array
Use the for loop to print out the items in your array
Use the for..of loop to print out the items in your array
Use the .toString() method to print out the items of your array
Check if an item exists in your array with .includes()*/

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

console.log(numbers.length);

numbers.pop();
numbers.shift();
console.log(numbers);
console.log(numbers.length);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

for (const number of numbers) { /*  creates a variable for you<, always goes from the start to an end*/
    console.log(number);
}

console.log(numbers.toString());
console. log(numbers.includes(2));


/* Bonus Tasks
What is this code going to show? */

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");


alert(fruits.length); 
console.log(fruits.length);


/*  Call Stack*/

function wakeUp() {
    console.log("I woke up");

}

function brushMyTeeth() {
    console.log("I brushed my teeth");

}

function shower () {
    console.log("I  showered");
}

function eatBreakfast () {
    eat()
    console.log("I  ate my breakfast");
}

function pourCereal () {
    console.log("I  poured my cereal");
}

function eat() {
    console.trace();
console.log("I ate");
}

function createError(){

}

function getReadyForWork () {
    wakeUp();   
    eatBreakfast();
    shower();
    brushMyTeeth();

}

console.log(getReadyForWork());

/* task */

function bookPlaneTickets() {
    // what is stack here?
    console.log("Plane tickets booked");
    requestVacationDays();
  }
  
  function bookHotel() {
    // what is stack here?
    console.log("Hotel booked");
    planItinerary();
  }
  
  function requestVacationDays() {
    // what is stack here?
    console.log("Vacation days requested");
  }
  
  function planItinerary() {
    // what is stack here?
    console.log("Itinerary done");
  }
  
  function planTrip() {
    // what is stack here?
    bookPlaneTickets();
    bookHotel();
    console.log("Trip planned");
  }
  
  // what is stack here?
  planTrip();
  console.trace(planTrip);

  
  
  // bookPlaneTickets();
  // planTrip();

  const car = {
    brand: "Toyota",
    model: "Corolla", 
    year: 2020,
    color: "red",
    horsePower: 100,
    speed: 10, 

    accelerate: function () {
        this.speed += 10;
    }
  }

console.log(car);
car.accelerate();
console.log(car.accelerate);


/* Tasks
Make an object named classRoom which has a name, and a number of students of some fictional students. Imagine each student is an object containing a full name, age, and two other properties of your choice
Create a method in the classRoom object which can find if a student exists based on the full name
Create a method which can add a student to the classRoom. If the student is already in the class it should not be added again.
Create a method which can expel a student from the classRoom.
Create a method which can tell how many minors are in the class (younger than 18 years)
Add two students with the same name Michael Smith. We can no longer rely on the name to distinquish the students. Add a function which adds a unique id to all students in the array.*/


const classRoom = {
    name: "Hack Your Future",
    students: [
        {name: "Jack", surname: "Larsen", age: 20, studentNumber: 1, grade: "A"},
        {name: "Julia", surname: "Nilsen", age: 24, studentNumber: 2, grade: "B"}, 
        {name: "Morten", surname: "Toft", age: 30, studentNumber: 3, grade: "C"}],

    }

    const fullName = name + surname; 

    function studentExists(fullName) {
        
        
    }
    
    