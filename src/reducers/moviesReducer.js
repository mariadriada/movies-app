import { MOVIES } from '../constants'

const moviesReducer = (state = [], action) => {  
    if (action.type === MOVIES.LOAD_SUCCESS) {
        return action.movies.results        
    }
    return state
}

export default moviesReducer