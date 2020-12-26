import React, {useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg} from '../utils/Notification';
import { isMatch, isEmpty, isLength, isEmail} from '../utils/Validate';

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

const Register = () => {
  
  const [user, setUser] = useState(initialState)

  const {name, email, password, cf_password, err, success} = user

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
      console.log(user);
  }


  const handleSubmit = async e => {
      e.preventDefault()
      if(isEmpty(name) || isEmpty(password))
              return setUser({...user, err: "Please fill in all fields.", success: ''})

      if(!isEmail(email))
          return setUser({...user, err: "Invalid emails.", success: ''})

      if(isLength(password))
          return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
      
      if(!isMatch(password, cf_password))
          return setUser({...user, err: "Password did not match.", success: ''})

      try {
          const res = await axios.post('/user/register', {
              name, email, password
          })

          setUser({...user, err: '', success: res.data.msg})
      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  return (
    <div className="border-2 border-gray-100 h-screen flex justify-center items-center rounded ">
      <div class="container mx-auto rounded">
        <div class="flex justify-center px-6 my-12 rounded">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg rounded-lg">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              //   style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1551223314-04619119edbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80)`,
              }}
            ></div>

            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border">
              <h1 class="pt-4 text-5xl text-center">Create an account</h1>
              {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
              <form onSubmit={handleSubmit}class="w-full max-w-sm m-auto text-gray-600 background-white  py-8">
              <label for="name" class="block">
            <span class="font-sans text-sm text-gray-700">
              Full Name
            </span>
            <input type="text" id="name" name="name" value={name} onChange={handleChangeInput}
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
                <label for="email" class="block">
            <span class="font-sans text-sm text-gray-700">
              Email Address
            </span>
            <input type="email" id="email" name="email" value={email} onChange={handleChangeInput}
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>

          <label for="password" class="block">
            <span class="font-sans text-sm text-gray-700">
              Password
            </span>
            <input type="password" id="password" name="password" value={password} onChange={handleChangeInput}
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
          <label for="cf_password" class="block">
            <span class="font-sans text-sm text-gray-700">
              Confirm Password
            </span>
            <input type="password" id="cf_password" name="cf_password" value={cf_password} onChange={handleChangeInput}
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
                <div class="mb-6 text-center">
                  <button
                    class=" mt-4 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-lg text-blue-500 align-baseline hover:text-blue-800 mb-2"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-lg text-blue-500 align-baseline hover:text-blue-800"
                  > 
                    <Link to='/login'> Already have an account? Login!</Link> 
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
