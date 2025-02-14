/* The addStudentToClass should add the studentName to the class07Students array.

But there are some other requirements:

There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
The same person cannot be added to the class. If the same person is added to the class, log out the following: 'Student Benjamin is already in the class' where Benjamin is substituted for the studentName.
We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always get a space. Even if the class has been filled out.
You cannot add an empty string to a class
getNumberOfStudents function
getNumberOfStudents should simply return the number of students in the class.

Now lets try and use the functions!
Try out all the cases:

Add some students to the class.
Add more students than there is space for
Add a student that is already in the class
Add the Queen to a full class
Call the getNumberOfStudents to log out the number of students.
*/ 

const class07Students = [];
function addStudentToClass(studentName) {

    if (studentName === "") {
            console.log("Cannot add an empty string to a class"); 
    }  
    else if (class07Students.length < 6) { 
        class07Students.push(studentName);

    } else if (class07Students.includes(studentName)) { 
        console.log(`Student ${studentName} is already in the class`);

    } else if (studentName.toLowerCase() === "queen") {
            class07Students.push("Queen");
            
    } else {
        console.log("Cannot add more students to class 07");
    }
    }

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Anita");
addStudentToClass("");
addStudentToClass("Elnaz");
addStudentToClass("Vlad");
addStudentToClass("Babak");
addStudentToClass("Besart");
addStudentToClass("Maksim");
addStudentToClass("Hajar");
addStudentToClass("Anita");
addStudentToClass("Queen");


console.log(`There are ${getNumberOfStudents()} students in class 07 `);
