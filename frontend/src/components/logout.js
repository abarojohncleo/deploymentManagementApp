import { useEffect } from "react";
import axios from "axios";
import { logOut } from "../api/authentications/token";

const Logout = () => {

  useEffect(() => {
    (async () => {
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
    })();
  }, [])

  return (
    <div></div>
  )
}

export default Logout;