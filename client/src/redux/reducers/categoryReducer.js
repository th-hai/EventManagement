import ACTIONS from '../actions/'

const initialState = {
    categories: [],
    selectedCategories: []
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            }
        default:
            return state
    }
}

export default categoryReducer