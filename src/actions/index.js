import { MOVIES, DETAILS, REVIEWS, FAVOURITES } from '../constants/index'

/* 
    Movies actions 
*/
export const loadMovies = () => ({
    type: MOVIES.LOAD
})

export const setMovies = movies => ({
    type: MOVIES.LOAD_SUCCESS,
    movies
})

export const setErrorMovies = error => ({
    type: MOVIES.LOAD_FAIL,
    error
})

/* 
    Movie details actions 
*/
export const loadMovieDetails = () => ({
    type: DETAILS.LOAD
})

export const setMovieDetails = (id, details) => ({
    type: DETAILS.LOAD_SUCCESS,
    id,
    details
})

export const setErrorMovieDetails = error => ({
    type: DETAILS.LOAD_FAIL,
    error
})

/* 
    Movie reviews actions 
*/
export const loadMovieReviews = () => ({
    type: REVIEWS.LOAD
})

export const setMovieReviews = (id, reviews) => ({
    type: REVIEWS.LOAD_SUCCESS,
    id,
    reviews
})

export const setErrorMovieReviews = error => ({
    type: REVIEWS.LOAD_FAIL,
    error
})


/* 
    Favourite actions 
*/
export const addFavourites = (id, data) => ({
    type: FAVOURITES.ADD,
    id,
    data
})

export const removeFavourites = id => ({
    type: FAVOURITES.REMOVE,
    id
})





