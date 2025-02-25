/* Create a function called getReply(command). The function should return a response that corresponds to the command!

These are the commands you should be able to give the voice assistant:

Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?

What is my name - should respond with the name of the person. What if the name has not yet been mentioned?

Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos

Add singing in the shower to my todo - Should add singing in the shower to a list of todos

Remove fishing from my todo - Should respond with "Removed fishing from your todo"

What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower

What day is it today? - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019

Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48

Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!*/


let userName = ""; 
let toDoArray = []; 
let timerMinutes; 
const millisecondsInAMinute = 60000;

function getReply(command) {
    if (command.startsWith("Hello my name is ")) {
        const savedName = command.replace("Hello my name is ", ""); 

        if (savedName === "") {  
            return "Please tell me your name"; 
        }

        if (userName === savedName) {
            return `You already told me your name is ${userName}!`;
        }

        userName = savedName;
        return `Nice to meet you, ${userName}`;

    } 

    else if (command === "What is my name?") { 
        if (userName) {
            return `Your name is ${userName}`;
        } else {
            return "I don't know your name.";
        }
    }
    
    if (command === "Add fishing to my todo") {
        toDoArray.push("fishing");
        return "Fishing added to your todo.";
    }

    if (command === "Add singing in the shower to my todo") {
        toDoArray.push("singing in the shower");
        return "Singing in the shower added to your todo.";
    }

    if (command === "Remove fishing from my todo") {
        for (let i = 0; i < toDoArray.length; i++) {
            if (toDoArray[i] === "fishing") { 
                toDoArray.splice(i, 1);
                return "Removed fishing from your todo."; 
            }
        }
    }

    if (command === "What is on my todo?") {
        return toDoArray.join(", ");
    }

    if (command === "What day is it today?") {
        let today = new Date();
        let day = today.getDate();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[today.getMonth()];
        let year = today.getFullYear(); 

        return `${day}. of ${month}. of ${year}`;
    }


    if (command.startsWith("What is ")) {
        if (command.includes("+")) {
            let numbers = command.replace("What is ", "").split(" + "); 
            let sum = parseInt(numbers[0]) + parseInt(numbers[1]);
            return sum;

        } else if (command.includes("-")) {
            let numbers = command.replace("What is ", "").split(" - "); 
            let difference = parseInt(numbers[0]) - parseInt(numbers[1]);
            return difference;

        } else if (command.includes("*")) {
            let numbers = command.replace("What is ", "").split(" * "); 
            let product = parseInt(numbers[0]) * parseInt(numbers[1]);
            return product;

        } else if (command.includes("/")) {
            let numbers = command.replace("What is ", "").split(" / "); 
            let quotient = parseInt(numbers[0]) / parseInt(numbers[1]);
            return quotient;
        }
    }

    if (command.startsWith("Set a timer for ")) {
        let minutesText = command.replace("Set a timer for ", ""); 
        let minutes = parseInt(minutesText); 
    
        if (isNaN(minutes) || minutes <= 0) { 
            return "Please provide a valid number of minutes.";
        }
    
        setTimeout(function () {
            console.log("Timer done!"); 
        }, minutes * millisecondsInAMinute); 
    
        return `Timer set for ${minutes} minutes.`;
    }

    return "I don't understand that command.";
}



console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("Hello my name is Anita")); 
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Anita"));
console.log(getReply("Hello my name is")); // Not sure why this does not work
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 2 + 2?"));
console.log(getReply("What is 10 - 5?"));
console.log(getReply("What is 12 * 2?"));
console.log(getReply("What is 100 / 10?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Set a timer for 20 minutes"));

 

 
