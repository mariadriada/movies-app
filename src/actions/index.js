import { APP, MOVIES } from '../constants/index'

export const appLoad = () => ({
    type: APP.LOAD
})

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
