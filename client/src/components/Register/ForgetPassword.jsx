import React, {useState} from 'react'
import axios from 'axios'
import {isEmail} from '../utils/Validate'
import {showErrMsg, showSuccessMsg} from '../utils/Notification'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('/api/users/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }
    
    return (
        <div class="flex items-center justify-center h-screen bg-gray-200 sm:px-6">
            <div class="w-full max-w-sm p-4 bg-white rounded-md shadow-md sm:p-6">
            <div class="flex items-center justify-center">
                <span class="text-xl font-medium text-gray-900">Forgot Your Password?</span>
            </div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            
            <div class="mt-4">
                <label for="password" class="block mt-3">
                    <span class="text-sm text-gray-700">Your email:</span>
                    <input type="email" name="email" id="email" value={email} onChange={handleChangeInput} 
                        class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                        required />
                </label>
                <div class="mt-6">
                    <button onClick={forgotPassword}
                        class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Reset My Password</button>
                </div>
                
            </div>
            </div>  
        </div>
    )
}

export default ForgotPassword