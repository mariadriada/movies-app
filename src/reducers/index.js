import { combineReducers } from 'redux'
import loadingReducer from './loadingReducer'
import moviesReducer from './moviesReducer'
import movieDetailsReducer from './movieDetailsReducer'
import movieReviewsReducer from './movieReviewsReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    movies: moviesReducer,
    details: movieDetailsReducer,
    reviews: movieReviewsReducer
})

export default rootReducer