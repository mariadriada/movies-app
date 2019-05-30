import { APP } from '../constants'

const loadingReducer = (state = false, action) => {
    if (action.type === APP.LOAD)
        return state

    return state
}

export default loadingReducer