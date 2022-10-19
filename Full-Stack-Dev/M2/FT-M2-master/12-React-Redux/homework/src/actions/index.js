const Apikey = '75cea14c';

export function addMovieFavorite(payload) { // payload ---> Pelicula a agregar a favoritos
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload
    };
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${Apikey}&s=${titulo}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_MOVIES", payload: json });
            });
    };
}

export function removeMovieFavorite(idMovie) {
    return { 
        type: "REMOVE_MOVIE_FAVORITE",
        payload: idMovie
    };
}

export function getMovieDetail(idMovie) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${Apikey}&i=${idMovie}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ 
                type: "GET_MOVIE_DETAIL", 
                payload: json 
            });
        });
    };
}
