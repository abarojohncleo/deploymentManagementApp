/* React */
import React, {useEffect} from 'react'

/* Material UI */
import { Box, Typography } from '@mui/material';

const Home = () => {

  useEffect(() => {
    let authToken = localStorage.getItem('access_token')
    if(!authToken) {
      window.location.href = '/login';
    }
  }, [])

  return (
    <div>
      {/* <Navigation /> */}
      <div>Home</div>
    </div>
  )
};

export default Home;

