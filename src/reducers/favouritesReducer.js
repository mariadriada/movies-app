import { FAVOURITES } from '../constants'

const favouritesReducer = (state = [], action) => {
    
    switch(action.type ){
        case FAVOURITES.ADD:
            return [ ...state, {
                [action.id]: action.data }
            ]
            
        case FAVOURITES.REMOVE:
            state.splice(state.indexOf(action.id), 1)
            return [...state]

        default:
            return state
    }   
}

export default favouritesReducer