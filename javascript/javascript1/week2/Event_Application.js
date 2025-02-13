/* You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"
You should get the today's day from the system.

Hint: use remainder operator, array indexes and investigate new Date in js.*/


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   

function getEventWeekday(daysFromToday) {
    let today = new Date();
    let todayIndex = today.getDay();
    let eventIndex = (todayIndex + daysFromToday) % 7;
    return weekDays[eventIndex];          

}   

console.log(getEventWeekday(9));
console.log(getEventWeekday(0));
console.log(getEventWeekday(5));


