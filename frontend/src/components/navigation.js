import React ,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token !== null) {
      setIsAuth(true);
    } 
  }, []); 

  return (
    <Box sx={{ flexGrow: 1 , display:'flex', justifyContent:'end'}}>
      {isAuth ? (
        <Link href="/logout" underline="none" style={{color:'black'}}>
          Logout
        </Link>
        ) : (
        <Link href="/login" underline="none" style={{color:'black'}}>
          Login
        </Link>
      )}
    </Box>
  );
}

export default Navigation;