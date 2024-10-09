/* React */
import axios from "axios";

/* Material ui */
import IconButton  from "@mui/material/IconButton";

/* API */
import { logOut } from "../api/authentications/token";

/* Icons */
import {
  LogoutIcon
} from '../assets/icons';

const Logout = () => {

  const handleLogout = async()  => {
    try {
      let refreshToken=localStorage.getItem('refresh_token')
      const data = logOut(refreshToken)
      if(data) {
        localStorage.clear()
        axios.defaults.headers.common['Authorization'] = null;
        window.location.href = '/login'
      }
    } catch (error) {
      console.log('logout not working', error)
    }
  }

  return (
    <div className='flex justify-end p-5'>
      <div className="cursor-pointer">
        <IconButton onClick={handleLogout} >
          <LogoutIcon width='20px'/>
        </IconButton>
      </div>
    </div>
  )
}

export default Logout;