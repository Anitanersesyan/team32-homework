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


/* Movie display*/

const moviesDescription = [
    {
        id: 1,
        title: 'Interstellar',
        description:
          'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        movie_year: 2014,
        genre: ['Adventure', 'Drama', 'Science Fiction'],
        director: "Christopher Nolan",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Casey Affleck", "Mackenzie Foy", "John Lithgow", "Ellen Burstyn", "Matt Damon"],
        poster_url:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        price: '120.00',
    },
]


/* Get references to elements */
const moviesDisplay = document.getElementById('movies');
const movieDetails = document.getElementById("movie-details");

// Loop through each movie and create a card
moviesDescription.forEach(function (movie) {
    // Create a new div for the movie card
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");


    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster_url;
    moviePoster.alt = movie.title;


    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;


    const movieInfo = document.createElement("p");
    movieInfo.textContent = movie.genre.join(", ") + " " + movie.movie_year;

    /* Attach elements inside movie card */
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieInfo);

    /* Function to handle clicking on a movie */
    function handleMovieClick() {
        toggleDetails(movie);
    }

    /* Attach the event listener */
    movieCard.addEventListener("click", handleMovieClick);

    /* Add movie card to the main movie display */
    moviesDisplay.appendChild(movieCard);
});

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
    document.getElementById("details-year").textContent = `Year: ${movie.movie_year}`;
    document.getElementById("details-genre").textContent = `Genre: ${movie.genre.join(", ")}`;
    document.getElementById("details-director").textContent = `Director: ${movie.director}`;
    document.getElementById("details-cast").textContent = `Cast: ${movie.actors.join(", ")}`;
    document.getElementById("details-description").textContent = movie.description;
    document.getElementById("details-poster").src = movie.poster_url;
    document.getElementById("details-price").textContent = `Price: ${movie.price}`;

    /*     // Reset star colors when opening a new movie */
    document.querySelectorAll(".star").forEach(star => star.classList.remove("active"));

}

/* Close the details window */
function closeDetails() {
    movieDetails.classList.remove("show");
}

/* Close details when clicking outside the movie details panel */
function handleOutsideClick(event) {
    let clickedInsideDetails = movieDetails.contains(event.target); // Did the user click inside the details?
    let clickedOnMovieCard = event.target.closest(".movie-card"); // Did the user click a movie card?

    /* If the user clicked outside both, close the details */
    if (!clickedInsideDetails && !clickedOnMovieCard) {
        closeDetails();
    }
}

/* Listen for clicks anywhere on the page */
document.addEventListener("click", handleOutsideClick);

window.closeDetails = closeDetails;

/* Star-rating*/
document.addEventListener("DOMContentLoaded", function () {
    let stars = document.querySelectorAll(".star"); // Get all stars

    stars.forEach(star => {
        star.addEventListener("click", function () {
            let selectedRating = this.dataset.value; // Get the clicked star value
            console.log("Star clicked:", selectedRating); // Debugging output

            // Highlight the correct stars
            stars.forEach(s => {
                if (s.dataset.value <= selectedRating) {
                    s.classList.add("active"); // Turns gold
                } else {
                    s.classList.remove("active"); // Resets color
                }
            });
        });
    });
});

