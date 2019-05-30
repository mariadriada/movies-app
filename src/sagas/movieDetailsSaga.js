import { take, fork, put, call } from 'redux-saga/effects'

import { MOVIES } from '../constants'
import { 
    loadMovieDetails,
    setMovieDetails,
    setErrorMovieDetails
} from '../actions'
import { fetchMovieDetails } from '../api'


export function* handleMovieDetailsRequest(id){ 
   try {            
        yield put(loadMovieDetails(id))
        const res = yield call(fetchMovieDetails, id);
        console.log('res', res)
        yield put(setMovieDetails(id, res))            
        return true
    }
    catch(error){
        yield put(setErrorMovieDetails(id))   
    } 
}

export default function* watchCharacterDetailsRequest(){
    while(true) {
        //When load movies, request details 
        const { movies } = yield take(MOVIES.LOAD_SUCCESS)       

        // Get details for each movie
        for (let i=0; i<movies.results.length; i++) {           
            yield fork(handleMovieDetailsRequest, movies.results[i].id)
        }
    }
} 