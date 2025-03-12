// lets first create an array of three cars

const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];


const sortedCars = cars.sort(function(a, b) {
     console.log("a==============>", a);
     console.log("b==============>", b);
     
     return a.make > b.make;
 });

 console.log(sortedCars);


const colors = cars.map(function(car) {
   return car.color;
});
console.log(colors);

const color = []; 
for(let i=0; i < cars.length; i++) {
    color.push(cars[i].color);
}
console.log(colors);


const newCarList = cars.map(function(...car) {
    return car;
}); 

newCarList[0].color = "white";   

console.log("cars", cars);
console.log("newCarList", newCarList);



// Lets get only cars with a speed larger than 60
const fastCars = cars.filter(function(car) {
    // This function is called for every car in the cars array
    if (car.speed > 60) {
        // save the car
        return true;
    } else if (car.speed <= 60) {
        // filter out the cars that are slower than 60
        return false;
    }
});

console.log(fastCars); // logs the BMW and the Fiat


//use  map that converts an array of temperatures in Celsius to Fahrenheit.
celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map(temperature => temperature * 1.8 + 32);

console.log(fahrenheit);

//use filter function that removes all words shorter than 4 letters from an array.
words = ["apple", "is", "a", "fruit"]; 

const longWords = words.filter(word => word.length > 4);
    //return word.length > 4? true : false;
     

console.log(longWords);

/*if (word.length > 4) {
    return true;
}
else {
    return false;
}
});

console.log(longWords); */

//implement a forEach function that logs "Hello, <name>!" for each name in an array.
names = ["Alice", "Bob", "Charlie"];

names.forEach(name =>
{
    console.log(`Hello, ${name}!`);
});

function hyf_js2() {
    console.log(`Hello, ${name} to HYF JS2!`)
}

const myFunc = hyf_js2("Alice");

const myFunc2 = function hyf_js2(name) {
    console.log(`Hello, ${name} to HYF JS2!`)
}


const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
];

console.log(mentors);

mentors.forEach((mentor) => {
    console.log(mentor);
    console.log(mentor.name);

    mentor.subjects.forEach((subject) => console.log(subject));
});


function forEachHomemade(array, functionToExecute) {
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        functionToExecute(currentItem, i);
    }
}

// We are mapping/transforming the mentors array. Same size, different items.
const mentorNames = mentors.map((mentor) => mentor.name);

console.log(mentorNames);


const mentorNamesFormatted = mentors.map((mentor) => 'Mentors name is: ' + mentor.name);
console.log(mentorNamesFormatted);

const mentorSummary = mentors.map((mentor) => `Mentors name is: ${mentor.name}. He has ${mentor.yearsOfExperience} years of experience`);
console.log(mentorSummary);


/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

//generateListings(5);

const housingSize = generateListings(5).forEach((listing) => console.log(listing.size));
console.log(housingSize); 

const housingPrice = generateListings(5).map((listing) => listing.price); 
console.log(housingPrice);