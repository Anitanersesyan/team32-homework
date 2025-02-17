/* Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years.

Create a function that logs out the following text using the seriesDurations array:

Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life

In total that is 0.2% of my life
*/

const age = 80; 
const seriesDurations = [
    {
        title: "Suits",
        days: 3,
        hours: 21,
        minutes: 48,
    },
    {
        title: "The Blacklist",
        days: 6,
        hours: 8,
        minutes: 36,
    },
    {
        title: "The Good Doctor",
        days: 3,
        hours: 18,
        minutes: 18,
    },
];
  
function logOutSeriesText() {
    let totalPercentage = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        let totalMinutes = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
        let percentage = (totalMinutes / (age * 365 * 24 * 60)) * 100;
        totalPercentage += percentage;
        console.log(`${seriesDurations[i].title} took ${percentage.toFixed(2)}% of my life`);
    }
    console.log(`In total that is ${totalPercentage.toFixed(2)}% of my life`);
}

logOutSeriesText();  

