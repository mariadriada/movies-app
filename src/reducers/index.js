import { combineReducers } from 'redux'
import loadingReducer from './loadingReducer'
import moviesReducer from './moviesReducer'
import movieDetailsReducer from './movieDetailsReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    movies: moviesReducer,
    details: movieDetailsReducer
})

export default rootReducer