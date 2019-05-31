import { REVIEWS } from '../constants'

const movieReviewReducer = (state = {}, action) => {
    
    switch (action.type) {
        case REVIEWS.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    reviews: null,
                    error: false
                }
            };
        case REVIEWS.LOAD_SUCCESS:
        return {
            ...state,
            [action.id]: {
                isLoading: false,
                reviews: action.reviews,
                error: false
            }
        };
        case REVIEWS.LOAD_FAIL:
        return {
            ...state,
            [action.id]: {
                isLoading: false,
                reviews: null,
                error: true
            }
        };

        default:
            return state
    }
}

export default movieReviewReducer 