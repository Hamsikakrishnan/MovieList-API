const movieName = document.getElementById('movie-name')
const searchBtn = document.getElementById('search-button')
const searchedMovies = document.getElementById('search-movies-display')
searchBtn.addEventListener('click', async function(){
    const movie = movieName.value
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
    const data = await res.json()
    console.log(data)
    if(data.Search){
        const movies = data.Search
        const moviesData = []
        movies.forEach(async function(movieName){
                const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieName.imdbID}`)
                const data = await res.json()
                moviesData.push(data)
        })
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
        html += ``
    })
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