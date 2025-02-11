/* Flight booking fullname function

When a user books a flight they write their firstname and surname, but when the ticket is printed a fullname should be displayed. It is our responsibility to create that.

Create a function called getFullname that returns a fullname. It should have two parameters: firstname and surname.

getFullname("Benjamin", "Hughes"); // returns "Benjamin Hughes"
Now try to create two variables fullname1 and fullname2 these two variables should be assigned to calling the getFullname function.

Log out the two fullname variables.

Formal fullname
On the flight website the user has the possibility to check a checkbox that indicates if the user wants to be adressed formally. Lets also change getFullname to include support for formal name.

Create an extra parameter useFormalName that is a boolean. If it is true the function should add a Lord in front of the name.

getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
What do we do if useFormalName is not given as an argument?

Remember to consider someone calling the function with an empty string as firstname and lastname.

But what if the person is a woman? Describe how you would fix the getFullname so it also works for women*/


const firstName = "";
const lastName = ""; 
const useFormalName = true;
const gender = "";
function getFullname(firstName, lastName, useFormalName, gender) {

    if (!firstName || !lastName){   
        return "Please enter your first name and last name.";
    }
   
    if (useFormalName) {
        if (gender === "male") { 
            return `Lord ${firstName} ${lastName}`;
        }
        else {
        return `Lady ${firstName} ${lastName}`;
        }
    } 
    return `${firstName} ${lastName}`; 
    }
  

const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Oliver", "Nielsen", false);
const fullname3 = getFullname( );
const fullname4 = getFullname("Helena", "");
const fullname5 = getFullname("", "");
const fullname6 = getFullname("", "Larsen");
const fullname7 = getFullname("Lucas", "Olsen", true, "male");
const fullname8 = getFullname("Anna", "Toft", true, "female");


console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);
console.log(fullname7);
console.log(fullname8);
