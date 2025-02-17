
/* Remove the item in names that is equal to nameToRemove */

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";

 /* Easy way*/
  names.shift(nameToRemove);
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
  

/* Another way*/
  const NameIndex = names.indexOf(nameToRemove);
  if (NameIndex !== -1) { 
    names.splice(NameIndex, 1); } 
    console.log(names);