import { all } from 'redux-saga/effects';

import moviesSaga from './moviesSaga'
import movieDetailSaga from './movieDetailsSaga'

export default function* rootSaga(){   
    yield all([
        moviesSaga(),
        movieDetailSaga()
    ])
}