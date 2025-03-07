function changeLogo() {
    let logo = document.getElementById('logo');
    logo.src = "https://assets.fontsinuse.com/static/use-media-items/15/14246/full-2048x768/56fc6e1d/Yahoo_Logo.png?resolution=0";
  
    logo.width = '100';

    let newTitle = document.createElement('h1');
    newTitle.innerHTML = 'My new title'; // <h1>My new title</h1>
  
    document.body.appendChild(newTitle);
  }
  
  changeLogo();

  // change the event type
document.querySelector('button').addEventListener('click', function(event) {
  // what does the event do?
  document.body.style.backgroundColor = 'red';
  this.textContent = "Button clicked";
});

/*With js select a ul in the DOM. You add the ul to the html file.

Now loop through each element of the favorite dishes array, you create an li element and set the text to the favorite dish.

Then append the li element to the ul element. */

const favoriteDishes = ["Pizza", "Burger", "Pasta", "Tacos"];

const ul = document.createElement('ul');

document.body.appendChild(ul);

for (let i = 0; i < favoriteDishes.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = favoriteDishes[i];
  ul.appendChild(li);
}

console.log(favoriteDishes);



const podcasts = [{
  name: 'The mystery om of Johan Klausen Varbourg',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'Tips about dogs with small legs',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'You, me, we and us',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'Breakfast news - Dinner edition'
}
];

const ul2 = document.createElement('ul');

document.body.appendChild(ul2);

for (let i = 0; i < podcasts.length; i++) {
  const li = document.createElement('li');
  const h1 = document.createElement('h1');
  h1.innerHTML = podcasts[i].name;
  li.appendChild(h1);

  if(document.createElement('img')) {
    const img = document.createElement('img');
    img.src = podcasts[i].imageUrl;
    li.appendChild(img);
  }

  ul2.appendChild(li);
}

const h1 = document.querySelector();
h1.appendChild(ul);


/* Create a function that has two parameters: imageUrl and elementToAppendImageTo. The function should create an img tag and set the src attribute of the img to the imageUrl parameter. The function should then append the img to the elementToAppendImageTo - html element.*/




function addImage(imgUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = 'https://picsum.photos/536/354';
  img.scr = imgUrl;
  elementToAppendImageTo.appendChild(img);
}
addImage('https://picsum.photos/536/354', document.body);

const insertImg = (imageUrl, elementToAppendImageT) => {
  const img = document.createElement("img");
  img.src = imageUrl;
  elementToAppendImageT.appendChild(img);
};
insertImg("https://picsum.photos/536/354", document.querySelector("body"));


/* Clicking a button should toggle the background color of the body and the text color in the page. If the background is white and the text is black, then clicking the button will make the background dark and the text white and vice versa

Optional also make the text on the button change*/


const clicker = document.createElement("button");
clicker.innerText = "Click me";
document.body.appendChild(clicker);
clicker.addEventListener("click", function (event) {
  if ((document.body.style.background = "white")) {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else if ((document.body.style.background = "black")) {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});








