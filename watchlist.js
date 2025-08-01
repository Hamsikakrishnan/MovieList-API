const watchList = document.getElementById('watchlist-movies')
let addedMovies = JSON.parse(localStorage.getItem('addedmovies')) || []
const defaultPoster = "https://www.reelviews.net/resources/img/default_poster.jpg"; 

watchList.addEventListener('click', function(e){
    if(e.target.id){
        addedMovies = addedMovies.filter(movie =>{
            return e.target.id != movie.imdbID
        })
        localStorage.setItem('addedmovies', JSON.stringify(addedMovies))
        render()
    }
})
function render(){
    let html = ``
    addedMovies.forEach(movie =>{
        let Poster = (movie.Poster && movie.Poster !== "N/A") ? movie.Poster : defaultPoster
                html += `<div class="pl-5">
                <div class="flex rounded items-center max-w-2xl pb-5">    
                    <img class="h-40 rounded"
                         src="${Poster}"
                         onerror="this.onerror=null;this.src='${defaultPoster}'"/>
                    <div class="pl-5 rounded-lg">
                        <div class="flex items-center ">
                            <h1 class="text-2xl">${movie.Title}&nbsp&nbsp&nbsp&nbsp</h1>
                            <div class="flex items-center text-sm text-gray-700">
                                <p>⭐</p>
                                <p>${movie.imdbRating}</p>
                            </div>
                        </div>
                        <div class="flex items-center text-lg text-gray-600">
                            <p>${movie.Runtime} &nbsp&nbsp</p>
                            <p>${movie.Genre} &nbsp&nbsp</p>
                            <button id=${movie.imdbID} class="text-gray-900 text-sm font-bold">Remove </button>
                        </div>
                        <div class="text-sm text-gray-700">
                            <p>Starring: ${movie.Actors}</p>
                        </div>
                        <div class="max-w-2xl text-gray-700 text-sm">
                            <p>${movie.Plot}</p>
                        </div>
                        <div class="font-light text-gray-600 text-sm">
                            <p>${movie.Country}</p>
                        </div>
                    </div>
         </div>
         </div>
        `
    })
    watchList.innerHTML = html
}
render()
