import { all } from 'redux-saga/effects';

import moviesSaga from './moviesSaga'
import movieDetailSaga from './movieDetailsSaga'
import movieReviewsSaga from './movieReviewsSaga'

export default function* rootSaga(){   
    yield all([
        moviesSaga(),
        movieDetailSaga(),
        movieReviewsSaga()
    ])
}