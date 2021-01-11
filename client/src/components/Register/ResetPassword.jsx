import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { showErrMsg, showSuccessMsg} from '../utils/Notification';
import { isMatch, isLength} from '../utils/Validate';


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {token} = useParams();

    const {password, cf_password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post('/api/users/reset', {password: password}, {
                headers: {'Authorization': token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        <div class="flex items-center justify-center h-screen bg-gray-200 sm:px-6">
            <div class="w-full max-w-sm p-4 bg-white rounded-md shadow-md sm:p-6">
            <div class="flex items-center justify-center">
                <span class="text-xl font-medium text-gray-900">Reset Password</span>
            </div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            
            <div class="mt-4">
                <label for="password" class="block mt-3">
                    <span class="text-sm text-gray-700">New Password</span>
                    <input type="password" name="password" id="password" value={password} onChange={handleChangeInput} 
                        class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                        required />
                </label>
                <label for="password" class="block mt-3">
                    <span class="text-sm text-gray-700">Confirm Password</span>
                    <input type="password" name="cf_password" id="cf_password" value={cf_password} onChange={handleChangeInput}
                        class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                        required />
                </label>
                <div class="mt-6">
                    <button onClick={handleResetPass}
                        class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Reset</button>
                </div>
                
            </div>
            </div>  
        </div>
    )
}

export default ResetPassword