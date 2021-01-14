import React, {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../utils/Notification'
import { dispatchLogin } from '../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

const Login = () => {
  const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('https://event-management-hcmute.herokuapp.com/api/users/login', {email, password}, {withCredentials: true})
            setUser({...user, err: '', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            navigate("/")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
      try {
          const res = await axios.post('https://event-management-hcmute.herokuapp.com/api/users/google_login', {tokenId: response.tokenId})

          setUser({...user, error:'', success: res.data.msg})
          localStorage.setItem('firstLogin', true)

          dispatch(dispatchLogin())
          navigate('/')
      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  const responseFacebook = async (response) => {
      try {
          const {accessToken, userID} = response
          const res = await axios.post('https://event-management-hcmute.herokuapp.com/api/users/facebook_login', {accessToken, userID})

          setUser({...user, error:'', success: res.data.msg})
          localStorage.setItem('firstLogin', true)

          dispatch(dispatchLogin())
          navigate('/')
      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }


  return (
    <div class=" z-10 bg-white ">
  <div class="flex items-center justify-center min-h-screen text-center">

    <div
      class="inline-block px-16 pb-16 pt-8 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl w-1/3 "
      role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="pb-2 bg-white">
        <div class="flex-col items-center sm:flex">
          <div class="mt-3 mb-1 text-center sm:text-left">
            <h4 class=" my-4 text-3xl font-black leading-6 text-gray-700" id="modal-headline">
              Sign in
            </h4>
          </div>
        </div>
      </div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
      <div class="mb-4">
            <FacebookLogin
              appId="220240899580390"
              autoLoad={false}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
              cssClass="justify-center w-full px-9 py-2 font-bold text-white bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none text-xl flex justify-start items-center" />
        {/* <button
          class="justify-center w-full px-3 py-2 font-bold text-white bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none text-xl flex justify-start items-center">
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="mr-4"></FontAwesomeIcon>  Login with Facebook
        </button> */}
      </div>
      <div class="">
        {/* <div
          class="justify-center w-full px-3 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none text-xl flex items-center ">
          <FontAwesomeIcon icon={faGoogle} size="lg" className="mr-3 -ml-6"></FontAwesomeIcon> Login with Google
        </div> */}
        <GoogleLogin
          clientId="738042331922-0bqj1k8rjstgbv1i98vsgct6jfvfqui6.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="justify-center w-full px-3 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none text-xl flex items-center"
        />
      </div>
      <div class="w-full py-4 text-xl text-center text-gray-600">
        or login with email address
      </div>
      <div class="px-4 text-xs  sm:px-6 sm:flex-row-reverse">
        <form onSubmit={handleSubmit} class="mt-4">
          <label for="email" class="block">
            <span class="font-sans text-sm text-gray-700">
              Email Address
            </span>
            <input type="email" id="email" name="email" onChange={handleChangeInput} autocomplete="username"
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
          <label for="password" class="block mt-3">
            <span class="font-sans text-sm text-gray-700">
              Password
            </span>
            <input type="password" id="password" name="password" onChange={handleChangeInput} autocomplete="current-password"
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
    
          <div class="justify-start w-full px-4 mt-6 font-sans text-xs leading-6 text-center text-gray-500">
            <a class="block text-lg text-indigo-700 fontme hover:underline"><Link to="/forget">Forgot your password</Link></a>
          </div>
          <div class="mt-6">
            <button type="submit"
              class="w-full px-4 py-2 text-lg text-center text-white bg-blue-500 rounded-md hover:bg-indigo-500">Sign in
              now</button>
          </div>
        </form>
      </div>
      <div class="justify-start w-full px-4 mt-6 font-sans text-lg leading-6 text-center text-gray-500">
        Don't have an account?
        <a class="block text-base text-indigo-700 fontme hover:underline mt-4"><Link to="/register">Sign up</Link></a>
      </div>
    </div>
  </div>
</div>
  );
};
export default Login;
