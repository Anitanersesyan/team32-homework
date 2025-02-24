/* Create a variable called activities that stores all activities of the day.  
Create a function called addActivity. 
It should have three parameters: date, activity and duration. 
The date should be a string, the activity a string and the duration a number. To save the activity push an object that contains the date, the activity and the duration to the activities variable.

Create a function called showStatus. This function should use the activities variable and return a string saying the following: "You have added 3 activities. They amount to 78 min. of usage" 
Now what happens if we call showStatus and activities is empty? We need to take that into consideration: If activities is empty log out a string that says: "Add some activities before calling showStatus"

When showStatus is called and the users usage is above the limit he set. Log out the following string: "You have reached your limit, no more smartphoning for you!"

Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is. Check out this link: https://stackoverflow.com/a/34015511

Improve the showStatus function by only showing the number of actitivies for that specific day.
Create a function for calculating the activity a user has spent the most time on.*/


const activities = [];

function addActivity(date, activity, duration) {
       if (!date || !activity || !duration) {
        console.log("Please provide a date, activity, and duration");
        return;
    }


    let formattedDate;
    if (typeof date === "string") {
        formattedDate = date;
    } else {
        formattedDate = new Date(date).toDateString();
    }

    let formattedActivity;
if (typeof activity === "string") {
    formattedActivity = activity;
} else {
    console.log ("Please provide the activity");
    return;
}

    let formattedDuration;
    if (typeof duration === "number") {
        formattedDuration = duration;
    } else {
        console.log("Please provide the duration in minutes");
        return;
    }

    activities.push({
        date: formattedDate,
        activity: formattedActivity,
        duration: formattedDuration,
    });
}



function showStatus(date = new Date().toLocaleDateString("en-US")) {    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }

    let totalDuration = 0;
    for (let activity of activities) {
        totalDuration += activity.duration;
    }

    console.log(`You have added ${activities.length} activities on ${date}. They amount to ${totalDuration} min. of usage`);

    const timeLimit = 100;
    if (totalDuration > timeLimit) {
        console.log("You have reached your limit, no more smartphoning for you!");
        
    }
}

/*Extra feature that calculates the average duration for each activity, (not sure if its very useful tho)*/
function averageDuration() {
    let totalDuration = 0;
    for (let activity of activities) {
        totalDuration += activity.duration;
    }

    let averageDuration = totalDuration / activities.length;
    console.log(`On average you spent ${averageDuration.toFixed(2)} min. per activity.`);
}


addActivity()
addActivity("2023-01-01", "YouTube", 30);
addActivity("2023-01-01", "TikTok", ); 
addActivity("2023-01-02", "Facebook", 45);
addActivity("2023-01-03", "Instagram", 60); 


showStatus();
averageDuration(); 








