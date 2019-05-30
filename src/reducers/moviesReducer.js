import { MOVIES } from '../constants'

const moviesReducer = (state = {}, action) => {  
    if (action.type === MOVIES.LOAD_SUCCESS) {
        return {
            data: action.movies.results,
            page: action.movies.page,
            total_results: action.movies.total_results,
            total_pages: action.movies.total_pages
        }
    }
    return state
}

export default moviesReducer