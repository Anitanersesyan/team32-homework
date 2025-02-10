const balance = 1000;

if (balance <= 0) {
    console.log("Please deposit some money")
}
else if (balance > 0 && balance < 1000) {
    console.log("Your balance is okay")
}
else if (balance > 1000 && balance < 3000) {
    console.log("Your balance is  looking good")
}
else if (balance > 3000 && balance < 10000) {
    console.log("Your balance is fantastic")
}
else {
    console.log("Your balance is AMAZING!") 
}

/**
 * 
 * @param {number} balance 
 */
function getUserAccountMessage(balance) {
    if (balance <=0) {
        return "Please deposit some money"
    } else if (balance > 0 && balance < 1000) {
        return "Your balance is okay"
    } else if (balance > 1000 && balance <= 3000) {
        return "Your balance is  looking good"
    } else if (balance > 3000 && balance <= 10000) {
        return "Your balance is fantastic"
    } else {
        return "Your balance is AMAZING!"
    }
}
console.log(getUserAccountMessage(1000))


/* Find the biggest number in array */
const arrayNumbers =(1, 2, 3, 4, 5, 4);
function findBiggestNumber(numbers) {
   for (let i = 0; i < numbers.length; i++) {
   }
   
let maxNumber = 0;
    if (numbers[i] >  maxNumber) {
        maxNumber = numbers[i];
    }

}
console.log(findBiggestNumber(arrayNumbers));

/**
 * 
 * @param {array<number} numbers
 */

function biggestNumber(numbers) {
    let biggest = numbers.negativeInfinity;

    for (let i = 0; i < numbers.length; i++) {
        const number = array[i];

        if (number > biggest) {
            biggest = number;
        }
    }
    return biggest;
}

Array.prototype.max = function() {
    return biggestNumber(this);

}

const person = {
    name: "Anita",
    lastName: "Nersesyan",
    fullName: function() {
        return `"${this.name} ${this.lastName}"`;
}
}

consoloe.log(person.fullName());

const numbersArray = [1, 2, 20, 50, 100, -20];
console.log(numbersArray.max());

const personObj = {
    name: "Anita",
    lastName: "Nersesyan",
    birthYear: 2001,
    age: function () {
        return new Date().getFullYear() - this.birthYear
},

  gender: "Male",
    sayHello: function() {
        return this.gender === "Male" 
        ? `Hello, Mr ${this.name} ${this.lastName}` 
        : `Hello Ms ${this.name} ${this.lastName}`;
    }, 

 
    nameReverse: function() {
        for (let i = this.name.length - i - 1; i > 0; i--) {
            const char = this.name[i];
            reverseName += char;
        }
        return reverseName;
},

}

console.log(personObj.age())


const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 23 },
    { name: "Eva", age: 22 },
    { name: "Frank", age: 20 },
    { name: "Grace", age: 21 },
    { name: "Hannah", age: 21 },
    { name: "Ivy", age: 22 },
    { name: "Jack", age: 20 }
  ];

  function getStudentsByAge() {
    const studentsAge ={};
for (let i = 0; i < students.length; i++) {
    const {age, name} = students[i];

    if (!studentsAge[age]) {
        studentsAge[age] = [name];
    } else {
        studentsAge[age].push(name);
    }
}
 return studentsAge;
  }

  console.log(getStudentsByAge());
  