import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios";
import DatePicker from "react-datepicker";

import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import validator from 'validator';
const initialState = {
    name: '',
    address: '',
    dateofBirth: new Date(),
    phone: '',
    avatarUrl: '', 
    err: '',
    success: ''
  }

const CreateSpeaker = () => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const auth = useSelector(state => state.auth);
    const token = useSelector(state => state.token);
    const [avatar, setAvatar] = useState('');

    const navigate = useNavigate()

    const {user} = auth;
    
    function isDate(_date){
        const _regExp  = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');
        return _regExp.test(_date);
    }
    const {name, address, dateofBirth, phone, avatarUrl, err, success} = data;

    const changeAvatar = async (e) => {
      e.preventDefault();
      try {
        const file = e.target.files[0];
        if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

        if(file.size > 1024 * 1024)
            return setData({...data, err: "Size too large." , success: ''})

        if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return setData({...data, err: "File format is incorrect." , success: ''})

        let formData =  new FormData()
        formData.append('file', file)

        setLoading(true)
        const res = await axios.post('https://event-management-hcmute.herokuapp.com/api/upload/upload_speaker', formData, {
            headers: {'content-type': 'multipart/form-data', Authorization: token}
        })

        setLoading(false)
        setAvatar(res.data.url);
      } catch (err) {
        setData({...data, err: err.message, success: ''})
      }
    } 

    const handleChangeInput = async e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
        console.log(data);
    }

    const handleRemove = async () => {
        setAvatar(user.avatarUrl);
        // fileInput.value = "";
    }

    const handleSubmit = async e => {
      e.preventDefault()  
      
      
      if(validator.isEmpty(name) ) {
        return setData({...data, err: "You must fill the name" , success: ''})
      }

      try {
        const newData = {
          name: name,
          address: address,
          dateofBirth: dateofBirth,
          phone: phone,
          avatarUrl: avatar,
      }
          axios.patch('https://event-management-hcmute.herokuapp.com/api/users/profile', newData,{
              headers: {Authorization: token},
              user
          })
          
          setData({...data, err: '' , success: "Update Profile Successfully!"})
        //   navigate('/home')
      } catch (err) {
          setData({...data, err: err.response.data.msg , success: ''})
      }
    
    }

  return (
    <div>
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="p-3 ml-3 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Update Profile</h3>
      </div>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit} >
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Photo
              </label>
                <div className="flex flex-wrap justify-center">
                    <div className="w-6/12 sm:w-4/12 px-4">
                        <img src={avatar ? avatar : user.avatarUrl} alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div>
                <input type="file" onChange={changeAvatar} className="mt-5 mx-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"/>
                <button onClick={handleRemove} class="bg-red-500 ml-3 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"> X</button>
            </div>
            
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" defaultValue={user ? user.name: ''} required onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" name="phone" id="phone" defaultValue={user ? user.phone: ''} onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
        
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email </label>
                <input type="email" name="email" id="email" defaultValue={user ? user.email: ''} disabled={true} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address </label>
                <input type="text" name="address" id="address" defaultValue={user ? user.address : ''} onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">Day of Birth</label>
                  <DatePicker selected={isDate(user.dateofBirth) ? new Date(user.dateofBirth) : null} onChange={date => setData({...data, dateofBirth: date})} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update
              </button>
            </div>
          </div>
        </div></form>
    </div>
  </div>
</div>
  );
};
export default CreateSpeaker;
