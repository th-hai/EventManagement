import ACTIONS from './index'
import axios from 'axios'

export const getEvents = async (token) => {
    const res = await axios.get('/events')
    return res
}

export const getEventById = async (id) => {
    const res = await axios.get('/events/'+id)
    console.log(id)
    return {
        type: ACTIONS.GET_ONE_EVENT,
        payload: {
            event: res.data
        }
    }
}