/*  Level 0  Exercises */

const name = "Alice";
const age = 16;
const country = "USA";
let status = "";
let message = "";


if (age < 18) {
    status = "minor";
} else {
    status = "adult";
}

message = `${name} is a ${status} from ${country}.`;

console.log(message); // Alice is a minor from USA.



const canSee = true;
if (canSee) {
     room = "This room is not dark";
}
else {
    room = "This room is pitch black";
}
console.log(room);

/* 0.3 Data types 

Define variables with different data types (string, number, boolean, undefined, null, object, array). 
They should all be something you may have for your team.*/


const team = "Team 31";
const temaMembers = 11;
const isTeacher = true;
const teamLeader = null;
const teamExersises = undefined;
const teamExersises2 = ["exersise1", "exersise2", "exersise3"];
const students = [
    {name: "Morten", age: 30},
    {name: "Oliver", age: 25},
    {name: "Olivia", age: 27},
]

/* Use typeof to check and print the type of each variable. */

typeof team;
typeof temaMembers;
typeof isTeacher;
typeof teamLeader;
typeof teamExersises;
typeof teamExersises2;
typeof students;

const a = 10;
const b = -10;
const c = "100"
const d = "no";
const e = true;
const f = false;
const g = null;

console.log("#1", a + a, typeof (a + a)); // output is "#1 20 number"

// guess the output of the following statements
console.log("#2", a + b, typeof (a + b)); 
console.log("#3", a + c, typeof (a + c));
console.log("#4", a + d, typeof (a + d));
console.log("#5", a + e, typeof (a + e));
console.log("#6", a + f, typeof (a + f));
console.log("#7", a + g, typeof (a + g));

/* 0.4 Conditions

Write a function that takes a user’s age as input and prints whether they are a child (0-12), a teenager (13-19), or an adult (20+).
Create a function that asks for a number and prints whether it is positive, negative, or zero.
Write a function that checks if a given year is a leap year (Hint: A leap year is divisible by 4).*/



function checkAge(age) {  
    if (age <= 12) {
        return "You are a child";
    } else if (age <= 19) {
        return "You are a teenager";
    } else {
        return "You are an adult";
    }
}

console.log(checkAge(10)); 


/*0.5 Loops
Print numbers from 1 to 10 using a for loop.
Print a countdown from 10 to 1 using a for loop.
Print even numbers between 1 and 20 using a for loop. */

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log(i);


/* 0.6 Arrays
Create an array of five favorite foods and print each item using a for..of loop.
Write a function that takes an array of numbers and returns the sum of all elements. 
What is the sum of [5, 10, -98, 17.5, 365, -2.5]?
Given an array [10, 20, 30, 40, 50], write code to remove the last element and add 60 at the end.
Write a function that finds the largest number in an array*/

favoritrFoods = ["pasta", "pizza", "steak", "chicken", "fish"];

for (let i = 0; i < favoritrFoods.length; i++) {
    console.log(favoritrFoods[i]);
}

function foodSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(foodSum([5, 10, -98, 17.5, 365, -2.5]));

function removeLast(array) {
    array.pop();
    array.push(60);
    return array;
}
console.log(removeLast([10, 20, 30, 40, 50]));

function largestNumber(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
console.log(largestNumber([10, 20, 30, 40, 50]));


/* 0.7 Objects
Create an object representing a book with properties: title, author, and yearPublished.
Write a function that takes a book object and returns a string: {title} by {author},
 published in {yearPublished}.
Add a method getAge to the book object that returns how old the book is based on the current year.
Write a function that takes an array of book objects and returns an array of all book titles.*/

books = [
    book1 = {
        title: "Harry Potter",
        author: "J.K. Rowling",
        yearPublished: 1997,
        getAge : function () {
            let currentYear = new Date().getFullYear();
            return currentYear - this.yearPublished;
        }
    }
]


function bookInfo(book) {
    return `${book.title} by ${book.author}, published in ${book.yearPublished}`;
}

console.log(bookInfo(book));

function bookTitles (books) {
    let titles = [];
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
}

console.log(bookTitles(books));


/* 0.8 Functions
Write a function greet that takes a name as a parameter and returns a greeting message
console.log(greet("Alice")); // "Hello, Alice!"
Write a function add that takes two numbers and returns their sum.
console.log(add(5, 3)); // 8
Write a function square that returns the square of a number. 
Then, write another function sumOfSquares that takes two numbers and returns the sum of their squares.
console.log(sumOfSquares(3, 4)); // 25 (3² + 4² = 9 + 16) */


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

function sum(a, b) {
    return a + b; 
}

console.log(sum(5, 3));

function square(a) {
    return a * a;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log(sumOfSquares(3, 4));


/* Level 1 - Regular Difficulty 

Create Student Objects
Define a function createStudent(name, age, grades) that takes a student's 
name, age, and grades and return an object with these properties.

Store Students in an Array
Create an empty array called students.
Use the createStudent function to create at least three student objects and store them in the students array.


Calculate Average Grade
Write a function calculateAverageGrade(student) that takes a student object and returns their average grade.*/

function createStudent(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades
    }
}

students = [];

students.push(createStudent("Alice", 20, [90, 80, 85]));
students.push(createStudent("Bob", 22, [95, 85, 92]));
students.push(createStudent("Charlie", 19, [88, 78, 82]));

console.log(students);


function calculateAverageGrade(student) {
    let sum = 0; 
    for (let i = 0; i < student.grades.length; i++) {  
        sum += student.grades[i];
}
return sum / student.grades.length;
}

console.log(calculateAverageGrade(students[2]));

/* Find the Best Student
Write a function findTopStudent(students) that takes an array of students and 
returns the student with the highest average grade.*/

function findTopStudent(students) {
    let topStudent = students[0];
    for (let i = 0; i < student.grades.length; i++) {
        if (calculateAverageGrade(students[i]) > calculateAverageGrade(topStudent)) {
            topStudent = students[i];
        }
    }
    return topStudent;
}
console.log(findTopStudent(students)); 










