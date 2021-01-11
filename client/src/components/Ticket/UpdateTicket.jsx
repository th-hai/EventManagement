import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from "axios";
import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import validator from 'validator';
const initialState = {
    name: '',
    price: 0,
    type: '',
    detail: '',
    quantity: 0,
    err: '',
    success: ''
  }

const UpdateTicket = () => {
    const [ticket, setTicket] = useState(initialState)
    const token = useSelector(state => state.token);
    let { id } = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get("https://event-management-hcmute.herokuapp.com/api/tickets/" + id)
          .then((res) => {
            setTicket(res.data);
            //   console.log(res)
          })
          .catch((error) => {
            return setTicket({...ticket, err: error.message , success: ''})
          });
      }, []);

    const {name, type, price, detail, quantity, err, success} = ticket

    const handleChangeInput = async e => {
        const {name, value} = e.target
        setTicket({...ticket, [name]:value, err: '', success: ''})
        console.log(ticket);
    }

    const handleSubmit = async e => {
      e.preventDefault()  
      
      if(validator.isEmpty(name) || validator.isEmpty(type)) {
        return setTicket({...ticket, err: "You must fill all required field (name, type, price, quantity)" , success: ''})
      }

      setTicket({...ticket, price: (price instanceof String) ? Number(price) : price})
      setTicket({...ticket, quantity: (quantity instanceof String) ? Number(quantity) : quantity})


      try {
        const newTicket = {
          name: name,
          type: type,
          price: price,
          quantity: quantity,
          detail: detail
      }
          axios.patch(`https://event-management-hcmute.herokuapp.com/api/tickets/${id}`, newTicket,{
              headers: {Authorization: token}
          })
          
          setTicket({...ticket, err: '' , success: "Update Ticket Succesfully!"})
      } catch (err) {
          setTicket({...ticket, err: err.response.data.msg , success: ''})
      }
      navigate('/dashboard/tickets')
    
    }

  return (
    <div>
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="p-3 ml-3 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Update Ticket</h3>
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
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ticket Name</label>
                <input type="text" name="name" id="name" required onChange={handleChangeInput} defaultValue={ticket ? name : ''} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type Name</label>
                <input type="text" name="type" id="type" required onChange={handleChangeInput} defaultValue={ticket ? type : ''} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                    Price & Quantity
            </label>
            <div className="grid grid-cols-6 gap-6">
                
                <div className="col-span-6 sm:col-span-3 mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    Price
                    </span>
                    <input type="number" min="0" name="price" required id="price" onChange={handleChangeInput} value={ticket ? price : 0} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    Quantity
                    </span>
                    <input type="number" min="0" name="quantity" required id="quantity" onChange={handleChangeInput} value={ticket ? quantity : 0} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                </div>
            </div>
            <div>
              <label htmlFor="detail" className="block text-sm font-medium text-gray-700">
                Ticket Description
              </label>
              <div className="mt-1">
                <textarea id="detail" name="detail" onChange={handleChangeInput} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your ticket information.." defaultValue={ticket ? detail : ''} />
              </div>
            </div>
            
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update
              </button>
            </div>
          </div>
        </div>
        </form>
    </div>
  </div>
</div>
  );
};
export default UpdateTicket;
