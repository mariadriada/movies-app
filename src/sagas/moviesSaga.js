import { APP } from '../constants'

import { takeEvery } from 'redux-saga/effects'


export function* handleAppLoad(){ 
   yield console.log('handleAppLoad()')
}

export default function* watchMoviesLoad(){
    yield takeEvery(APP.LOAD, handleAppLoad)
}