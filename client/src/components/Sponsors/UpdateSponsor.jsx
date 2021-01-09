import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import validator from 'validator';
const initialState = {
    name: '',
    logo: '',
    description: '',
    err: '',
    success: ''
  }

const UpdateSponsor = () => {
    const [sponsor, setSponsor] = useState(initialState)
    const [logoUrl, setLogo] = useState('');
    const [loading, setLoading] = useState(false);
    const token = useSelector(state => state.token);

    const navigate = useNavigate()
    let { id } = useParams();

    useEffect(() => {
        axios
          .get("/api/sponsors/" + id)
          .then((res) => {
            setSponsor(res.data);
          })
          .catch((error) => {
            return setSponsor({...sponsor, err: error.message , success: ''})
          });
      }, []);

    const {name, logo, description, err, success} = sponsor

    const changeLogo = async (e) => {
      e.preventDefault();
      try {
        const file = e.target.files[0];
        if(!file) return setSponsor({...sponsor, err: "No files were uploaded." , success: ''})

        if(file.size > 1024 * 1024)
            return setSponsor({...sponsor, err: "Size too large." , success: ''})

        if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return setSponsor({...sponsor, err: "File format is incorrect." , success: ''})

        let formData =  new FormData()
        formData.append('file', file)

        setLoading(true)
        const res = await axios.post('/api/upload/upload_logo', formData, {
            headers: {'content-type': 'multipart/form-data', Authorization: token}
        })

        setLoading(false)
        setLogo(res.data.url);
        setSponsor({...sponsor, logo: res.data.url});
      } catch (err) {
        setSponsor({...sponsor, err: err.message, success: ''})
      }
    } 

    const handleChangeInput = async e => {
        const {name, value} = e.target
        setSponsor({...sponsor, [name]:value, err: '', success: ''})
        console.log(sponsor);
    }

    const handleSubmit = async e => {
      e.preventDefault()  
      
      if(validator.isEmpty(name) || validator.isEmpty(description) ) {
        return setSponsor({...sponsor, err: "You must fill all required field (name, logo, description)" , success: ''})
      }

      try {
        const newSponsor = {
          name: name,
          logo: logo,
          description: description
      }
          axios.patch(`/api/sponsors/${id}`, newSponsor,{
              headers: {Authorization: token}
          })
          setSponsor({...sponsor, err: '' , success: "Add Speaker Successffully!"})
          navigate('/dashboard/sponsors')
      } catch (err) {
          setSponsor({...sponsor, err: err.response.data.msg , success: ''})
      }
    
    }

  return (
    <div>
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="p-3 ml-3 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Sponsor Information</h3>
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
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name </label>
                <input type="text" name="name" id="name" onChange={handleChangeInput} defaultValue={sponsor ? name : ''} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Sponsor Description
              </label>
              <div className="mt-1">
                <textarea id="description" name="description" onChange={handleChangeInput} rows={3} defaultValue={sponsor ? description : ''} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Sponsor detail..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Logo
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  {/* <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg> */}
                  <img src={logo ? logo : logoUrl}/>
                </span>
                <input type="file" onChange={changeLogo} className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"/>
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
export default UpdateSponsor;
