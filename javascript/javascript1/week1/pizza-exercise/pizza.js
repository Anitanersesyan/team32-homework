console.log("I love pizza");


function placeOrder() {
    // <---------- PART 1 ---------->
    /*
        Create a variable to store the name of your favourite pizza.
        value --> document.getElementById('pizzaName').value
    */
let pizzaName = document.getElementById("pizzaName").value;


    /*
        Create a variable to store the price of the pizza
        value --> parseFloat(document.getElementById('pizzaPrice').value);
    */

let pizzaPrice = parseFloat(document.getElementById("pizzaPrice").value);

    /*
        Create a variable to show the pizza man the entire pizza order in a language he understands
        eg. like this: New pizza order: <name of pizza>. The price of the pizza is:  <price of pizza>
    */


let pizzaOrder = ` New pizza order: ${pizzaName}. The price of the pizza is:  ${pizzaPrice}`;
    // <---------- PART 2 ---------->

    /*
        Create a new variable to store the amount of pizzas you would like to order
        value -> parseInt(document.getElementById('pizzaQuantity').value)

    */
let pizzaQuantity = parseInt(document.getElementById('pizzaQuantity').value);

/*
        Create a new variable to store whether or not you would to order a family size pizza.
        value --> document.getElementById('familySize').checked
    */

 const isFamilySize =  document.getElementById('familySize').checked;

    /*
        Now write a formula to calculate the total price of your pizza order, 
        and save it in a variable called totalPrice 
        (if the pizza is family size the prize of the pizza is doubled).
    */

    
        let totalPrice = pizzaPrice * pizzaQuantity;
    
        if(isFamilySize) {
            totalPrice = (pizzaPrice * pizzaQuantity) * 2;
        }
    /*
        Modify the variable for the pizza man so it includes wether or not the pizza is family size,
        and now show the total price of the order 
        New pizza order: <amount of pizzas> <family or not?> <name of pizza>. Total cost for the order is:  <total price>
    */

        let orderMessage = `New pizza order: ${pizzaQuantity} ${isFamilySize ?  `FAMILY SIZE` : `REGULAR SIZE`} ${pizzaName}. Total cost for the order is : ${totalPrice}`;

    /*
        Try to change the price of the pizza and if the pizza should be family size,
        and then check if the total price is calculated correctly.
    /*


    // <---------- PART 1 AND 2 ---------->
    /*
        Assign the following statement to the variable that is storing the order message for the pizza man:

        document.getElementById('orderSummary').innerHTML

        The statement should have the value of your variable.
    */

    orderMessage = document.getElementById("orderSummary").innerHTML = "New pizza order: " + pizzaName  + ". The price of the pizza is: " + totalPrice;

}

