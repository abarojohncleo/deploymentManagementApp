import React, {useState} from 'react';
import axios from "axios";
import { getToken } from '../api/authentications/token';
import Toast from './global/toast';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showToast, setShowToast] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message) => toast(message);

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password:password
    }

    try {
      const data = await getToken(user);
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
      window.location.href = '/';
    } catch (error) {
      // console.error('There was an error logging in!', error);
      notify('There was an error logging in!')
    }
  }
  
  return (
    <div className='container mx-auto flex h-screen'>
      <div className="w-full max-w-xs mx-auto my-20">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
        <h1 className='text-xl font-bold text-wrap text-center pb-2'>Eguji Technologies</h1>
        <p className='text-center text-xs pb-5'>Dev Engineers Deployment Manager</p>
        {/* username */}
        <div className="mb-4">
          <input onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border-2  border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" required/>
        </div>
        {/* password */}
        <div className="mb-6">
          <input type='password' onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border-2 border-primary rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Password" required/>
        </div>

        <div className="flex items-center justify-center">
          <button onClick={submit} className="bg-blue-500 hover:bg-blue-700 hover:bg-secondary border-white w-96 text-white bg-primary w-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs text-white">
        Don't have account yet? <em><a href='/#' className='underline underline-offset-3'>Register here.</a></em>
      </p>
    </div>
    {/* {toast && (
      <Toast />
    )} */}
    <ToastContainer />
    </div>
  );
}

export default Login;