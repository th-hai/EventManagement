import ACTIONS from './index'
import axios from 'axios'


export const fetchCategories = async (token) => {
    const res = await axios.get('https://event-management-hcmute.herokuapp.com/api/categories', {
        headers: {Authorization: token}
    })
    return res;
}

export const dispatchGetCategories = (res) => {
    return {
        type: ACTIONS.GET_ALL_CATEGORIES,
        payload: {
            categories: res.categories
        }
    }
}