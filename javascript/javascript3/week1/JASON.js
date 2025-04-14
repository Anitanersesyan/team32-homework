/* Imagine your are running a meal ordering website. Orders come in from the web and we need to store them in a json file. Create a json file with two orders that contain at least these things:

Order name
Order id
Price
List of drinks
Order extras (fx cheese, lettuce etc.)
Think about what what type the data should be saved as! */

let orders = {
    order1: {
        "orderName": "Big Mac",
        "orderId": 1,
        "price": 50,
        "drinks": ["Coke", "Sprite"],
        "extras": ["Cheese", "Lettuce"]
    },
    order2: {
        "orderName": "Pizza",
        "orderId": 2,
        "price": 80,
        "drinks": ["Coke", "Sprite"],
        "extras": ["Cheese", "Lettuce"]
    }
};
       

let ordersArray = [
     {
        "orderName": "Big Mac",
        "orderId": 1,
        "price": 50,
        "drinks": ["Coke", "Sprite"],
        "extras": ["Cheese", "Lettuce"]
    },

 {
        "orderName": "Pizza",
        "orderId": 2,
        "price": 80,
        "drinks": ["Coke", "Sprite"],
        "extras": ["Cheese", "Lettuce"]
    }
]

let Order = {
        "orderName": "Big Mac",
        "orderId": 1,
        "price": 50,
        "drinks": ["Coke", "Sprite"],
        "extras": {
            "name": "Cheese",
            "price": 10,
            "ready": true
        }

    }


 /* Use this api to fetch how many astronauts are currently in spaces.

Add the following text to the DOM, using the data about astronauts:

There are NUMBER_OF_ASTRONAUTS astronauts in space, they are:
ASTRONAUT_NAME1
ASTRONAUT_NAME2
ASTRONAUT_NAME3
ASTRONAUT_NAME4
ASTRONAUT_NAME5

An example with 2 astronauts could be:

There are 2 astronauts in space, they are:
Benjamin Hughes
Jørgen Pedersen */

fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => {
     
        const astronautNames = data.people.map(astronaut => astronaut.name);
        const namesString = astronautNames.join("<br>");
    
        document.getElementById('astronauts-info').innerHTML = `
            <b>There are ${data.number} astronauts in space, they are: </b><br>
            ${namesString}`;
    });

    /* Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random

Get a random dog image and display it in the browser
Get a new image every 2 sec.
Get the list of all breeds from https://dog.ceo/api/breeds/list/all
Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
Display the name of the breed under the image*/


fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let image = document.createElement("img");
        image.src = data.message;
        document.body.appendChild(image);

        setInterval(() => {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    image.src = data.message;
                });
        }, 2000);
    })

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let breeds = Object.keys(data.message);
        console.log(breeds);

        fetch(`https://dog.ceo/api/breed/[BREEDNAME]/images/random`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let image = document.createElement("img");
            image.src = data.message;
            document.body.appendChild(image);
            let name = document.createElement("h1");
            name.innerHTML = [data.message]; 
            document.body.appendChild(name);
        })
    })
