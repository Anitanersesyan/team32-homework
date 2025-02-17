/* Write a function where you speficy your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes. */


const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime() {
    const travelTime = travelInformation.destinationDistance / travelInformation.speed;
    const hours = Math.floor(travelTime);
    const minutes = Math.round((travelTime - hours) * 60);
    return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime()
console.log(travelTime); // 8 hours and 38 minutes 