import { take, fork, put, call } from 'redux-saga/effects'

import { MOVIES } from '../constants'
import { 
    loadMovieReviews,
    setMovieReviews,
    setErrorMovieReviews
} from '../actions'
import { fetchMovieReviews } from '../api'


export function* handleMovieReviewsRequest(id){ 
   try {            
        yield put(loadMovieReviews(id))
        const res = yield call(fetchMovieReviews, id);
        yield put(setMovieReviews(id, res))            
        return true
    }
    catch(error){
        yield put(setErrorMovieReviews(id))   
    } 
}

export default function* watchCharacterReviewsRequest(){
    while(true) {
        //When load movies, request reviews 
        const { movies } = yield take(MOVIES.LOAD_SUCCESS)           

        // Get reviews for each movie
        for (let i=0; i<movies.results.length; i++) { 
            yield fork(handleMovieReviewsRequest, movies.results[i].id)
        }
    }
} 