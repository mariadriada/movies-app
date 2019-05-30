import { combineReducers } from 'redux'
import loadingReducer from './loadingReducer'
import moviesReducer from './moviesReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    movies: moviesReducer 
})

export default rootReducer