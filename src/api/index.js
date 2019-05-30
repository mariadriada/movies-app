const URL = "https://api.themoviedb.org/3/movie/popular"
const key = "60e3dd28477f9dfed5826a79089a7538"

export const fetchMovies = async () => {   
    const response = await fetch(`${URL}?api_key=${key}`)   
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }    
    return data
}
