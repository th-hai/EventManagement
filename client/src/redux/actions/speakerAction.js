import ACTIONS from './index'
import axios from 'axios'
import { allFieldsValidation } from '../../components/utils/Validation';

export const fetchSpeakers = () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get(`/api/speakers`);
  
        dispatch({
          type: ACTIONS.FETCH_SPEAKERS,
          payload: response.data
        });
      } catch (error) {
        // handleError(error, dispatch);
      }
    };
  };

  export const addSpeaker = () => {
    return async (dispatch, getState) => {
      try {
        const rules = {
          name: 'required|min:3',
          bio: 'required|min:10|max:100',
          job: 'required|max:30',
          email: 'required'
        };
  
        const speaker = getState().speaker;
  
        let newSpeaker = {
            speaker
        };
  
        const { isValid, errors } = allFieldsValidation(newSpeaker, rules, {
          'required.name': 'Name is required.',
          'min.name': 'Name must be at least 3 characters.',
          'required.bio': 'Bio is required.',
          'min.bio': 'Description must be at least 10 characters.',
          'max.bio':
            'Description may not be greater than 100 characters.',
          'required.job': 'Job is required.',
          'required.email': 'Email is required.'
        });
  
        if (!isValid) {
          return dispatch({ type: ACTIONS.SET_SPEAKER_FORM_ERRORS, payload: errors });
        }
  
        const response = await axios.post(`/api/speakers/create`, newSpeaker);
        console.log(response)
        const successfulOptions = {
          title: `${response.data.message}`,
          position: 'tr',
          autoDismiss: 1
        };
  
        if (response.data.success === true) {
          dispatch({
            type: ACTIONS.ADD_SPEAKER,
            payload: response.data
          });
        }
      } catch (error) {
        // handleError(error, dispatch);
      }
    };
}