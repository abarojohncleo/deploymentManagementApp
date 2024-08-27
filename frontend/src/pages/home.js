import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";

const Home = () => {

  useEffect(() => {
    let authToken = localStorage.getItem('access_token')
    if(!authToken) {
      window.location.href = '/login';
    }
  }, [])

  return (
    <div>
      <Navigation />
      <div>Home</div>
    </div>
  )
};

export default Home;