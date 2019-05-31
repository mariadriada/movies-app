import { APP, MOVIES } from '../constants'
import { 
    setMovies,
    setErrorMovies
} from '../actions'
import { fetchMovies } from '../api'

import { takeEvery, put, call } from 'redux-saga/effects'


export function* handleMoviesLoad(){ 
   yield console.log('handleMoviesLoad()')
   
    try {       
        const movies = yield call(fetchMovies)  
        yield put(setMovies(movies))
    }
    catch(error){
        yield put(setErrorMovies(error.toString()))
    }   

}

export default function* watchMoviesLoad(){
    yield takeEvery(MOVIES.LOAD, handleMoviesLoad)
}