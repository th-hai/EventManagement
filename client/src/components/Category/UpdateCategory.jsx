import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import validator from 'validator';
const initialState = {
    name: '',
    description: '',
    err: '',
    success: ''
  }

const UpdateCategory = () => {
    const [category, setCategory] = useState(initialState)
    const token = useSelector(state => state.token);

    const navigate = useNavigate()
    let { id } = useParams();
    
    useEffect(() => {
        axios
          .get(`https://event-management-hcmute.herokuapp.com/api/categories/${id}`)
          .then((res) => {
            setCategory(res.data);
          })
          .catch((error) => {
            return setCategory({...category, err: error.message , success: ''})
          });
      }, []);

    const {name, description, err, success} = category

    const handleChangeInput = async e => {
        const {name, value} = e.target
        setCategory({...category, [name]:value, err: '', success: ''})
        console.log(category);
    }

    const handleSubmit = async e => {
      e.preventDefault()  
      
      if(validator.isEmpty(name) ) {
        return setCategory({...category, err: "Category name, description are required" , success: ''})
      }

      try {
        const newCategory = {
          name: name,
          description: description
      }
          axios.patch(`https://event-management-hcmute.herokuapp.com/api/categories/${id}`, newCategory,{
              headers: {Authorization: token}
          })
          
          setCategory({...category, err: '' , success: "Add Category Successffully!"})
          navigate('/dashboard/categories')
      } catch (err) {
          setCategory({...category, err: err.response.data.msg , success: ''})
      }
    
    }

  return (
    <div>
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="p-3 ml-3 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Create Category</h3>
        <p className="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit} >
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name </label>
                <input type="text" name="name" id="name" onChange={handleChangeInput} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={category ? name : ''} />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Category Description
              </label>
              <div className="mt-1">
                <textarea id="description" name="description" onChange={handleChangeInput} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Category detail..." defaultValue={category ? description : ''} />
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
export default UpdateCategory;
