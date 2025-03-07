
import { movies } from "./moviesList.js";

/* Dropdown menu functionality setup */
function setupDropdown() {
    let dropdownButton = document.querySelector(".dropdownContent");
    let dropdownMenu = document.querySelector(".dropdownMenu");

   
    dropdownButton.addEventListener("click", function () {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none"; // Hide the menu
        } else {
            dropdownMenu.style.display = "block"; // Show the menu
        }
    });

    /* If the user clicks anywhere outside the dropdown, close the dropdown */
    document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
}

setupDropdown();


//* MOVIES GRID

function displayMoviesGrid() {
    const cardContainer = document.getElementById('card-container');

    // Calculating grid dimensions, depending on the min/max coordinate values
    const minX = Math.min(...movies.map(m => m.coordinates.x));
    const maxX = Math.max(...movies.map(m => m.coordinates.x));
    const minY = Math.min(...movies.map(m => m.coordinates.y));
    const maxY = Math.max(...movies.map(m => m.coordinates.y));

    //Seting grid size
    const gridWidth = maxX - minX + 1;
    const gridHeight = maxY - minY + 1;

    // Applying CSS Grid to the cardContainer
    cardContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 350px)`;
    cardContainer.style.gridTemplateRows = `repeat(${gridHeight}, 600px)`;

    // Create movie cards
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = 
            `<h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <img src="${movie.poster_url}" alt="${movie.title}">`;

        // Calculating card position on the Grid
        const gridColumn = movie.coordinates.x - minX + 1;
        const gridRow = movie.coordinates.y - minY + 1;

        //Assigning calculated values to the CSS Grid
        card.style.gridColumn = gridColumn;
        card.style.gridRow = gridRow;

        //Click Listener
        card.addEventListener('click', () => toggleDetails(movie));
        cardContainer.appendChild(card);

    });

    //* Display All movies on the grid in console 

    //Creates a grid with empty cells
const consoleGrid = Array(gridHeight).fill().map(() => Array(gridWidth).fill('.'));

movies.forEach((movie) => {
    const x = movie.coordinates.x - minX;
    const y = movie.coordinates.y - minY;
    consoleGrid[y][x] = String(movie.id);
});

consoleGrid.forEach((row) => console.log(row.join(' ')));

    // Center the grid after rendering
    setTimeout(() => {
        const centerX = (cardContainer.scrollWidth - cardContainer.clientWidth) / 2;
        const centerY = (cardContainer.scrollHeight - cardContainer.clientHeight) / 2;
        cardContainer.scrollTo(centerX, centerY);
    }, 100);
}


//! Grouped all the Details functions under movieDetailsPanel()
function movieDetailsPanel() {
    const movieDetails = document.getElementById('movie-details');

    /* Sliding window */
    function toggleDetails(movie) {
        if (movieDetails.classList.contains("show")) {
            closeDetails(); // Close if already open
        } else {
            openDetails(movie);
        }
    }

    /* Open sliding window */
    function openDetails(movie) {
        movieDetails.classList.add("show");
        document.getElementById("details-title").textContent = movie.title;
        document.getElementById("details-year").textContent = `Year: ${movie.movieYear}`;
        document.getElementById("details-genre").textContent = `Genre: ${movie.genre?.join(", ") || ''}`;
        document.getElementById("details-director").textContent = `Director: ${movie.director}`;
        document.getElementById("details-cast").textContent = `Cast: ${movie.actors?.join(", ") || ''}`;
        document.getElementById("details-description").textContent = movie.description;
        document.getElementById("details-poster").src = movie.poster_url;
    }

    /* Close the details window */
    function closeDetails() {
        movieDetails.classList.remove("show");
    }

    /* Close details when clicking outside the movie details panel */
    //! Combined the function and the event listener in one (v)
    document.addEventListener('click', (event) => {
        const clickedInsideDetails = movieDetails.contains(event.target);   // Did the user click inside the details?
        const clickedOnCard = event.target.closest('.card');    // Did the user click a movie card?
        
        /* If the user clicked outside both, close the details */
        if (!clickedInsideDetails && !clickedOnCard) {
            closeDetails();
        }
    });

    //! Return for the movieDetailsPanel()
    return {
        toggleDetails,
        closeDetails
    };
}

//! In global scope, extracting the functions, assigning them to variables 
const { toggleDetails, closeDetails } = movieDetailsPanel();
window.closeDetails = closeDetails; 


//* SCREEN DRAG FUNCTIONS

function screenDrag() {
    const container = document.getElementById('card-container');
    let isDragging = false;
    let startX, startY;         // Position of grab
    let scrollLeft, scrollTop;  // How much scrolled

    container.addEventListener('mousedown', (dragEvent) => {
    dragEvent.preventDefault();      // Prevent from selecting text and images  while dragging
    isDragging = true;
        startX = dragEvent.pageX - container.offsetLeft; // Drag start position 
        startY = dragEvent.pageY - container.offsetTop;
        scrollLeft = container.scrollLeft; // Current scroll position of the container
        scrollTop = container.scrollTop;
    });
    
    container.addEventListener('mouseup', () => isDragging = false);    //Stop dragging if mouse is released 
    container.addEventListener('mouseleave', () => isDragging = false);

    container.addEventListener('mousemove', (dragEvent) => {
        if (!isDragging) return;    
        const x = dragEvent.pageX - container.offsetLeft;
        const y = dragEvent.pageY - container.offsetTop;
        const walkX = (x - startX) * 1.5;   // Dragging speed + Multiplier
        const walkY = (y - startY) * 1.5;   // Dragging speed + Multiplier
        container.scrollLeft = scrollLeft - walkX;
        container.scrollTop = scrollTop - walkY;
    });
}

/* Star-rating */
document.addEventListener("DOMContentLoaded", function () {
    let stars = document.querySelectorAll(".star"); /*Get all the star elements */
    let selectedRating = 0; /* Keeps track of the selected rating */

     /* Loops through each star to update its appearance based on the selected rating */
    function updateStarHighlight(rating) { 
        stars.forEach(star => {
            if (star.dataset.value <= rating) {
                star.classList.add("active"); /*highlights it */
            } else {
                star.classList.remove("active"); // Unhighlight
            }
        });
    }
  
    stars.forEach(star => {
        star.addEventListener("click", function () {
            /*When a star is clicked, get its rating value */
            selectedRating = this.dataset.value; 
            updateStarHighlight(selectedRating);
        });
    });

    /* Reset the star rating for a new movie card */
    let cardContainer = document.getElementById("card-container");
    
    cardContainer.addEventListener("click", function (event) {
        let clickedCard = event.target.closest(".card"); /* Check if the clicked element is inside a movie card */

        if (clickedCard) { 
            selectedRating = 0; 
            updateStarHighlight(selectedRating); /* Clear the stars' highlights */
        }
    });
});


displayMoviesGrid();

screenDrag();

