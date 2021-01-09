import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from "axios";
import Selector from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import validator from 'validator';


const initialState = {
  name: '',
  type: '',
  categories: [],
  sponsors: [],
  tickets: [],
  dressCode: '',
  speakers: [],
  address: '',
  location: '',
  startTime: new Date(),
  endTime: new Date(),
  plannedCost: '',
  actualCost: '',
  description: '',
  imageUrl: [],
  thumbnail: '', 
  success: '',
  err: ''
}

const UpdateEvent = () => {
  
  // Get categories
  const [event, setEvent] = useState(initialState)
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategories] = useState([]);
  const [ticketsList, setTickets] = useState([]);
  const [sponsorsList, setSponsors] = useState([]);
  const [speakersList, setSpeakers] = useState([]);
  const token = useSelector(state => state.token);

  const { name, type, categories, tickets, dressCode, speakers, sponsors, address, location, startTime, endTime, plannedCost, actualCost, description, imageUrl, thumbnail, success, err} = event;

  const navigate = useNavigate()
  let { id } = useParams();

  useEffect(() => {
    axios.get('/api/events/' + id)
    .then((res) => {
      setEvent(res.data);
      console.log(res.data)
    })
    .catch((error) => {
      return setEvent({...event, err: error.message , success: ''})
    });
  }, [])

  useEffect(() => {
    axios.get('/api/categories')
    .then(res => {
      setCategories(res.data.categories.map(category => ({value: category._id, label: category.name})));
    })
    .catch(error => {
      return setEvent({...event, err: error.message , success: ''})
    })
  }, [])

  useEffect(() => {
    axios.get('/api/tickets')
    .then(res => {
      setTickets(res.data.tickets.map(ticket => ({value: ticket._id, label: `${ticket.name} - ${ticket.type}`})));
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    axios.get('/api/sponsors/all')
    .then(res => {
      setSponsors(res.data.sponsors.map(sponsor => ({value: sponsor._id, label: sponsor.name})));
      // console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    axios.get('/api/speakers/all')
    .then(res => {
      setSpeakers(res.data.speakers.map(speaker => ({value: speaker._id, label: speaker.name})));
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const handleChangeInput = async e => {
    const {name, value} = e.target
    setEvent({...event, [name]:value, err: '', success: ''})
    console.log(event);
  }

  const handleChangeSponsors = async e => {
    if(Array.isArray(e))
    setEvent({...event, sponsors: e.map(sponsor => sponsor.value), err: '', success: ''})
  }

  const handleChangeCategories = async e => {
    if(Array.isArray(e))
    setEvent({...event, categories: e.map(category => category.value), err: '', success: ''})
  }
  
  const handleChangeSpeakers = async e => {
    if(Array.isArray(e))
    setEvent({...event, speakers: e.map(speaker => speaker.value), err: '', success:''})
  }
  
  const handleChangeTickets = async e => {
    if(Array.isArray(e))
    setEvent({...event, tickets: e.map(ticket => ticket.value), err: '', success:''})
  }

  const handleImageUpload = async e => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      if(!file) return setEvent({...event, err: "No files were uploaded." , success: ''})

      if(file.size > 3024 * 2024)
          return setEvent({...event, err: "Size too large." , success: ''})

      if(file.type !== 'image/jpeg' && file.type !== 'image/png')
          return setEvent({...event, err: "File format is incorrect." , success: ''})

      const files = e.target.files;
      const formData = new FormData()
      if(files.length)
      {
        for(const file of [...files]) {
          formData.append('image', file);
        }
      }
      else
        formData.append('image', file);
      
      setLoading(true)
      
      const res = await axios.post('/api/upload/upload_image', formData, {
        headers: {'content-type': 'multipart/form-data', Authorization: token}
      })
      
      setLoading(false)

      setEvent({...event, imageUrl: res.data.images});
    } catch (err) {
      setEvent({...event, err: err.message, success: ''})
    }

  }

  const changeThumbnail = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if(!file) return setEvent({...event, err: "No files were uploaded." , success: ''})

      if(file.size > 3024 * 2024)
          return setEvent({...event, err: "Size too large." , success: ''})

      if(file.type !== 'image/jpeg' && file.type !== 'image/png')
          return setEvent({...event, err: "File format is incorrect." , success: ''})

      let formData =  new FormData()
      formData.append('file', file)
      
      setLoading(true)
      
      const res = await axios.post('/api/upload/upload_thumbnail', formData, {
        headers: {'content-type': 'multipart/form-data', Authorization: token}
      })
      
      setLoading(false)

      setEvent({...event, thumbnail: res.data.url});
    } catch (err) {
      setEvent({...event, err: err.message, success: ''})
    }
  } 

  const handleSubmit = async e => {
    e.preventDefault()  
    
    if(validator.isEmpty(name) || validator.isEmpty(type) || validator.isEmpty(location) || validator.isEmpty(address)) {
      return setEvent({...event, err: "You must fill all required field (name, type, location, address)" , success: ''})
    }

    if(startTime && endTime) {
      if(startTime > endTime) {
        return setEvent({...event, err: "End time must be after start time" , success: ''})
      }
    } else return setEvent({...event, err: "You must enter start time and end time" , success:''})

    if(imageUrl.length < 1) {
      return setEvent({...event, err: "You must upload at least one image" , success: ''})
    }

    try {
      const newEvent = event
        axios.patch(`/api/events/${id}`, newEvent,{
            headers: {Authorization: token}
        })
        
        setEvent({...event, err: '' , success: "Update Event Successffully!"})
      } catch (err) {
        setEvent({...event, err: err.response.data.msg , success: ''})
      }
      navigate('/dashboard/events')
  
  }

  return (
    <div>
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg m-5 font-medium leading-6 text-gray-900">Update An Event</h3>
      </div>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {loading && <h3>Uploading.....</h3>}
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" id="name" onChange={handleChangeInput} defaultValue={event ? name : ''} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
              <input type="text" name="type" id="type" onChange={handleChangeInput} defaultValue={(event && event.type) ? type : ''} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="categories" className="block mb-1 text-sm font-medium text-gray-700">Categories</label>
                <Selector id="categories" name="categories" onChange={handleChangeCategories} isMulti options={categoriesList} defaultValue={categories ? categories : []} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="tickets" className="block text-sm font-medium text-gray-700">Tickets</label>
                <Selector id="tickets" name="tickets" onChange={handleChangeTickets} isMulti options={ticketsList} defaultValue={tickets ? tickets : []} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="sponsors" className="block text-sm font-medium text-gray-700">Sponsors</label>
                <Selector id="sponsors" name="sponsors" onChange={handleChangeSponsors}  isMulti options={sponsorsList} defaultValue={sponsors ? sponsors : []} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="speakers" className="block text-sm font-medium text-gray-700">Speakers</label>
                <Selector id="speakers" name="speakers" onChange={handleChangeSpeakers}  isMulti options={speakersList} defaultValue={speakers ? speakers : []} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">Start Time</label>
                  <DatePicker selected={startTime ? new Date(startTime) : null} onChange={date => setEvent({...event, startTime: date})} timeInputLabel="Time:" showTimeInput dateFormat="Pp" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">End Time</label>
                  <DatePicker selected={endTime ? new Date(endTime) : null} onChange={date => setEvent({...event, endTime: date})} timeInputLabel="Time:" showTimeInput dateFormat="Pp" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" id="address" onChange={handleChangeInput} defaultValue={address ? address : ''} autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <input type="text" name="location" id="location" onChange={handleChangeInput} defaultValue={location ? location : ''} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                    Dress Code
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      CODE
                    </span>
                    <input type="text" name="dressCode" id="dressCode" onChange={handleChangeInput} defaultValue={dressCode ? dressCode : null} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="White" />
                  </div>
                </div>
              </div>
            <div className="grid grid-cols-6 gap-6">  
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="plannedCost" className="block text-sm font-medium text-gray-700">Planned Cost</label>
                <input type="number" min="0" name="plannedCost" id="plannedCost" onChange={handleChangeInput} value={plannedCost ? plannedCost : 0} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="actualCost" className="block text-sm font-medium text-gray-700">Actual Cost</label>
                <input type="number" min="0" name="actualCost" id="actualCost" onChange={handleChangeInput} value={actualCost ? actualCost : 0}  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea id="description" name="description" rows={3} onChange={handleChangeInput}  defaultValue={ description ? description : ''} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Event Detail..."/> 
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your event. URLs are hyperlinked.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photos
              </label>
              <div className="mt-2 flex items-center">
                <input type="file" multiple="multiple" onChange={handleImageUpload} defaultValue={imageUrl ? imageUrl : []} className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail photo
              </label>
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <img src={thumbnail ? thumbnail : 'https://via.placeholder.com/600x300'}></img>
                  
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" onChange={changeThumbnail} defaultValue={thumbnail ? thumbnail : null} className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" disabled={loading} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};
export default UpdateEvent;
