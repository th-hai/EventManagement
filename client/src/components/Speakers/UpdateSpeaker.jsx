import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from "axios";
import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import validator from 'validator';
const initialState = {
    name: '',
    job: '',
    email: '',
    bio: '',
    facebookUrl: '', 
    twitterUrl: '',
    instagramUrl: '',
    err: '',
    success: ''
  }

  
  const UpdateSpeaker = () => {
    const [data, setData] = useState(initialState)
    const [avatar, setAvatar] = useState('');
    const [loading, setLoading] = useState(false);
    const token = useSelector(state => state.token);

    const navigate = useNavigate()
    let { id } = useParams();
    
    useEffect(() => {
        axios
          .get("/api/speakers/" + id)
          .then((res) => {
            setData(res.data);
            //   console.log(res)
          })
          .catch((error) => {
            return setData({...data, err: error.message , success: ''})
          });
      }, []);

    const {name, job ,email, bio, avatarUrl, facebookUrl, twitterUrl, instagramUrl, err, success} = data

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
        const res = await axios.post('/api/upload/upload_speaker', formData, {
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
    }

    const handleSubmit = async e => {
      e.preventDefault()  
      
      if(validator.isEmpty(name) || validator.isEmpty(job) || validator.isEmpty(email) ) {
        return setData({...data, err: "You must fill all required field (name, job, email)" , success: ''})
      }

      if(!(validator.isEmail(email))) {
        return setData({...data, err: "Email address is not valid" , success: ''})
      }

      try {
        const newData = {
          name: name ,
          job: job,
          email: email,
          bio: bio,
          avatarUrl: avatar ? avatar : avatarUrl,
          socialNetwork: {
            facebookUrl: facebookUrl,
            twitterUrl: twitterUrl,
            instagramUrl: instagramUrl
          }
      }
          axios.patch('/api/speakers/'+ id, newData,{
              headers: {Authorization: token}
          })
          
          setData({...data, err: '' , success: "Update Speaker Successffully!"})
          navigate('/dashboard/speakers')
      } catch (err) {
          setData({...data, err: err.response.data.msg , success: ''})
      }
    
    }

  return (
    <div>
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="p-3 ml-3 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Speaker Profile</h3>
        <p className="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {loading && <h3>Loading.....</h3>}
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit} >
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={data ? name : ''} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="job" className="block text-sm font-medium text-gray-700">Job</label>
                <input type="text" name="job" id="job" required onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={data ? job : ''}/>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email </label>
                <input type="email" name="email" id="email" onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={data ? email : ''} />
              </div>
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                  Social Networks
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    Facebook
                  </span>
                  <input type="text" name="facebookUrl" id="facebookUrl" onChange={handleChangeInput} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" defaultValue={''} />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm py-3">
                  <span className="inline-flex items-center px-5 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    Twitter
                  </span>
                  <input type="text" name="twitterUrl" id="twitterUrl" onChange={handleChangeInput} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" defaultValue={''} />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    Instagram
                  </span>
                  <input type="text" name="instagramUrl" id="instagramUrl" onChange={handleChangeInput} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" defaultValue={''}/>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Speaker Information
              </label>
              <div className="mt-1">
                <textarea id="bio" name="bio" onChange={handleChangeInput} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="About speaker" defaultValue={data ? bio : ''} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  {/* <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg> */}
                  <img src={data ? avatarUrl : avatar}/>
                </span>
                <input type="file" onChange={changeAvatar} className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"/>
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
export default UpdateSpeaker;
