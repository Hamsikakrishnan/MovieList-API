const movieName = document.getElementById('movie-name')
const searchBtn = document.getElementById('search-button')
const searchedMovies = document.getElementById('search-movies-display')
searchBtn.addEventListener('click', async function(){
    const movie = movieName.value
    const res = await fetch(`http://www.omdbapi.com/?&s=${movie}`)
    const data = await res.json()
    // const movies = [{
    //     Poster: "https://m.media-amazon.com/images/M/MV5BMTkxNTk5OTg1MV5BMl5BanBnXkFtZTcwNTk5MzM0MQ@@._V1_SX300.jpg",
    //     Title: "Elvis and Anabelle",
    //     Type: "movie",
    //     Year: "2007",
    //     imdbID: "tt0787462"
    // }]
    console.log(data)
    
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