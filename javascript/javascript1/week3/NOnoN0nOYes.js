/*Create a variable called notes and assign it to an empty array. Create a function called saveNote. The saveNote has two parameters:

content parameter is a string.
id is a number.
The saveNote function should push an object to the notes array with the keys content and id. Here is an example


/*Create a function called getNote. The function has one parameter called id. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string. Hint: Use a for loop. */ 

/* Create a function logOutNotesFormatted. When calling the function it should log this string out for every note: "The note with id: 1, has the following note text: "some example note" */

const notes = [];

function saveNote(content, id) {
    // write some code here
    notes.push({
        content: content,
        id: id,
    });
  
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      }
    }
  
    console.log("No note found");
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}


function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
    }
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry
