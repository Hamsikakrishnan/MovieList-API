const movieName = document.getElementById('movie-name')
const searchBtn = document.getElementById('search-button')
const searchedMovies = document.getElementById('search-movies-display')
 const defaultPoster = "https://www.reelviews.net/resources/img/default_poster.jpg";
searchBtn.addEventListener('click', async function(){
    const movie = movieName.value
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
    const data = await res.json()
    console.log(data)
    if(data.Search){
        const movies = data.Search
        let moviesData = []
        let moviesDataDetails = movies.map(async function(movieName){
                const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieName.imdbID}`)
                const data = await res.json()
                return data
        })
        moviesData = await Promise.all(moviesDataDetails)
        console.log(moviesData) 
        render(moviesData)
    }
    else{
        console.log("Try for a different movie")
    }
    movieName.value = ''
})
function renderMovies(movies){
    let html = ``
    movies.forEach(movie =>{
        let Poster = (movie.Poster && movie.Poster !== "N/A") ? movie.Poster : defaultPoster
                html += `<div class="pl-5">
                <div class="flex rounded items-center max-w-2xl pb-5">    
                    <img class="h-40 rounded"
                         src="${Poster}"
                         onerror="this.onerror=null;this.src='${defaultPoster}'"/>
                    <div class="pl-5 rounded-lg">
                        <div class="flex items-center pt-1">
                            <h1 class="text-2xl">${movie.Title}&nbsp&nbsp&nbsp&nbsp</h1>
                            <div class="flex items-center">
                                <p>⭐</p>
                                <p>${movie.imdbRating}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <p>${movie.Runtime} &nbsp&nbsp</p>
                            <p>${movie.Genre} &nbsp&nbsp</p>
                            <button>Add to Watchlist </button>
                        </div>
                        <div>
                            <p>${movie.Actors}</p>
                        </div>
                        <div class="max-w-2xl">
                            <p>${movie.Plot}</p>
                        </div>
                        <div>
                            <p>${movie.Country}</p>
                        </div>
                    </div>
         </div>
         </div>
        `
    })
    return html
}
function render(movies){
    searchedMovies.innerHTML = renderMovies(movies)
}


// Actors
// : 
// "Allu Arjun, Fahadh Faasil, Rashmika Mandanna"
// Awards
// : 
// "25 wins & 13 nominations total"
// BoxOffice
// : 
// "$1,320,000"
// Country
// : 
// "India"
// DVD
// : 
// "N/A"
// Director
// : 
// "Sukumar"
// Genre
// : 
// "Action, Crime, Drama"
// Language
// : 
// "Telugu"
// Metascore
// : 
// "N/A"
// Plot
// : 
// "A labourer rises through the ranks of a red sandalwood smuggling syndicate, making some powerful enemies in the process."
// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BOWE4YWEyNjYtMWFiNC00M2IzLWE3ZGMtMjQ0ZGEyOWI1YjAzXkEyXkFqcGc@._V1_SX300.jpg"
// Production
// : 
// "N/A"
// Rated
// : 
// "Not Rated"
// Ratings
// : 
// [{…}]
// Released
// : 
// "17 Dec 2021"
// Response
// : 
// "True"
// Runtime
// : 
// "179 min"
// Title
// : 
// "Pushpa: The Rise - Part 1"
// Type
// : 
// "movie"
// Website
// : 
// "N/A"
// Writer
// : 
// "Sukumar, Srikanth Vissa, Hussain Sha Kiran"
// Year
// : 
// "2021"
// imdbID
// : 
// "tt9389998"
// imdbRating
// : 
// "7.6"
// imdbVotes
// : 
// "97,231"