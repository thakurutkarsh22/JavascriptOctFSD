
// States 

let currentPage = 1;
let lastPage = 100

// SELECTOR 

const movieCardContainer = document.getElementById("movies-card-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const pageNumberButton = document.getElementById("current-page-button");

// --- search selector

const searchButton  = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const sortByDateButton = document.getElementById("sort-by-date");
const sortByRatingButton = document.getElementById("sort-by-rating");


//----  Fetch the movies from certain page..

async function fetchMovie(pageNumber) {
    try {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTMxNDVhOTBkMmQxNzQ4YjhlOWVjMDFlODk1MTA2ZSIsInN1YiI6IjY0OTFkNmJhYzNjODkxMDBhZTUyYjMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpP1DZY3CSd2CRNgf9CSBWOxcaaXupzPo9Wd2r-_G_A'
            }
        };

        const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}`
        const response = await fetch(url, options)
        let data = await response.json();

        // Lets set the Last Page Value

        const {total_pages} = data
        lastPage =total_pages;
        lastPage = 3 // this is for demo purpose remove this for real page disable and page limit

        const changedData = remapData(data)
        renderMovies(changedData)
        return changedData;


    } catch(error) {
        console.log("error iss here");
    }
}

function remapData(data) {
    const moviesList = data.results;
    const modifiedMovieList = moviesList.map(movie => {
        return {
            title: movie.title,
            voteAverage: movie.vote_average,
            posterPath: movie.poster_path,
            popularity: movie.popularity
        }
    })
    return modifiedMovieList;
}

fetchMovie(currentPage)


// ----- rendering the movies ----------- 

function renderMovies(moviesList) {
    
    // Clearing the Older Movies in the Grid Layout  

    movieCardContainer.innerHTML = ""

    moviesList.forEach(movie => {
        const {popularity, posterPath, title, voteAverage} = movie
        
        //  i want to crate a ui of Card \
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card')

        const posterUrl = 'https://image.tmdb.org/t/p/original' + posterPath


        /*
            Instead of the section in inner html you guys can have this code 
            I am not doing it bec i can afford this 
            you cant !!!.
        */
        
        // const posterUrl = 'https://image.tmdb.org/t/p/original' + posterPath

        // const sectionElement =  document.createElement("section")
        // const posterImageElement = document.createElement("img")
        // posterImageElement.src = posterUrl
        // posterImageElement.classList.add('poster')
        
        // sectionElement.appendChild(posterImageElement)
        // cardDiv.appendChild(sectionElement)


        cardDiv.innerHTML = `
            <section>
                <img class="poster" src=${posterUrl} alt="placeholder picture">
            </section>

            <p class="title">
                ${title}
            </p>

            <section class="votes-favorites">

                    <section class="votes">
                        <p class="vote-count">Votes: ${voteAverage}</p>
                        <p class="vote-rating">Rating: ${popularity}</p>
                    </section>

                    <section class="favorites">
                        <i class="fa-regular fa-heart"></i>
                    </section>

                </section>
        `

        // I need to push that UI to the DOM to the Grid container

        const gridContainer = document.getElementById("movies-card-container");
        // console.dir(gridContainer)
        gridContainer.appendChild(cardDiv);


        // document.body.appendChild(cardDiv)

    })
}


// Listners 

prevButton.disabled = true;


nextButton.addEventListener("click", () => {

    currentPage++;

    // Work 1: call API for new Page.

    fetchMovie(currentPage);

    // Work 2: update the page number in the HTML

    pageNumberButton.innerHTML = ` Current Page: ${currentPage}`
    

    if(currentPage === 1) {
        prevButton.disabled = true;
    } else if (currentPage === 2) {
        prevButton.disabled = false;
    } else if(currentPage === lastPage) {
        nextButton.disabled = true;
    }
    

});

prevButton.addEventListener("click", () => {
    currentPage--;
    console.log("current Page Debug", currentPage, lastPage)

    fetchMovie(currentPage);

    pageNumberButton.innerHTML = ` Current Page: ${currentPage}`    


    if(currentPage === 1) {
        prevButton.disabled = true;
    } else if (currentPage === 2 && currentPage !== lastPage -1) {
        prevButton.disabled = false;
    } else if (currentPage === lastPage -1) {
        nextButton.disabled = false;
    }

});


async function searchMovies(movieName) {
    try {

        const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=c13145a90d2d1748b8e9ec01e895106e`

        const response = await fetch(url)
        const data = await response.json();

        const changedData = remapData(data)
        renderMovies(changedData)

    } catch(error) {
        console.log("error iss here");
    }
}

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    searchInput.value = "";

    searchMovies(query)

})


sortByRatingButton.addEventListener("click", async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTMxNDVhOTBkMmQxNzQ4YjhlOWVjMDFlODk1MTA2ZSIsInN1YiI6IjY0OTFkNmJhYzNjODkxMDBhZTUyYjMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpP1DZY3CSd2CRNgf9CSBWOxcaaXupzPo9Wd2r-_G_A'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
      const data = await response.json()
       
      const changedData = remapData(data)
      renderMovies(changedData)
})





