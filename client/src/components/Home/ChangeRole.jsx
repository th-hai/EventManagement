import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'
import Select from 'react-select'

import {showErrMsg, showSuccessMsg} from '../utils/Notification'

const initialState = {
    role: 0,
    err: '',
    success: ''
}

const options = [
    { value: 0, label: 'Customer' },
    { value: 1, label: 'Admin' }
  ]

function ChangeRole() {
    const token = useSelector(state => state.token);
    const navigate = useNavigate();
    let { id } = useParams();
    const [data, setData] = useState(initialState);

    const {role, err, success} = data

    const handleChangeRole = async e => {
        setData({...data, role: e.value})
    }

    const changeRole = async () => {
        console.log(role)
        try {
            axios.patch(`/api/users/${id}`, {role: role},{
                headers: {Authorization: token}
            })

            setData({...data, err: '', success: "Update role succesfully"})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
        navigate('/dashboard/users')
    }
    
    return (
        <div class="flex items-center justify-center h-screen bg-gray-200 sm:px-6">
            <div class="w-full max-w-sm p-4 bg-white rounded-md shadow-md sm:p-6">
            <div class="flex items-center justify-center">
                <span class="text-xl font-medium text-gray-900">Change Role</span>
            </div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            
            <div class="mt-4">
                <Select options={options} onChange={handleChangeRole} />
                <div class="mt-6">
                    <button onClick={changeRole}
                        class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Update Role</button>
                </div>
                
            </div>
            </div>  
        </div>
    )
}

export default ChangeRole