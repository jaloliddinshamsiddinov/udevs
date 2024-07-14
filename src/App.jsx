// import React from 'react'
import { useEffect } from 'react';
import { Home } from './pages'
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Home />
  )
}

export default App