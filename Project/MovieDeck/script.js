




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

        data = remapData(data)

        console.log(data, "data debug")

        renderMovies(data)

        return data;


    } catch(error) {
        console.log("error iss here");
    }
}

function remapData(data) {

    const moviesList = data.results;

    console.log(moviesList, "movie list is here")

    const modifiedMovieList = moviesList.map(movie => {
        return {
            title: movie.title,
            voteAverage: movie.vote_average,
            posterPath: movie.poster_path,
            popularity: movie.popularity
        }
    })

    console.log(modifiedMovieList, "modifiedMovieList list is here")


    return modifiedMovieList;

}

fetchMovie(1)


// ----- rendering the movies ----------- 

function renderMovies(moviesList) {
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
        console.dir(gridContainer)
        gridContainer.appendChild(cardDiv);


        // document.body.appendChild(cardDiv)

    })
}
