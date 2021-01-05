import ACTIONS from '../actions/'

const initialState = {
    speakers: [],
    speaker: {
        name: '',
        job: '',
        email: '',
        bio: '',
        avatarUrl: '',
        socialNetwork: {}
    },
    formErrors: {}
}

const speakerReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.FETCH_SPEAKERS:
            return {
                ...state,
                speakers: action.payload
            }
        case ACTIONS.CREATE_SPEAKER:
            return {
                ...state,
                speakers: [...state.speakers, action.payload]
            }
        case ACTIONS.SET_SPEAKER_FORM_ERRORS:
            return {
                ...state,
                formErrors: action.payload
            };
        default:
            return state
    }
}

export default speakerReducer