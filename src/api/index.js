const URL = "https://api.themoviedb.org/3/movie/"
const key = "60e3dd28477f9dfed5826a79089a7538"

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

/**
 * fetchMovies
 * Get data of movies
 */
export const fetchMovies = async () => {   
    const response = await fetch(`${URL}popular?api_key=${key}`)   
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }    
    return data
}

/**
 * fetchMovieDetails
 * @param {*} id : id of movie
 * Get details of movie
 */
export const fetchMovieDetails = async id => {   
    const response = await fetch(`${URL}${id}?api_key=${key}`)   
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }    
    return data
}

/**
 * fetchMovieReviews
 * @param {*} id : id of movie
 * Get reviews of movie
 */
export const fetchMovieReviews = async id => {   
    console.log('api', `${URL}${id}reviews?api_key=${key}`)
    const response = await fetch(`${URL}${id}/reviews?api_key=${key}`)   
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }    
    return data.results
}