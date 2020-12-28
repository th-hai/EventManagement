import ACTIONS from '../actions/'

const initialState = {
    events: [],
    event: {}
}

const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.GET_ONE_EVENT:
            return {
                ...state,
                event: action.payload.event
            }
        default:
            return state
    }
}

export default eventReducer